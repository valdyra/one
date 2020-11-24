import { VariableBorderStyle, VariableCssSize, VariableHue } from '$types'
import { cssProperty, variableBorderStyle, variableCssSize, variableHue } from '$utils'

export const borderRadius = cssProperty<VariableCssSize>(variableCssSize)('border-radius')

export const borderColor = cssProperty<VariableHue>(variableHue)('border-color')
export const borderStyle = cssProperty<VariableBorderStyle>(variableBorderStyle)('border-style')
export const borderWidth = cssProperty<VariableCssSize>(variableCssSize)('border-width')
