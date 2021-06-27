import React from "react"
import Section from "../Section"
import TextContent from "../TextContent"
import Project from "../Project"
import ProjectList from "./ProjectList"

export default function IntroText() {
  return (
    <Section>
      <TextContent headline="Projekte">
        Im Folgenden zeige ich eine Auswahl meiner aktuelleren Projekte. Diverse
        Projekte unterliegen einer Verschwiegenheitspflicht und können daher nur
        angeteasert werden.
      </TextContent>

      {ProjectList.map(project => {
        return (
          <Project
            title={project.title}
            types={project.types}
            stack={project.stack}
            customer={project.customer}
            image={project.image}
            video={project.video}
            textRight={project.textRight}
            link={project.link}
            content={project.content}
            key={project.title}
          />
        )
      })}
    </Section>
  )
}
