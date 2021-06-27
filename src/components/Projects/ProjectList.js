export const ProjectList = [
  {
    title: "Card wall web app",
    types: ["Entwicklung", '"Design"'],
    stack: ["React", "TypeScript", "Firestore"],
    customer: "-",
    image: "card-wall.png",
    textRight: true,
    content: `Zum Abschied für 2 Kollegen gebaut können Benutzer kleine verschiebbare
      Karten mit einer persönlichen Nachricht anlegen. Die Positionierung der
      Karten wird in Firestore gespeichert und für alle aktiven Nutzer
      geupdated. Das Projekt wird in Kürze auch in sauberer Fassung als open
      source Projekt bereitstehen.`,
  },
  {
    title: "Interaktive App für Messe Exponat",
    types: ["Entwicklung"],
    stack: ["React", "Electron", "HTML / SASS"],
    customer: "Bosch",
    image: "bosch-exhibit.png",
    content: `Diese App zeigt Messebesuchern Informationen zu diversen Antriebsarten
      der Zukunft. Die Besonderheit der App ist die Steuerung über Tokens: auf
      einem liegenden 55" Touchscreen werden sie als Steuerungsobjekte
      platziert. Ein Token wird dabei ausschließlich für die Menüsteuerung
      genutzt und sechs weitere Tokens dienen zur Navigation durch spezifische
      Inhalte.`,
  },
  {
    title: "Umbau der Messe App zur Desktop Anwendung",
    types: ["Entwicklung", "techn. Ansprechpartner"],
    stack: ["React", "Electron", "HTML / SASS"],
    customer: "Bosch",
    video: "bosch-desktop.mp4",
    textRight: true,
    content: `
      Aufgrund der Corona Pandemie wurde beschlossen die Interaktive App
      kurzfristig auch für Desktops anzupassen. Der Umbau sah in erster Linie
      die Umstellung der Tokensteuerung auf Klicksteuerung vor, wodurch die
      App auch Erweiterungen wie bspw. unterschiedliche Menüs bekommen hat.
      <br /> <br />
      Neben einem Teil der Entwicklung übernahm ich für dieses Projekt auch
      die Rolle des technischen Ansprechpartners, bei der ich sowohl die
      Projektablaufsplanung als auch die Kommunikation mit Projektmanager und
      Kunde durchführte.`,
  },
  {
    title: "Umsetzung einer pflegbaren Speisekarte",
    types: ["Entwicklung"],
    stack: ["PHP / MySQL", "HTML / SASS"],
    customer: "Restaurant Picknick",
    image: "picknick.png",
    link: "https://mypicknick.it/menu.php",
    content: `Zum Abschied für 2 Kollegen gebaut können Benutzer kleine verschiebbare
      Karten mit einer persönlichen Nachricht anlegen. Die Positionierung der
      Karten wird in Firestore gespeichert und für alle aktiven Nutzer
      geupdated. Das Projekt wird in Kürze auch in sauberer Fassung als open
      source Projekt bereitstehen.`,
  },
  {
    title: "Component Library mit Storybook",
    types: ["Entwicklung"],
    stack: ["StencilJS", "Storybook", "Jest"],
    customer: "TRUMPF",
    image: "trumpf-story.png",
    textRight: true,
    content: `Mit einem kleinen Team arbeitete ich an einer neuen Component Library
      für TRUMPF. Durch den Einsatz von StencilJS wurde der Einsatz von Web Components 
      erlaubt, durch verschiedene Tools wie TypeScript und Jest konnte hohe Codequalität garantiert werden.`,
  },
  {
    title: "Portfolio Website",
    types: ["Planung", "Entwicklung"],
    stack: ["GatsbyJS", "React", "Styled Components", "TailwindCSS"],
    customer: "-",
    image: "portfolio.png",
    github: "https://github.com/ItsTommyGun/portfolio",
    content: `Die erste Version meiner Portfolio Seite. Gebaut auf Basis von GatsbyJS
      mit React, erweitert mit Styled Components und TailwindCSS. Deployment
      über Github und Netlify.`,
  },
]

export default ProjectList;