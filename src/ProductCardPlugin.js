import { ProductCard } from "./components"

export default {
  install: (app) => {
    app.component("ProductCard", ProductCard)
  }
}

export { ProductCard }