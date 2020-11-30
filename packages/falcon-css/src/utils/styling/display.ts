import * as Css from 'csstype'

import { Flexbox, StrictFlexParams } from '$types'

import { cssProperties, cssProperty } from './properties'
import { numberOrStringValue, stringValue } from './parsers'

// Display property
export const display = cssProperty<Css.Property.Display>(stringValue)('display')

// Flex properties
export const alignItems = cssProperty<Css.Property.AlignItems>(stringValue)('align-items')
export const justifyContent = cssProperty<Css.Property.JustifyContent>(stringValue)(
  'justify-content'
)
export const flexDirection = cssProperty<Css.Property.FlexDirection>(stringValue)('flex-direction')
export const flexGrow = cssProperty<Css.Property.FlexGrow>(numberOrStringValue)('flex-grow')
export const flexShrink = cssProperty<Css.Property.FlexGrow>(numberOrStringValue)('flex-shrink')

// Parse flexbox
const defaultFlexboxParams: StrictFlexParams = {
  grow: 1,
  shrink: 1,
}

export const flexbox = ([direction, justify, align, params]: Flexbox): string =>
  cssProperties([
    display('flex'),
    flexDirection(direction),
    justifyContent(justify),
    alignItems(align),
    flexGrow(params?.grow ?? defaultFlexboxParams.grow),
    flexShrink(params?.shrink ?? defaultFlexboxParams.shrink),
  ])
