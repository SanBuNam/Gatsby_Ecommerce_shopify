const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-page-template-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/src/templates/productPageTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/softdavidlee/Documents/Projects/Gatsby_Ecommerce_shopify/src/pages/page-2.js")))
}

