export const dateFormatter = (date: Date | string) => {
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return dateFormatter.format(typeof date === "string" ? new Date(date) : date)
}
