import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import "../css/global.scss"
import Addendum from "../components/Future/Future"
import Welcome from "../components/WelcomeArea/Welcome"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import Section from "../components/Section"

import IntroText from "../components/IntroText/IntroText"
import IntroResume from "../components/IntroResume/IntroResume"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"

export default function Home() {
  const HeadValues = () => {
    return (
      <Helmet>
        <html lang="de" />
        <title>Portfolio Thomas Fischer - Webentwickler Heidelberg</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Frontend Entwicklung mit React, Styled Components und mehr in Heidelberg. Interesse an einer Zusammenarbeit?"
        />
        <meta
          name="keywords"
          content="frontend, heidelberg, mannheim, web, developer, entwickler, javascript"
        />
        <link rel="canonical" href="https://www.tommycodes.de" />
      </Helmet>
    )
  }
  return (
    <div className="main overflow-x-hidden">
      <HeadValues />

      <Welcome delay="300" />
      <div className="container mx-auto px-10 xl:p-0">
        <IntroText />
        <IntroResume />
        <Skills />
        <Projects />
        <Addendum />
      </div>

      <Section last="true">
        <Contact />
      </Section>

      <Footer />
    </div>
  )
}
