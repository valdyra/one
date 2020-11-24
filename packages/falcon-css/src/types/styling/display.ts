export enum Display {
  Block = 'block',
  Flex = 'flex',
  Grid = 'grid',
  Inline = 'inline',
  InlineBlock = 'inline-block',
  InlineFlex = 'inline-flex',
  InlineGrid = 'inline-grid',
  InlineTable = 'inline-table',
  None = 'none',
  Table = 'table',
}

export enum FlexDirection {
  Column = 'column',
  ReverseColumn = 'reverse-column',
  ReverseRow = 'reverse-row',
  Row = 'row',
}

export enum FlexJustify {
  Center = 'center',
  End = 'flex-end',
  Start = 'flex-start',
}

export enum FlexAlign {
  Center = 'center',
  End = 'flex-end',
  Start = 'flex-start',
  Stretch = 'stretch',
}

export interface StrictFlexParams {
  grow: number
  shrink: number
}

export type FlexParams = Partial<StrictFlexParams>

export type Flexbox =
  | [FlexDirection, FlexJustify, FlexAlign]
  | [FlexDirection, FlexJustify, FlexAlign, FlexParams]
