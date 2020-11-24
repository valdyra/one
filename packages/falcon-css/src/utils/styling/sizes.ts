import { CssSize, SizeUnit } from '$types'

export const em = (size: number): CssSize => [size, SizeUnit.Em]
export const px = (size: number): CssSize => [size, SizeUnit.Px]
export const percent = (size: number): CssSize => [size, SizeUnit.Percent]
export const rem = (size: number): CssSize => [size, SizeUnit.Rem]
