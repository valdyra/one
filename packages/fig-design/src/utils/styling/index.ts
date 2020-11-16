export * from './colors'

export const cssProperty = <T>(parseFunc: (x: T) => string) => (property: string) => (value: T): string => (
  `${property}: ${parseFunc(value)};`
)
