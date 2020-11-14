import { OctalNumber, Percentage } from '$types'

export type RGB = [OctalNumber, OctalNumber, OctalNumber]

export type RGBA = [OctalNumber, OctalNumber, OctalNumber, Percentage]

export interface ColorPalette {
  c100: RGB
  c300: RGB
  c500: RGB
  c700: RGB
  c900: RGB
}
