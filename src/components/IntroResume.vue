<template>
  <section class="resume-section">
    <div class="resume-column" v-observe>
      <p>
        Ich bin erfahren in der <strong>agilen Entwicklung</strong> von Projekten aller Art und bin überzeugt,
        dass Projekte nur mit einem <strong>starken Team</strong> und Teamzusammenhalt ordentlich umgesetzt werden können. Ich entwickle Software und Webseiten, erstelle Komponenten auf Basis von UX-Konzepten,
        liebe es mit Figma saubere Vorlagen zu bauen und gemeinsam Lösungen zu erarbeiten.
      </p>
    </div>

    <div class="resume-column" v-observe>
      <p>

         Bisher war ich an der Umsetzung spannender Projekte beteiligt für Kunden wie die Daimler AG, Bosch, TRUMPF, Porsche und weitere Kunden.
      </p>
      <p> Aktuell bin ich einem mittelständischen Unternehmen tätig, welches sich auf die Entwicklung seiner eigenen Digital Adoption Solution konzentriert.</br>
        Zuletzt lag mein Fokus auf der Teamleitung im Development Bereich. Technisch habe ich aktuell vor allem mit Vue.js, TypeScript und Figma zu tun.
      </p>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  display: grid;
  gap: 2rem;
  margin: 2rem 0 4rem;
}

.resume-column {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: 1.05rem;
  line-height: 1.9;
  color: #374151;
}

.resume-column p {
  margin: 0;
}

.slogan-block {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5rem;
  opacity: 0;
  transform: translateY(12px);
  animation: fadeUp 0.6s cubic-bezier(.2,.9,.3,1) forwards;
  will-change: opacity, transform;
  backface-visibility: hidden;
  align-self: center;
}

.slogan-block--left {
  animation-delay: 80ms;
}

.slogan-block--right {
  animation-delay: 160ms;
}

.slogan-block span {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  text-align: center;
  color: rgb(0, 20, 125);
  font-weight: 700;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 960px) {
  .resume-section {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }

  .slogan-block {
    min-height: 10rem;
    align-self: center;
  }
}
</style>
