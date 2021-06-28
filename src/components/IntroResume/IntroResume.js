import React from "react"

import Section from '../Section'
import Slogan from '../Slogan'

export default function IntroResume() {
  return (
    <Section classes='flex flex-wrap'>
      <div className='lg:w-1/2 text-md py-6 leading-8'>
        <p>Ich bin erfahren in der <strong>agilen Entwicklung</strong> von Projekten aller Art und bin überzeugt, dass Projekte nur mit einem <strong>starken Team</strong> und Teamzusammenhalt ordentlich umgesetzt werden können.<br/><br/></p>

        <p>
          Persönlich treffe ich mich immer gern auf ein Bierchen zum Quatschen, zum Kicken oder Videogames spielen. Am Wochenende verbringe ich am liebsten Zeit mit Freunden oder lehne mich etwas zurück.<br /><br />
          Daneben ist Reisen sicher eines der wichtigeren Hobbies. Nach mehreren Zielen in Nordamerika, Lateinamerika und Europa wird hoffentlich auch bald Asien &mdash; in erster Linie Japan &mdash; dran sein. Konnichi wa!
        </p>
      </div>
      <Slogan text='Halb Mensch' animationStartFrom='right' delay='200' />
      <Slogan text='Halb Maschine' animationStartFrom='left' delay='200' />  
      <div className='lg:w-1/2 text-md py-6 leading-8'>
        <p>
          Nach meiner Ausbildung zum <strong>Mediengestalter</strong> und dem <strong>Dualen Studium</strong> im Studiengang Onlinemedien an der DHBW Mosbach konnte ich bereits über <strong>4 Jahre Berufserfahrung</strong> sammeln. Zuletzt war ich in Stuttgart als <strong>Softwareentwickler</strong> tätig. Ich entwickle Software und Webseiten, erstelle Komponenten auf Basis von UX Konzepten, Photoshop- und Sketchvorlagen.<br /><br />
          Bisher war ich an der Umsetzung spannender Projekte für die Daimler AG, Bosch, TRUMPF, Porsche und weiterer Kunden beteiligt. Dabei konnte ich neben meiner Rolle als (Web-)Entwickler auch erste Erfahrungen als <strong>technischer Ansprechpartner</strong> sammeln.
        </p>

        <p>Zuletzt lag mein Fokus auf TypeScript, MongoDB und NodeJS, aber ich interessiere mich immer für neue Technologien und freue mich diese zu lernen und anzuwenden.<br/><br/></p>
      </div>
    </Section>
  )
}
