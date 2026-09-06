<script setup>
import HeroSection from './components/HeroSection.vue'
import IntroText from './components/IntroText.vue'
import IntroResume from './components/IntroResume.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="main">
    <HeroSection />

    <main class="container">
      <IntroText />
      <IntroResume />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <SiteFooter />
  </div>
</template>

<style>
.main {
  overflow-x: hidden;
}

.container {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
}
</style>
