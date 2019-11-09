import styled from "styled-components"

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f6f9;
  height: 330px;
  border-bottom: 1px solid lightgrey;

  @media (max-width: 800px) {
    font-size: 60px;
    margin-top: 30px;
    height: 40vh;
  }
`
export const StyledHeadshot = styled.img`
  height: 95px;
  width: 95px;
  border-radius: 50%;
  margin-top: 25px;
`

export const StyledHeadshotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 95px;
  width: 95px;
  border-radius: 50%;
  margin-top: 50px;
  border: 1px solid #b8b8bc;
`

export const StyledHeroName = styled.div`
  margin-top: 15px;
  font-size: 80px;

  @media (max-width: 440px) {
    font-size: 60px;
    margin-top: 15px;
  }
`

export const StyledHeroTitle = styled.div`
  color: #9f9fa3;
  margin-top: 30px;
  font-size: 35px;
`
