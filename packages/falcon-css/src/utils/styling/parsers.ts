import { BorderStyle, CssSize, Hue, RGB, RGBA, VariableValue } from '$types'

// Literal union types or enums
export const stringValue = <T extends string>(x: T): string => x
export const numberValue = (x: number): string => `${x}`

export const multipleValues = <T>(parseFunc: (x: T) => string) => (values: T[]): string =>
  values.map(parseFunc).join(', ')

export const quotedValue = <T extends string>(x: T): string => `"${x}"`

// Font families
export const fontFamilies = multipleValues<string>(quotedValue)

// CSS sizes
export const cssSize = ([n, unit]: CssSize): string => `${n}${unit}`

// Color values
export const rgb = ([r, g, b]: RGB): string => `rgb(${r},${g},${b})`
export const rgba = ([r, g, b, a]: RGBA): string => `rgba(${r},${g},${b},${a})`

// RGB / RGBA hues
export const hue = ([r, g, b, a]: Hue): string => (a ? rgba([r, g, b, a]) : rgb([r, g, b]))

// Variable values
export const variableValues = <T>(parseFunction: (x: T) => string) => (
  values: VariableValue<T>
): string => values.map(parseFunction).join(' ')

export const variableCssSize = variableValues<CssSize>(cssSize)
export const variableBorderStyle = variableValues<BorderStyle>(stringValue)
export const variableHue = variableValues<Hue>(hue)
