async function handleEvent(event: FetchEvent) {
  const request = event.request
  if (!event.request.url.endsWith('.mp4')) {
    return await fetch(request.url)
  }

  const headers = new Map(event.request.headers)
  const cacheUrl = new URL(request.url)
  const cacheKey = new Request(cacheUrl.toString(), request)
  const cache = caches.default
  let response = await cache.match(cacheKey)
  if (!response) {
    response = await fetch(request)
    response = new Response(response.body, response)
    response.headers.append('Cache-Control', 's-maxage=10')

    event.waitUntil(cache.put(cacheKey, response.clone()))

    if (headers.get('range')) {
      const { from, to } =
        headers.get('range')?.match(/^bytes=(?<from>[0-9]+)-(?<to>[0-9]*)$/)
          ?.groups ?? {}
      const arrayBuffer = await response.arrayBuffer()
      if (to === '' || Number(to) <= arrayBuffer.byteLength) {
        const sliced = arrayBuffer.slice(
          Number(from),
          Number(to ?? arrayBuffer.byteLength),
        )
        return new Response(sliced, {
          ...response,
          status: 206,
          headers: new Headers([
            ...response.headers,
            ['content-range', `bytes ${from}-${to}/${arrayBuffer.byteLength}`],
            ['content-length', String(sliced.byteLength)],
          ]),
        })
      }
    }
  }
  return response
}

addEventListener('fetch', (event) => {
  try {
    return event.respondWith(handleEvent(event))
  } catch (e) {
    return event.respondWith(new Response('Error thrown ' + e.message))
  }
})
