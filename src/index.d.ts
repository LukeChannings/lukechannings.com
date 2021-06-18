declare module "*.png" {
  const url: string
  export = url
}

declare module "*.module.css" {
  const classNames: Record<string, string>
  export default classNames
}
