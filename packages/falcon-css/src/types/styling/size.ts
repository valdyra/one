import { VariableValue } from '$types'

export enum SizeUnit {
  Em = 'em',
  Percent = '%',
  Px = 'px',
  Rem = 'rem',
}

export type CssSize = [number, SizeUnit]

export type VariableCssSize = VariableValue<CssSize>
