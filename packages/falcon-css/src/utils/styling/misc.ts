import { stringValue } from './parsers'
import { untypedCssProperty } from './properties'

export const src = untypedCssProperty<string>(stringValue)('src')
