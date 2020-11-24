import { VariableValue } from '.'

export enum SizeUnit {
  Em = 'em',
  Percent = '%',
  Px = 'px',
  Rem = 'rem',
  Vh = 'vh',
  Vw = 'vw',
}

export type CssSize = [number, SizeUnit]

export type VariableCssSize = VariableValue<CssSize>
