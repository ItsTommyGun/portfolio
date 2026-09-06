<script setup>
const skills = [
  'Teamleitung',
  'Agile Methoden',
  'Personalführung',
  'TypeScript',
  'Vue 3',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Electron',
  'HTML / CSS',
  'SASS / SCSS',
  'JavaScript',
  'Vite',
  'Firebase / Firestore',
  'MySQL',
  'Testing',
  'Build Tools',
  'Figma',
  'Git',
  'Jira / Confluence',
  'MS Teams / Slack',
]
</script>

<template>
  <section class="section" v-observe>
        <p class="eyebrow">Fähigkeiten</p>
        <h2>Entwicklung mit Fokus auf saubere, nutzerfreundliche Lösungen.</h2>
    <div class="">
      <div class=" grid grid--two">
        <div>
        <p>
          Durch spannende Projekte sowohl privat als auch beruflich habe ich mich in
          verschiedenen Bereichen der Webentwicklung weiterentwickelt. In den letzten
          Jahren lag mein Schwerpunkt vor allem auf Vue, TypeScript, Node.js und
          modernen Frontend-Architekturen.
        </p>
        </div>
        <div>
        
        <ul class="skill-list card">
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-top: 4rem;
  margin-bottom: 5rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid--two {
  grid-template-columns: 1fr;
}

.card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.04);
}

.eyebrow {
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.6rem;
  padding: 1rem;
  margin: 0;
}

.skill-list li {
  border-radius: 999px;
  background: #eef2ff;
  padding: 0.45rem 0.8rem;
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  .grid--two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
