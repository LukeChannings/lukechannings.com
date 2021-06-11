export const dateFormatter = (date: Date | string) => {
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  try {
    return dateFormatter.format(
      typeof date === "string" ? new Date(date) : date,
    )
  } catch (err) {
    console.warn(`Couldn't format ${date}`)
    return date
  }
}
