import { CssSize, VariableCssSize } from '$types'

import { cssProperty } from '.'
import { cssSize, variableCssSize } from './parsers'

// Margin functions
export const margin = cssProperty<VariableCssSize>(variableCssSize)('margin')
export const marginTop = cssProperty<CssSize>(cssSize)('margin-top')
export const marginLeft = cssProperty<CssSize>(cssSize)('margin-left')
export const marginRight = cssProperty<CssSize>(cssSize)('margin-right')
export const marginBottom = cssProperty<CssSize>(cssSize)('margin-bottom')

// Padding functions
export const padding = cssProperty<VariableCssSize>(variableCssSize)('padding')
export const paddingTop = cssProperty<CssSize>(cssSize)('padding-top')
export const paddingLeft = cssProperty<CssSize>(cssSize)('padding-left')
export const paddingRight = cssProperty<CssSize>(cssSize)('padding-right')
export const paddingBottom = cssProperty<CssSize>(cssSize)('padding-bottom')
