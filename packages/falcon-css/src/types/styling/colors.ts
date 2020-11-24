import { VariableValue } from '.'
import { OctalNumber } from '../number'

export type RGB = [OctalNumber, OctalNumber, OctalNumber]

export type RGBA = [OctalNumber, OctalNumber, OctalNumber, number]

export type Hue = RGB | RGBA

export interface ColorPalette {
  c100: RGB
  c300: RGB
  c500: RGB
  c700: RGB
  c900: RGB
}

export type VariableHue = VariableValue<Hue>
