import styled from 'styled-components'
import { Link } from 'gatsby'

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ResponsiveHamburger = styled.div`
  display: block;

  @media (min-width: 800px) {
    display: none;
  }
`

export const HamburgerNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const StyledAnchorTag = styled(Link)`
  margin: 10px 0 0 30px;
  text-decoration: none;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`
