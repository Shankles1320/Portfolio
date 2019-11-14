import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Carousel/Carousel"
import ProjectCardWrapper from "../components/ProjectCard/ProjectCard"
import {
  PortfolioWrapper,
  StyledPortfolioImage,
  StyledPortfolioContent,
  StyledPortfolioTitle,
  StyledPortfolioDescription,
} from "../components/portfolioStyles"

// NoDB project
let nodb1 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.47.13+PM.png"
// Personal Project
let persproj1 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.48.59+PM.png"
let persproj2 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.49.22+PM.png"
let persproj3 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.49.38+PM.png"
let persproj4 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.49.52+PM.png"
let persproj5 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.50.10+PM.png"
// Group Project
let groupProj1 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.51.43+PM.png"
let groupProj2 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.52.00+PM.png"
let groupProj3 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.52.07+PM.png"
let groupProj4 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.52.51+PM.png"
let groupProj5 =
  "https://port-pics.s3.us-east-2.amazonaws.com/Screen+Shot+2019-11-05+at+2.53.00+PM.png"
const nodb = [nodb1]
const persProjPic = [persproj1, persproj2, persproj3, persproj4, persproj5]
const groupProjPic = [
  groupProj1,
  groupProj2,
  groupProj3,
  groupProj4,
  groupProj5,
]

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioWrapper>
      <ProjectCardWrapper>
        <StyledPortfolioImage src={nodb} alt="" />
        <StyledPortfolioContent>
          <StyledPortfolioTitle>NoDB</StyledPortfolioTitle>
          <StyledPortfolioDescription>
            This was my first project in school. This was where I was able to
            really start exploring with everything we had been taught in the
            first 3 weeks.
          </StyledPortfolioDescription>
          <Carousel images={nodb} />
        </StyledPortfolioContent>
      </ProjectCardWrapper>
      <ProjectCardWrapper>
        <StyledPortfolioImage src={persproj1} alt="" />
        <StyledPortfolioContent>
          <StyledPortfolioTitle>Personal Project</StyledPortfolioTitle>
          <StyledPortfolioDescription>
            My Personal Project that I worked on was focused around a website to
            help animal shelters get more attention. I was able to work with
            multiple APIs such as google and Stripe as well as deepening my
            understanding of React, node and redux.
          </StyledPortfolioDescription>
          <Carousel images={persProjPic} />
        </StyledPortfolioContent>
      </ProjectCardWrapper>
      <ProjectCardWrapper>
        <StyledPortfolioImage src={groupProj1} alt="" />
        <StyledPortfolioContent>
          <StyledPortfolioTitle>Group Project</StyledPortfolioTitle>
          <StyledPortfolioDescription>
            For The GroupProject my team and I put effort into creating a job
            posting website geared towards web development. It allows for 2
            different loggins from an employer or an applicant and tracks what
            jobs an employer has posted and what jobs have been applied to.
          </StyledPortfolioDescription>
          <Carousel images={groupProjPic} />
        </StyledPortfolioContent>
      </ProjectCardWrapper>
    </PortfolioWrapper>
  </Layout>
)

export default SecondPage
