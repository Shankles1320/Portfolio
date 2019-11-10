import React from "react"
import AboutMe from "../components/About-me/About-me"
import Hero from "../components/Hero/Hero"

import Layout from "../components/layout"
// import Achievements from "../components/Achievements/Achievements"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Trey Shank"
      keywords={[
        `Trey`,
        `Shank`,
        `engineer`,
        `reactjs`,
        `developer`,
        `software engineer`,
        `software developer`,
        `front end developer`,
      ]}
    />
    <Hero />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Achievements /> */}
      <AboutMe />
    </div>
  </Layout>
)

export default IndexPage
