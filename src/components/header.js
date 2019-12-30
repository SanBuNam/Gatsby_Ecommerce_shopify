import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { useTransition } from "react-spring"
import { FaShoppingCart } from "react-icons/fa"
import "../style.scss"
import { StoreContext } from "../context/StoreContext"
import logo from "../images/HeartFace.png"
import Cart from "./Cart/Cart"
import Loader from "./Loader"
import Nav from "./Nav"

const Header = ({ siteTitle }) => {
  const { isCartOpen, toggleCartOpen, checkout, isLoading } = useContext(
    StoreContext
  )

  const transitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%, 0, 0)" },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: "translate3d(100%, 0, 0)" },
  })

  const qty = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <>
      <header
        className="level is-mobile"
        style={{
          padding: "10px 5%",
          background: "var(--white)",
          boxShadow: "var(--elevation-2)",
        }}
      >
        <div className="level-left">
          <Link to="/">
            <img
              style={{ height: 100, maxHeight: "none", marginBottom: 0 }}
              src={logo}
              alt="Shop Logo"
            />
          </Link>
          <Nav />
        </div>
        <div className="level-item has-text-centered">
          <Link to="/">
            <h1 className="title">Good Daddy Shop</h1>
            <p className="heading" style={{ color: "black", margin: "3px 0" }}>
              Give only the best for your baby.
            </p>
          </Link>
        </div>
        <div className="level-right">
          <div>
            <button
              className="button"
              style={{
                position: "relative",
                background: "transparent",
                border: "none",
              }}
              onClick={toggleCartOpen}
            >
              {qty > 0 && (
                <div
                  style={{
                    color: "var(--black)",
                    position: "absolute",
                    background: "var(--red)",
                    borderRadius: 15,
                    textAlign: "center",
                    height: 30,
                    top: -5,
                    right: -5,
                    width: 30,
                    lineHeight: "30px",
                  }}
                >
                  {qty}
                </div>
              )}
              <FaShoppingCart
                style={{ color: "var(--black)", height: 30, width: 30 }}
              />
            </button>
          </div>
        </div>
        {transitions.map(
          ({ item, key, props }) => item && <Cart key={key} style={props} />
        )}
      </header>
      <Loader />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
