import React from "react"
import Section from "../Section"
import TextContent from "../TextContent"
import List from "../List"

export default function IntroText() {
  return (
    <Section>
      <TextContent headline="Fähigkeiten">
        Durch spannende Projekte sowohl privat als auch beruflich konnte ich mir
        umfassendes Wissen in unterschiedlichen Bereichen des Web Developments
        aneignen. Zuletzt habe ich vor allem mit React, MongoDB, Node.js, Express.js und React Native gearbeitet.
      </TextContent>
      <List
        items={[
          "JavaScript",
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "TypeScript",
          "Electron",
          "HTML / CSS",
          "SASS / SCSS",
          "GatsbyJS",
          "Firebase/Firestore",
          "MySQL",
          "Mocha / Chai Testing",
          "Build Tools",
          "Photoshop / Sketch / Figma",
          "Git",
          "Jira / Confluence",
          "MS Teams / Slack",
        ]}
      />
    </Section>
  )
}
