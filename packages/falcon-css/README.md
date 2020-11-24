# What is FalconCSS ?

When contributing to the Figouzes project, I wanted to introduce a type-safe way to write CSS. I got used to a wonderful library called [elm-css](https://github.com/rtfeldman/elm-css), which is, in my opinion, a really optimal way of composing CSS (I could never thank RTFeldman enough for his work on elm-css).

It's a collection of types and framework-agnostic functions used to compose CSS. It currently is in very, very early stage and requires some heavy work.

### Examples

With server-side CSS building :
```ts
import {
  Display,
  backgroundColor,
  cssProperties,
  display
} from '@figouzes/falcon-css'

const generateCSS = cssProperties([
  display(Display.InlineBlock),
  backgroundColor([200, 255, 150])
])
```

With styled-components
```ts
import {
  Display,
  backgroundColor,
  cssProperties,
  display
} from '@figouzes/falcon-css'

import { styled } from 'your-styled-components-framework'

const myComponent = styled`
  ${display(Display.InlineBlock)}
  ${backgroundColor([200, 255, 150])}
`
```

With aJSS-style framework
```ts
import {
  Display,
  rgba
} from '@figouzes/falcon-css'

import { jss } from 'your-jss-like-framework'

const myElement = jss({
  display: Display.InlineBlock,
  backgroundColor: rgba([200, 250, 150])
})
```
