import React, { Component } from "react"
import {
  HeaderWrapper,
  StyledImg,
  LinksWrapper,
  StyledAnchorTag,
  ImageWrapper,
  StyledHamburgerIcon,
} from "./headerStyles"
import { ResponsiveHamburger } from "../layoutStyles"
import Logo from "../../images/TS-Logo.png"
let HamburgerIcon =
  "http://erictokatlian.tech.s3.amazonaws.com/hamburgerIcon.png"

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { openSideBar } = this.props
    return (
      <HeaderWrapper>
        <ImageWrapper to="/">
          <StyledImg src={Logo} alt="" />
        </ImageWrapper>
        <ResponsiveHamburger onClick={() => openSideBar(true)}>
          <StyledHamburgerIcon src={HamburgerIcon} alt="" />
        </ResponsiveHamburger>
        <LinksWrapper>
          <StyledAnchorTag to="/">Home</StyledAnchorTag>
          <StyledAnchorTag to="/portfolio">Portfolio</StyledAnchorTag>
        </LinksWrapper>
      </HeaderWrapper>
    )
  }
}

export default Header
