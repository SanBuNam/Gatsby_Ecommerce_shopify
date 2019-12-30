import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing/ProductsListing"
import Billboard from "../components/Billboard"
import Slider from "../components/slider/Slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Billboard />
    <ProductsListing />
  </Layout>
)

export default IndexPage
