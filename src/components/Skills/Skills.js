import React from "react"
import Section from '../Section'
import TextContent from '../TextContent'
import List from '../List'

export default function IntroText() {
  return (
    <Section>
      <TextContent headline='Fähigkeiten'>
        Durch spannende Projekte sowohl privat als auch beruflich konnte ich mir umfassendes Wissen in unterschiedlichen Bereichen des Web Developments aneignen. Diese reichen von den grundlegenden Technologien wie HTML, CSS und JavaScript bis hin zu modernen Frameworks und Libraries wie React, TypeScript oder GatsbyJS.
      </TextContent>
      <List items={['HTML / CSS', 'JavaScript', 'ReactJS', 'ElectronJS', 'SASS / SCSS', 'TypeScript', 'GatsbyJS', 'Firebase/Firestore', 'MySQL', 'MongoDB', 'Mocha / Chai Testing', 'Build Tools', 'Photoshop / Sketch', 'Git', 'Jira / Confluence', 'MS Teams' ]} />
    </Section>
  )
}
