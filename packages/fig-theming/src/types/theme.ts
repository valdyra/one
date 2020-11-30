import { ColorPalette, CssSize } from '@figouzes/falcon-css'

export interface DragonColors {
  red: ColorPalette
  blue: ColorPalette
  black: ColorPalette
  white: ColorPalette
  green: ColorPalette
  gold: ColorPalette
}

export interface ThemeColors {
  dragons: DragonColors
  info: ColorPalette
  success: ColorPalette
  error: ColorPalette
}

export type ThemeColor = keyof ThemeColors

export interface ThemeSpacings {
  tiny: CssSize
  small: CssSize
  medium: CssSize
  large: CssSize
  xl: CssSize
  xxl: CssSize
  xxxl: CssSize
}

export type ThemeSpacing = keyof ThemeSpacings

export interface ThemeBreakpoints {
  mobile: CssSize
  tablet: CssSize
  desktop: CssSize
  widescreen: CssSize
}

export interface Theme {
  colors: ThemeColors
  spacings: ThemeSpacings
}
