import styled from 'styled-components'

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 800px) {
    margin: 30px 0 50px 0;
  }
`

export const StyledPortfolioImage = styled.img`
  border-radius: 6px;
  margin-top: 10px;
  width: 530px;
  height: 330px;

  @media (max-width: 800px) {
    width: 250px;
    height: 125px;
  }
`

export const StyledPortfolioContent = styled.div`
  margin-top: 185px;
  width: 600px;

  @media (max-width: 800px) {
    margin-top: 155px;
    width: 340px;
  }
`

export const StyledPortfolioTitle = styled.div`
  font-size: 30px;
  margin-top: -150px;

  @media (max-width: 800px) {
    font-size: 23px;
    margin-top: -140px;
  }
`

export const StyledPortfolioDescription = styled.div`
  @media (max-width: 800px) {
    font-size: 11px;
    margin-bottom: -15px;
  }
`
