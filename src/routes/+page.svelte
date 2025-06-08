<script>
  const instagramUrl = "https://www.instagram.com/sculptstudio.ch/";
</script>

<main class="main-content">
  <img src="/ss_comingsoon.png" alt="Landingpage" class="comingsoon-img" />
</main>


<footer class="insta-footer">
  <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
<img src="/instalogobutton.png" alt="Instagram" class="insta-button" />
  </a>
</footer>

<style>
.main-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 7.5vh; /* Positionierung im oberen Drittel */
}

.comingsoon-img {
  width: 90vw;       /* 1.5x größer als vorher (30vw → 45vw) */
  max-width: 1200px;  /* optionaler Maximalwert */
  height: auto;
}

.insta-footer {
  position: fixed;
  bottom: 2cm; /* Abstand von ca. 2 cm zum unteren Rand */
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.insta-button {
  width: 266px; /* vorher 400px → jetzt 1/3 so groß */
  height: auto;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.3s;
}

.insta-button:hover {
  opacity: 1;
}
</style>
