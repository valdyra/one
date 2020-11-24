import { Hue } from '$types'

import { cssProperty } from './properties'
import { hue } from './parsers'

// CSS general colored properties
export const backgroundColor = cssProperty<Hue>(hue)('background-color')
