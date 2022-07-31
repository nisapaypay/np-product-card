# Product Card

This package is built using Vue 3 and Vite.

## Installation

Use the package manager yarn or npm.

```bash
yarn add np-product-card
# or
npm install np-product-card
```

## Usage

If you want to import js files globally you can do it in your ``main.js`` file
```python
import { createApp } from 'vue'
import ProductCardPlugin from 'np-product-card'
import 'np-product-card/styles.css'

const app = createApp(App)
app.use(ProductCardPlugin)
app.mount('#app')

# add to <template>
<product-card />
<product-card size="small" />
<product-card type="disabled" />
```

or only import in components
```python
import { ProductCard } from 'np-product-card'
import 'np-product-card/styles.css'

# add to <template>
<product-card />
<product-card size="small" />
<product-card type="disabled" />
```

## Props
Property Name | Type | Required | Value | Description
--- | --- | --- | --- | ---
`size` | String | No | `small` or NULL | Product card width is 132px.
`type` | String | No | `disabled` or NULL | Button is Out of Stock.


## Storybook
https://62e680d3f4f505d6dbca9e79-wtndhasyfj.chromatic.com/
