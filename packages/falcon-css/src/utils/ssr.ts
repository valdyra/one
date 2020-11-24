export const interpolateProperties = (selectors: string[]) => (properties: string) =>
  `${selectors.join(',')} {${properties}}`
