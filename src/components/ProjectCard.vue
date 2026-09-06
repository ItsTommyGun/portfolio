<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <article class="project" :class="{ 'project--reverse': reverse }" v-observe>
    <div class="project__media">
      <template v-if="project.video">
        <video
          :src="`/videos/projects/${project.video}`"
          playsinline
          autoplay
          loop
          muted
          class="project__video"
        ></video>
      </template>
      <template v-else>
        <img :src="`/images/projects/${project.image}`" :alt="project.title" />
      </template>
    </div>

    <div class="project__content">
      <span class="project__eyebrow">{{ project.type }}</span>
      <h3 class="project__title">{{ project.title }}</h3>
      <ul class="project__stack">
        <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
      </ul>

      <!-- <div v-if="project.customer && project.customer !== '-' && project.customer !== ''" class="project__meta">
        <strong>Kunde:</strong> {{ project.customer }}
      </div> -->

      <p class="project__description" v-html="project.content"></p>

    </div>
  </article>
</template>

<style scoped>
.project {
  display: grid;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1.25rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.04);
}

.project__media, .project__content {
  padding-inline: 1rem;
}

.project__media img {
  width: 100%;
  height: auto;
  border-radius: 0.9rem;
}

.project__eyebrow {
  display: inline-block;
  color: #4b5563;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
}

.project__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.6rem, 2vw, 2.4rem);
  color: #111827;
}

.project__meta {
  margin-bottom: 1rem;
  color: #374151;
}

.project__description {
  color: #374151;
}

.project__stack {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.5rem;
  padding: 0;
  margin: 0 0 1rem;
}

.project__stack li {
  background: #f3f4f6;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.8rem;
}

.project__video {
  width: 100%;
  height: auto;
  max-height: 420px;
  border-radius: 0.9rem;
  object-fit: cover;
}

@media (min-width: 960px) {
  .project {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project--reverse .project__media {
    order: 2;
  }

  .project--reverse .project__content {
    order: 1;
  }
}
</style>
