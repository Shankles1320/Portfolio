import React from "react"
import {
  HeroWrapper,
  StyledHeadshot,
  StyledHeadshotWrapper,
  StyledHeroTitle,
  StyledHeroName,
} from "./heroStyles"
import Headshot from "../../images/headshot2.png"

class Hero extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <HeroWrapper>
        <StyledHeadshotWrapper>
          <StyledHeadshot src={Headshot} alt="" />
        </StyledHeadshotWrapper>
        <StyledHeroName>Trey Shank</StyledHeroName>
        <StyledHeroTitle>full stack developer</StyledHeroTitle>
      </HeroWrapper>
    )
  }
}

export default Hero
