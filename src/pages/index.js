import React, { useEffect } from 'react'
import '../css/global.scss'
import TextContent from '../components/TextContent'
import List from '../components/List'
import Project from '../components/Project'
import Slogan from '../components/Slogan'
import Welcome from '../components/Welcome'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Section from '../components/Section'

export default function Home() {

  return (
    <div className='main overflow-x-hidden'>
      <Welcome delay='300' />
      <div className='container mx-auto px-10 xl:p-0'>
        
        <div className='lg:text-2xl text-lg mt-12 md:mt-16 mb-4 w-3/4 lg:w-full xl:my-20 xl:mt-32 lg:px-6 leading-loose text-blue-special'>
            Ich bin immer auf der Suche nach spannenden Projekten, interessanten Herausforderungen und interdisziplinären Teams, mit denen es Spaß macht Projekte zu verwirklichen.
        </div>
      
        <Section classes='flex flex-wrap'>
          <div className='lg:w-1/2 text-md py-6 lg:p-6 leading-8'>
            <p>
              Seit über 3 Jahren als Festangestellter in einer Agentur ist mir neben den Projekten auch das Zwischenmenschliche wichtig: ich leite und organisiere Sportgruppen, bin Teil einer sozial engagierten Truppe (Planung verschiedener Spendenaktionen) oder veranstalte regelmäßig (Video-)Spiel-Abende mit den Kollegen.<br /> <br />

              Abseits der Arbeit bin ich für ein Bier am Abend genauso wie für einen Brunch am Sonntag Morgen zu haben. Zudem reise ich gerne. Nach mehreren Zielen in Nordamerika, Lateinamerika und Europa wird hoffentlich auch bald Asien - in erster Linie Japan - dran sein. Konnichi wa!
            </p>
          </div>
          <Slogan text='Halb Mensch' animationStartFrom='right' delay='200' />
          <Slogan text='Halb Maschine' animationStartFrom='left' delay='200' />  
          <div className='lg:w-1/2 text-md py-6 lg:p-6 leading-8'>
            <p>
              Nach meiner Ausbildung zum <strong>Mediengestalter</strong> und dem <strong>Dualen Studium</strong> im Studiengang Onlinemedien an der DHBW Mosbach konnte ich bereits über <strong>3,5 Jahre Berufserfahrung</strong> sammeln und bin aktuell in Stuttgart als <strong>Frontend Developer</strong> tätig. Ich baue Webseiten oder entwickle deren Komponenten auf Basis von UX Konzepten, Photoshop- und Sketchvorlagen.<br /><br />
              Ich habe bereits an unterschiedlichen Projekten für unter anderem Bosch, TRUMPF, Porsche oder Weleda gearbeitet. Außerdem bin ich <strong>technischer Ansprechpartner</strong> innerhalb eines Projektes die Schnittstelle zwischen Projektmanager und Development.
            </p>
          </div>
        </Section>

        <Section>
          <TextContent headline='Fähigkeiten'>
            Durch spannende Projekte sowohl privat als auch beruflich konnte ich mir umfassendes Wissen in unterschiedlichen Bereichen des Web Developments aneignen. Diese reichen von den grundlegenden Technologien wie HTML, CSS und JavaScript bis hin zu modernen Frameworks und Libraries wie React, TypeScript oder GatsbyJS.
          </TextContent>
          <List items={['HTML / CSS', 'JavaScript', 'ReactJS', 'ElectronJS', 'SASS / SCSS', 'TypeScript', 'GatsbyJS', 'Jest', 'Build Tools', 'Photoshop / Sketch', 'Git', 'Jira / Confluence', 'MS Teams' ]} />
        </Section>

        <Section>
          <TextContent headline='Projekte'>
            Im Folgenden zeige ich eine Auswahl meiner aktuelleren Projekte. Diverse Projekte unterliegen einer Verschwiegenheitspflicht und können daher nur angeteasert werden.
          </TextContent>
          
            <Project title='Interaktive App für Messe Exponat' types={['Entwicklung']} stack={['React', 'Electron', 'HTML / SASS']} customer='Bosch' image='/images/projects/bosch-exhibit.png'>
              Diese App zeigt Messebesuchern Informationen zu diversen Antriebsarten der Zukunft. Die Besonderheit der App ist die Steuerung über Tokens: auf einem liegenden 55" Touchscreen werden sie als Steuerungsobjekte platziert. Ein Token wird dabei ausschließlich für die Menüsteuerung genutzt und sechs weitere Tokens dienen zur Navigation durch spezifische Inhalte.
            </Project>

            <Project title='Umbau der Messe App zur Desktop Anwendung' types={['Entwicklung', 'techn. Ansprechpartner']} stack={['React', 'Electron', 'HTML / SASS']} customer='Bosch' image='/images/projects/bosch-desktop.png' textRight={true}>
              Aufgrund der Corona Pandemie wurde beschlossen die bereits genannte App kurzfristig auch für Desktops anzupassen. Der Umbau sah in erster Linie die Umstellung der Tokensteuerung auf Klicksteuerung vor, wodurch die App auch Erweiterungen wie bspw. unterschiedliche Menüs bekommen hat.<br /> <br />Neben einem Teil der Entwicklung übernahm ich für dieses Projekt auch die Rolle des technischen Ansprechpartners, bei der ich sowohl die Projektablaufsplanung als auch die Kommunikation mit Projektmanager und Kunde durchführte.
            </Project>

            <Project title='Umsetzung einer pflegbaren Speisekarte' types={['Entwicklung']} stack={['PHP / MySQL', 'HTML / SASS']} customer='Restaurant Picknick' image='/images/projects/picknick.png' link='https://mypicknick.it/menu.php'>
              Als privates Projekt habe ich für einen Freund die Speisekarte seines Restaurants im Back- sowie Frontend umgesetzt. Da die Auswahl der Speisen sich täglich ändert können im Backend vordefinierte Gerichte de- oder aktiviert werden. Zusätzlich werden verschiedene Sprachen unterstützt.
            </Project>

            <Project title='Component Library mit Storybook' types={['Entwicklung']} stack={['StencilJS', 'Storybook', 'Jest']} customer='TRUMPF' image='/images/projects/trumpf-story.png' textRight={true}>
              Zurzeit arbeite ich mit Kollegen an einer neuen Component Library für unseren Kunden TRUMPF. Hier wird auf StencilJS gesetzt, um einerseits eine hohe Codequalität zu erreichen (u.a. durch Typescript, Jest) und andererseits eine zukunftssichere Codebasis dank Web Components zu erstellen.
            </Project>

            <Project title='Portfolio Website' types={['Planung', 'Entwicklung']} stack={['GatsbyJS', 'React', 'Styled Components', 'TailwindCSS']} customer='-' image='/images/projects/portfolio.png' github='https://github.com/ItsTommyGun/portfolio'>
              Die erste Version meiner Portfolio Seite. Gebaut auf Basis von GatsbyJS mit React, erweitert mit Styled Components und TailwindCSS. Deployment über Github und Netlify.
            </Project>

        </Section>

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
