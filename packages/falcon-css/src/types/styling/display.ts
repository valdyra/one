import * as Css from 'csstype'

export interface StrictFlexParams {
  grow: Css.Property.FlexGrow
  shrink: Css.Property.FlexShrink
}

export type FlexParams = Partial<StrictFlexParams>

export type Flexbox =
  | [Css.Property.FlexDirection, Css.Property.JustifyContent, Css.Property.AlignItems]
  | [Css.Property.FlexDirection, Css.Property.JustifyContent, Css.Property.AlignItems, FlexParams]
