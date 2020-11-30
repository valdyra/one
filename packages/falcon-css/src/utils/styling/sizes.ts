import { CssSize, SizeUnit } from '$types'

import { cssSize } from './parsers'
import { cssProperty } from './properties'

export const em = (size: number): CssSize => [size, SizeUnit.Em]
export const px = (size: number): CssSize => [size, SizeUnit.Px]
export const percent = (size: number): CssSize => [size, SizeUnit.Percent]
export const rem = (size: number): CssSize => [size, SizeUnit.Rem]
export const vh = (size: number): CssSize => [size, SizeUnit.Vh]
export const vw = (size: number): CssSize => [size, SizeUnit.Vw]

export const height = cssProperty<CssSize>(cssSize)('height')
export const minHeight = cssProperty<CssSize>(cssSize)('min-height')
export const maxHeight = cssProperty<CssSize>(cssSize)('max-height')

export const width = cssProperty<CssSize>(cssSize)('width')
export const minWidth = cssProperty<CssSize>(cssSize)('min-width')
export const maxWidth = cssProperty<CssSize>(cssSize)('max-width')

export const calculateSizes = (operation: (total: number, num: number) => number) => <
  Unit extends SizeUnit
>(
  sizes: [number, Unit][]
): CssSize => [sizes.map((s) => s[0]).reduce(operation, 0), sizes[0][1] ?? SizeUnit.Px]

export const addSizes = calculateSizes((total: number, size: number) => total + size)
export const subSizes = calculateSizes((total: number, size: number) => total - size)
