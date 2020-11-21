import { ColorPalette } from '$types'

export interface ThemeColors {
  dragons: {
    red: ColorPalette
    blue: ColorPalette
    black: ColorPalette
    white: ColorPalette
    green: ColorPalette
    gold: ColorPalette
  }
}

export interface Theme {
  colors: ThemeColors
}
