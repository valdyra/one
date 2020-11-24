import { Position } from '$types'
import { cssProperty, numberValue, stringValue } from '$utils'

export const position = cssProperty<Position>(stringValue)('position')
export const zIndex = cssProperty<number>(numberValue)('z-index')
