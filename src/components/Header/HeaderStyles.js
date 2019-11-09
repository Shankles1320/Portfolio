import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px 0 60px;
  height: 50px;
  border-bottom: 1px solid lightgray;

  @media (max-width: 800px) {
    padding: 0 10px 0 10px;
    height: 35px;
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    z-index: 9999;
  }
`

export const StyledImg = styled.img`
  margin-top: 25px;
  height: 60px;
  width: 100px;

  @media (max-width: 800px) {
    height: 50px;
    width: 50px;
  }
`

export const StyledHamburgerIcon = styled.img`
  margin-top: 4px;
  height: 31px;
  width: 31px;
`

export const ImageWrapper = styled(Link)`
  display: block;
  @media (max-width: 800px) {
    display: none;
  }
`

export const LinksWrapper = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`

export const StyledAnchorTag = styled(Link)`
  margin: 0 0 0 20px;
  text-decoration: none;
  font-size: 22px;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`
