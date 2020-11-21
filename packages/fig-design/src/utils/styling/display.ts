import { Display, FlexAlign, Flexbox, FlexDirection, FlexJustify, StrictFlexParams } from '$types'
import { cssProperty, cssProperties, numberValue, stringValue } from '$utils'

// Display property
export const display = cssProperty<Display>(stringValue)('display')

// Flex properties
export const alignItems = cssProperty<FlexAlign>(stringValue)('align-items')
export const justifyContent = cssProperty<FlexJustify>(stringValue)('justify-content')
export const flexDirection = cssProperty<FlexDirection>(stringValue)('flex-direction')
export const flexGrow = cssProperty<number>(numberValue)('flex-grow')
export const flexShrink = cssProperty<number>(numberValue)('flex-shrink')

// Parse flexbox
const defaultFlexboxParams: StrictFlexParams = {
  grow: 1,
  shrink: 1
}

export const flexbox = ([direction, justify, align, params]: Flexbox): string => cssProperties([
  display(Display.Flex),
  flexDirection(direction),
  justifyContent(justify),
  alignItems(align),
  flexGrow(params?.grow ?? defaultFlexboxParams.grow),
  flexShrink(params?.shrink ?? defaultFlexboxParams.shrink),
])

// Flexboxes
