import { VariableValue } from '.'
import { Hue } from './colors'
import { CssSize } from './size'

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
