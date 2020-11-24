import { CssSize, Hue, RGB, RGBA, VariableCssSize } from '$types'

// Literal union types or enums
export const stringValue = <T extends string>(x: T): string => `${x}`
export const numberValue = (x: number): string => `${x}`

// CSS sizes
export const cssSize = ([n, unit]: CssSize): string => `${n}${unit}`
export const variableCssSize = (sizes: VariableCssSize): string => sizes.map(cssSize).join(' ')

// Color values
export const rgb = ([r, g, b]: RGB): string => `rgb(${r},${g},${b})`
export const rgba = ([r, g, b, a]: RGBA): string => `rgba(${r},${g},${b},${a})`

// RGB / RGBA hues
export const hue = ([r, g, b, a]: Hue): string => (a ? rgba([r, g, b, a]) : rgb([r, g, b]))
