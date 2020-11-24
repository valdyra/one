export * from './borders'
export * from './colors'
export * from './display'
export * from './parsers'
export * from './position'
export * from './spacings'
export * from './text'

// Raw CSS property line
export const cssProperty = <T>(parseFunc: (x: T) => string) => (property: string) => (
  value: T
): string => `${property}: ${parseFunc(value)};`

// Join raw CSS properties
export const cssProperties = (properties: string[]): string => properties.join('')
