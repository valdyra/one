import * as Css from 'csstype'

// Raw CSS property line
export const cssProperty = <T>(parseFunc: (x: T) => string) => (
  property: keyof Css.PropertiesHyphen
) => (value: T): string => `${property}: ${parseFunc(value)};`

// Join raw CSS properties
export const cssProperties = (properties: string[]): string => properties.join('')
