// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-product-detail-template-js": () => import("./../src/templates/ProductDetailTemplate.js" /* webpackChunkName: "component---src-templates-product-detail-template-js" */),
  "component---src-templates-product-categories-template-js": () => import("./../src/templates/ProductCategoriesTemplate.js" /* webpackChunkName: "component---src-templates-product-categories-template-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

