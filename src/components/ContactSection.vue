<script setup>
import ContactIcons from './ContactIcons.vue'
</script>

<template>
  <section class="section section--last" v-observe>
    <div class="contact">
      <div>
        <h2 class="contact__title text-gradient">Lust auf 'nen Kaffee?</h2>
        <p class="contact__text">Ich freue mich auf ein nettes Gespräch!</p>
        <ContactIcons />
      </div>

      <div class="">
        <div class="image-wrap">
          <picture>
            <source srcset="/images/THOMI-BW-19.jpg" media="(min-width: 1280px)" />
            <img src="/images/THOMI-BW-19-m.jpg" alt="Kontakt aufnehmen - Thomas Fischer - Webentwickler aus Heidelberg" class="contact-image" loading="lazy" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.section {
  margin-top: 4rem;
  margin-bottom: 0;
}

.contact {
  display: grid;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 0;
}

.contact__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.08;
  margin-bottom: 0.8rem;
}

.contact__text {
  font-size: clamp(1.4rem, 2vw, 2rem);
  color: #111827;
}

.card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.04);
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.25rem;
}

.contact__links a {
  color: #1d4ed8;
  text-decoration: none;
}

.image-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image {
  height: auto;
  border-radius: 0.5rem;
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

@media (min-width: 768px) {
  .contact {
    grid-template-columns: 1fr 1.2fr;
  }
}
</style>
