<template>
  <div class="contact__links">
    <a href="mailto:hello@tommycodes.de" aria-label="E-mail" title="E-mail">
      <img src="/icons/mail.svg" alt="mail" class="icon" />
    </a>
    <a href="https://github.com/ItsTommyGun" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
      <img src="/icons/github.svg" alt="github" class="icon" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
      <img src="/icons/linkedin.svg" alt="linkedin" class="icon" />
    </a>
    <a href="https://stackoverflow.com" target="_blank" rel="noreferrer" aria-label="Stack Overflow" title="Stack Overflow">
      <img src="/icons/stack-overflow.svg" alt="stack-overflow" class="icon" />
    </a>
  </div>
</template>

<style scoped>
.contact__links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.contact__links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: #0b1220;
}

.contact__links a .icon {
  width: 20px;
  height: 20px;
  filter: invert(1);
}
</style>
