<script setup>
import { ref, onMounted } from 'vue'

const fullTitle = 'Hey! Ich bin Thomas'
const fullSubtitle = 'Webentwickler aus Heidelberg'

const displayTitle = ref('')
const displaySubtitle = ref('')

function typeText(targetRef, fullText, speed = 30) {
  let i = 0
  const timer = setInterval(() => {
    targetRef.value = fullText.slice(0, i + 1)
    i++
    if (i >= fullText.length) {
      clearInterval(timer)
    }
  }, speed)
}

onMounted(() => {
  // start typing title then subtitle with faster speeds
  typeText(displayTitle, fullTitle, 30)
  setTimeout(() => {
    typeText(displaySubtitle, fullSubtitle, 20)
  }, fullTitle.length * 30 + 120)
})
</script>

<template>
  <header class="hero container">
    <div class="hero__content">
      <h1 class="hero__title text-gradient">
        <span class="type-text">{{ displayTitle }}</span>
      </h1>
      <p class="hero__subtitle">
        <span class="type-text">{{ displaySubtitle }}</span>
      </p>
    </div>
  </header>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.hero__content {
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  text-align: left;
}

.hero__title {
  font-size: clamp(3rem, 7vw, 7rem);
  line-height: 2;
  letter-spacing: -0.06em;
  font-weight: 800;
  overflow: hidden;
}

.hero__subtitle {
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 600;
  color: #111827;
  overflow: hidden;
}

.text-gradient {
  background: linear-gradient(
    to right,
    rgb(0, 20, 125) 0%,
    rgb(74, 116, 81) 28%,
    rgb(180, 140, 100) 55%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.type-text {
  white-space: nowrap;
  display: inline-block;
}

.caret {
  display: inline-block;
  margin-left: 0.25rem;
  color: rgb(0, 20, 125);
}

@media (max-width: 767px) {
  .hero {
    flex-direction: column;
  }
  .hero__content {
    text-align: center;
  }
  .hero__title, .hero__subtitle {
    text-align: center;
  }
}
</style>
