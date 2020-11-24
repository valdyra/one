# What is FalconCSS ?

When contributing to the Figouzes project, I wanted to introduce a type-safe way to write CSS. I got used to a wonderful library called [elm-css](https://github.com/rtfeldman/elm-css), which is, in my opinion, a really optimal way of composing CSS (I could never thank RTFeldman enough for his work on elm-css).

It's a collection of types and framework-agnostic functions used to compose CSS. It currently is in very, very early stage and requires some heavy work.

### Example

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

### Color-based functions
