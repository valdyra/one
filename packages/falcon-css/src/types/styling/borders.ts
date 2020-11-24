import { CssSize, Hue, VariableValue } from '$types'

export enum BorderStyle {
  Dashed = 'dashed',
  Dotted = 'dotted',
  Double = 'double',
  Groove = 'groove',
  Hidden = 'hidden',
  Inset = 'inset',
  None = 'none',
  Outset = 'outset',
  Ridge = 'ridge',
  Solid = 'solid',
}

export type VariableBorderStyle = VariableValue<BorderStyle>

export type CssBorder = [CssSize, BorderStyle, Hue]
