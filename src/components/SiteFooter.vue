<template>
  <footer class="footer">
    <div class="footer__inner">
      <div>© {{ new Date().getFullYear() }} Thomas Fischer</div>
      <div>
        Fotos von
        <a href="https://www.evamariajanson.com/" target="_blank" rel="noreferrer">
          Eva Maria Janson
        </a>
        <span class="footer__legal">
          <a href="#">Impressum / Haftung</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0b1220;
  color: #fff;
  padding: 1.5rem 0;
}

.footer__inner {
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer a {
  color: #fbbf24;
}

.footer__legal {
  margin-left: 0.75rem;
}

@media (min-width: 768px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
