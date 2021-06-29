async function handleEvent(event: FetchEvent) {
  const request = event.request
  if (!event.request.url.endsWith('.mp4')) {
    return await fetch(request.url)
  }

  const cacheUrl = new URL(request.url)
  const cacheKey = new Request(cacheUrl.toString(), request)
  const cache = caches.default

  const cachedResponse = await cache.match(cacheKey)

  if (cachedResponse) return cachedResponse

  const response = await fetch(request)

  // Do the inefficient thing and wait for the cache to be set before continuing.
  // This is much more reliable than writing my own HTTP 206 implementation (I tried).
  await cache.put(cacheKey, response.clone())
  return (await cache.match(cacheKey))!
}

addEventListener('fetch', (event) => {
  try {
    return event.respondWith(handleEvent(event))
  } catch (e) {
    return event.respondWith(new Response('Error thrown ' + e.message))
  }
})
