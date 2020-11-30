export const interpolateProperties = (selectors: string[]) => (properties: string) =>
  `${selectors.join(',')} {${properties}}`

export const interpolateProperty = (selector: string) => interpolateProperties([selector])

export const fontFace = interpolateProperty('@font-face')
