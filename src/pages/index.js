import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from '../components/productsListing'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductsListing />
  </Layout>
)

export default IndexPage
