import * as Css from 'csstype'

import { CssSize, Hue } from '$types'

import { cssProperty } from './properties'
import { cssSize, hue, stringValue } from './parsers'

export const fontFamily = cssProperty<string>(stringValue)('font-family')

export const fontSize = cssProperty<CssSize>(cssSize)('font-size')

export const fontStyle = cssProperty<Css.Property.FontStyle>(stringValue)('font-style')

export const fontWeight = cssProperty<CssSize>(cssSize)('font-weight')

export const lineHeight = cssProperty<CssSize>(cssSize)('line-height')

export const textColor = cssProperty<Hue>(hue)('color')
