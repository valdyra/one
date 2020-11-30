import * as Css from 'csstype'

const injectProperty = <PropertyKey>() => <PropertyType>(
  parseFunc: (x: PropertyType) => string
) => (property: PropertyKey) => (value: PropertyType): string => `${property}: ${parseFunc(value)};`

// Single CSS property
export const cssProperty = injectProperty<keyof Css.PropertiesHyphen>()
export const untypedCssProperty = injectProperty<string>()

// Join raw CSS properties
export const cssProperties = (properties: string[]): string => properties.join('')
