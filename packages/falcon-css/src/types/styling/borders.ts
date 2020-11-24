import { CssSize, Hue } from '$types'

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

export type CssBorder = [CssSize, BorderStyle, Hue]
