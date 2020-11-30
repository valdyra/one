import { DragonColors, Theme, ThemeBreakpoints, ThemeColors, ThemeSpacings } from '$types'
import { SizeUnit } from '@figouzes/falcon-css'

export const dragonColors: DragonColors = {
  red: {
    c100: [97, 35, 43],
    c300: [97, 0, 13],
    c500: [173, 0, 23],
    c700: [224, 0, 30],
    c900: [250, 55, 81],
  },
  blue: {
    c100: [41, 52, 92],
    c300: [13, 29, 87],
    c500: [28, 62, 186],
    c700: [32, 72, 214],
    c900: [139, 161, 240],
  },
  green: {
    c100: [69, 92, 78],
    c300: [39, 87, 58],
    c500: [84, 186, 125],
    c700: [96, 214, 144],
    c900: [50, 240, 126],
  },
  gold: {
    c100: [122, 80, 2],
    c300: [173, 114, 3],
    c500: [187, 142, 60],
    c700: [250, 165, 4],
    c900: [250, 190, 80],
  },
  white: {
    c100: [119, 115, 112],
    c300: [166, 160, 156],
    c500: [181, 181, 181],
    c700: [240, 219, 204],
    c900: [242, 234, 228],
  },
  black: {
    c100: [0, 0, 0],
    c300: [0, 9, 10],
    c500: [0, 15, 18],
    c700: [0, 37, 43],
    c900: [0, 46, 54],
  },
}

export const colors: ThemeColors = {
  dragons: dragonColors,
  info: dragonColors.blue,
  success: dragonColors.green,
  error: dragonColors.red,
}

// Spacings
export const spacings: ThemeSpacings = {
  tiny: [4, SizeUnit.Px],
  small: [8, SizeUnit.Px],
  medium: [16, SizeUnit.Px],
  large: [24, SizeUnit.Px],
  xl: [32, SizeUnit.Px],
  xxl: [48, SizeUnit.Px],
  xxxl: [64, SizeUnit.Px],
}

// Breakpoints
export const breakpoints: ThemeBreakpoints = {
  mobile: [768, SizeUnit.Px],
  tablet: [1024, SizeUnit.Px],
  desktop: [1440, SizeUnit.Px],
  widescreen: [1824, SizeUnit.Px],
}

// Compose theme
export const theme: Theme = {
  colors,
  spacings,
}
