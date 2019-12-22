import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Product from './product'

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          publishedAt(formatString: "YYYY")
          description
          descriptionHtml
          variants {
            sku
            id
            title
            price
          }
        }
      }
    }
  }
`

const ProductsListing = () => {
    const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)
    return (
        <div>
          {allShopifyProduct.edges.map( edge => (
            <Product product={edge.node} key={edge.node.id} />
          ))}
        </div>
    )
}

export default ProductsListing