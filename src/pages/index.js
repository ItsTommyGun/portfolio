import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import '../css/global.scss'
import TextContent from '../components/TextContent'
import List from '../components/List'
import Welcome from '../components/Welcome'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Section from '../components/Section'

import IntroText from '../components/IntroText/IntroText'
import IntroResume from '../components/IntroResume/IntroResume'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'

export default function Home() {

  return (
    <div className='main overflow-x-hidden'>
      <Helmet>
        <html lang="de" />
        <title>Portfolio Thomas Fischer - Webentwickler Stuttgart</title>
        <meta charSet="utf-8" />
        <meta name='description' content="Portfolio, website, web, developer, javascript, frontend, stuttgart, ludwigsburg, esslingen" />
        <link rel="canonical" href="https://www.tommycodes.de" />
      </Helmet>

      <Welcome delay='300' />
      <div className='container mx-auto px-10 xl:p-0'>
        
        <IntroText />
      
        <IntroResume />

        <Skills />

        <Projects />

        <Section>
          <TextContent headline='Zukunft'>
            So wichtig es auch sein mag, sich auf bestimmte Technologien zu fokussieren, so wichtig ist es auch spannende, neue Entwicklungen zu verfolgen. Hier ist eine Auswahl der Themen, die mich interessieren.
          </TextContent>
          <List items={['Snowpack', 'Vue3', 'Svelte', 'Firebase', 'GraphQL']} />
        </Section>
      </div>

      <Section last='true'>
        <Contact />
      </Section>

      <Footer />
    </div>
  )
}
