const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-detail-template-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/src/templates/ProductDetailTemplate.js"))),
  "component---src-templates-product-categories-template-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/src/templates/ProductCategoriesTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/src/pages/index.js")))
}

