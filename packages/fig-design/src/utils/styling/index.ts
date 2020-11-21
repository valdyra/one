export * from './colors'

// Literal union types or enums
export const stringValue = <T extends string>(x: T): string => `${x}`
export const numberValue = (x: number): string => `${x}`

// Raw CSS property line
export const cssProperty = <T>(parseFunc: (x: T) => string) => (property: string) => (
  value: T
): string => `${property}: ${parseFunc(value)};`

// Join raw CSS properties
export const cssProperties = (properties: string[]): string => properties.join('')
