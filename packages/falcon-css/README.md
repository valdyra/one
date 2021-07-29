<p align="center">
  <img alt="FalconCSS" src="https://github.com/valdyra/one/blob/main/packages/falcon-css/logo.svg">
</p>

# What is FalconCSS ?

When contributing to the Valdyra project, I wanted to introduce a type-safe way to write CSS. I got used to a wonderful library called [elm-css](https://github.com/rtfeldman/elm-css), which is, in my opinion, a really optimal way of composing CSS (I could never thank RTFeldman enough for his work on elm-css).

It's a collection of types and framework-agnostic functions used to compose CSS. It currently is in very, very early stage and requires some heavy work. It also uses [csstype](https://github.com/frenic/csstype) to be as consistent as possible with CSS evolutions.

### Examples

With server-side CSS building :
```ts
import {
  backgroundColor,
  cssProperties,
  display
} from '@valdyra/falcon-css'

const generateCSS = cssProperties([
  display('inline-block'),
  backgroundColor([200, 255, 150])
])
```

With styled-components
```ts
import {
  backgroundColor,
  cssProperties,
  display
} from '@valdyra/falcon-css'

import { styled } from 'your-styled-components-framework'

const myComponent = styled`
  ${display('inline-block')}
  ${backgroundColor([200, 255, 150])}
`
```

With a JSS-style framework
```ts
import { rgba } from '@valdyra/falcon-css'

import { jss } from 'your-jss-like-framework'

const myElement = jss({
  display: 'inline-block',
  backgroundColor: rgba([200, 250, 150])
})
```
