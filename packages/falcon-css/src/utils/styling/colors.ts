import { Hue } from '$types'
import { cssProperty, hue } from '$utils'

// CSS general colored properties
export const backgroundColor = cssProperty<Hue>(hue)('background-color')
