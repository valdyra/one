import * as Css from 'csstype'

import { CssSize, Hue } from '$types'

import { cssProperty } from './properties'
import { cssSize, hue, numberOrStringValue, stringValue } from './parsers'

export const fontFamily = cssProperty<string>(stringValue)('font-family')
export const fontSize = cssProperty<CssSize>(cssSize)('font-size')
export const fontStyle = cssProperty<Css.Property.FontStyle>(stringValue)('font-style')
export const fontVariant = cssProperty<Css.Property.FontVariant>(stringValue)('font-variant')
export const fontWeight = cssProperty<Css.Property.FontWeight>(numberOrStringValue)('font-weight')

export const textColor = cssProperty<Hue>(hue)('color')

export const lineHeight = cssProperty<CssSize>(cssSize)('line-height')
