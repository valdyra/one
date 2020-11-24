import { BorderStyle, CssSize, Hue, VariableCssSize } from '$types'
import { cssProperty, cssSize, hue, stringValue, variableCssSize } from '$utils'

export const borderRadius = cssProperty<VariableCssSize>(variableCssSize)('border-radius')

export const borderColor = cssProperty<Hue>(hue)('border-color')
export const borderStyle = cssProperty<BorderStyle>(stringValue)('border-style')
export const borderWidth = cssProperty<CssSize>(cssSize)('border-width')
