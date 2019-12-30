import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled from "styled-components"

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 150px 1fr;
  background: var(--white);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledMain>
        <div>menu</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="section" style={{ minHeight: "90vh" }}>
            {children}
          </div>
        </div>
      </StyledMain>
      <footer
        className="footer"
        style={{
          background: "var(--gray-85)",
          color: "var(--black)",
          padding: "10px 0",
          textAlign: "center",
        }}
      >
        Copyright © {new Date().getFullYear()},{` `}
        <strong style={{ color: "var(--black)" }}>Good Daddy Shop</strong>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
