import { RGB, RGBA, Hue } from '$fcss/types'
import { cssProperty } from '$fcss/utils'

export const rgba = ([r, g, b, a]: RGBA): string => `rgba(${r},${g},${b},${a})`
export const rgb = ([r, g, b]: RGB): string => `rgb(${r},${g},${b})`

// Handle Hue properly
export const hue = ([r, g, b, a]: Hue): string => (a ? rgba([r, g, b, a]) : rgb([r, g, b]))

// Internal color property
const colorProperty = cssProperty<Hue>(hue)

// CSS colored properties
export const backgroundColor = colorProperty('background-color')
export const textColor = colorProperty('color')
