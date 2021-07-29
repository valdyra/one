import { ColorPalette, CssSize } from '@valdyra/falcon-css'

// Colors
export interface DragonColors {
  red: ColorPalette
  blue: ColorPalette
  black: ColorPalette
  white: ColorPalette
  green: ColorPalette
  gold: ColorPalette
}

export type DragonColor = keyof DragonColors

export interface ThemeColors {
  dragons: DragonColors
  info: ColorPalette
  success: ColorPalette
  error: ColorPalette
}

export type ThemeColor = keyof ThemeColors

// Spacings
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

// Breakpoints
export interface ThemeBreakpoints {
  mobile: CssSize
  tablet: CssSize
  desktop: CssSize
  widescreen: CssSize
}

export type ThemeBreakpoint = keyof ThemeBreakpoints

// Fonts
export interface ThemeFonts {
  primary: string
}

// Composed Theme
export interface Theme {
  colors: ThemeColors
  spacings: ThemeSpacings
  fonts: ThemeFonts
}
