import { ColorPalette } from '$types'

export interface ThemeColors {
  primary: ColorPalette
  secondary: ColorPalette
  tertiary: ColorPalette
}

export interface Theme {
  colors: ThemeColors
}
