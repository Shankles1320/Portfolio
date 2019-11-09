import React from "react"
import { Link } from "gatsby"
import {
  AboutMeWrapper,
  StyledDescriptionWrapper,
  StyledContactWrapper,
  StyledContactItems,
  StyledParagraph,
  StyledContactLogo,
  ContactWrapper,
} from "./aboutMeStlyes"

let EmailIcon = "https://image.flaticon.com/icons/svg/54/54215.svg"
let LinkedinIcon =
  "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-512.png"
let GithubIcon =
  "https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png"

export default class AboutMe extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <AboutMeWrapper>
        <StyledContactWrapper>
          <h2>Contact</h2>
          <StyledContactItems>
            <ContactWrapper href="https://github.com/Shankles1320">
              <StyledContactLogo src={GithubIcon} />
              Github
            </ContactWrapper>
            <ContactWrapper href="https://www.linkedin.com/in/trey-shank/">
              <StyledContactLogo src={LinkedinIcon} />
              Linkedin
            </ContactWrapper>
            <ContactWrapper
              href="mailto:trey.shank25@gmail.com?Subject=Hi%20Trey!"
              target="_top"
            >
              <StyledContactLogo src={EmailIcon} />
              Email
            </ContactWrapper>
          </StyledContactItems>
        </StyledContactWrapper>
        <StyledDescriptionWrapper>
          <h2>About Me</h2>
          <StyledParagraph style={{ marginTop: "-10px" }}>
            Recently, I enrolled in a Full Stack Web Development course at
            DevMountain. While there, I spent time with a small virtual team
            working to build web applications. This involved learning back-end
            technologies like NodeJs, Express, and PostgreSQL, and front-end
            tech which included ReactJs, JavaScript, and Redux. I am currently
            seeking a role in web development.
          </StyledParagraph>

          <StyledParagraph>
            Web development has been an amazing journey so far but we all need
            out down time. I am born and raised in Arizona and love my home
            state. In my free time I enjoy playing video games with my wife and
            spending time with her and my 3 pets. I have 2 dogs named Bruce and
            Lana as well as our cat Raven, and all of them are rescues.
          </StyledParagraph>
          <Link
            style={{
              color: "blue",
              textAlign: "center",
              marginTop: "6px",
              textDecoration: "none",
            }}
            to="/portfolio"
          >
            <span
              style={{
                backgroundColor: "#f4f6f9",
                padding: "6px",
                border: "1px solid lightgrey",
                borderRadius: "3px",
                fontWeight: "bold",
              }}
            >
              Click here to check out my portfolio!
            </span>
          </Link>
        </StyledDescriptionWrapper>
      </AboutMeWrapper>
    )
  }
}
