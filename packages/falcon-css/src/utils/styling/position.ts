import { Position, CssSize } from '$types'

import { cssProperty } from './properties'
import { cssSize, numberValue, stringValue } from './parsers'

export const position = cssProperty<Position>(stringValue)('position')
export const zIndex = cssProperty<number>(numberValue)('z-index')

export const top = cssProperty<CssSize>(cssSize)('top')
export const left = cssProperty<CssSize>(cssSize)('left')
export const right = cssProperty<CssSize>(cssSize)('right')
export const bottom = cssProperty<CssSize>(cssSize)('bottom')
