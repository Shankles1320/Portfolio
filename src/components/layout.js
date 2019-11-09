import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Sidebar from "react-sidebar"
import Helmet from "react-helmet"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import {
  HamburgerNavWrapper,
  StyledAnchorTag,
} from "../components/layoutStyles"
import "./layout.css"

const HamburgerNavigation = ({ toggleSideBarOff }) => {
  return (
    <>
      <HamburgerNavWrapper>
        <StyledAnchorTag onClick={toggleSideBarOff} to="/">
          Home
        </StyledAnchorTag>
        <StyledAnchorTag onClick={toggleSideBarOff} to="/portfolio">
          Portfolio
        </StyledAnchorTag>
      </HamburgerNavWrapper>
    </>
  )
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
    }
  }

  closeSidebar = () => {
    this.setState({
      sidebarOpen: false,
    })
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open })
  }

  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div>
            <Helmet>
              <link href="dist/hamburgers.css" rel="stylesheet" />>
            </Helmet>
            <Sidebar
              sidebar={
                <HamburgerNavigation toggleSideBarOff={this.closeSidebar} />
              }
              open={this.state.sidebarOpen}
              styles={{
                sidebar: {
                  background: "#f4f6f9",
                  width: "150px",
                },
              }}
              onSetOpen={this.onSetSidebarOpen}
            >
              <Header openSideBar={this.onSetSidebarOpen} />
              {children}
              <Footer />
            </Sidebar>
          </div>
        )}
      />
    )
  }
}

export default Layout
