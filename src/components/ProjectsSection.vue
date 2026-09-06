<script setup>
import ProjectCard from './ProjectCard.vue'
import ProjectList from './Projects/ProjectList.js'

const projects = ProjectList
</script>

<template>
  <section class="section">
    <div class="section-header" v-observe>
      <p class="eyebrow">Projekte</p>
      <h2>Ausgewählte Arbeiten</h2>
    </div>

    <div class="projects">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :reverse="index % 2 !== 0"
      />
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-top: 4rem;
  margin-bottom: 5rem;
}

.section-header {
  margin-bottom: 1.5rem;
}

.eyebrow {
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.projects {
  display: grid;
  gap: 2rem;
}
</style>
