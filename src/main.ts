import "../src/assets/css/index.css";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header>
    <nav>
      <img class="logo" src="./src/assets/img/custom-logo.svg" alt="DevConnect Logo">
    </nav>
  </header>
  <main>
    <section class="hero">
      <h1 class="hero__titre">Bienvenue sur <span class="devconnect"> DevConnect </span> </h1>
      <h2 class="hero__soustitre">Le portail de portfolios des développeurs</h2>
      <p class="hero__description">Explorez notre vivier de talents et découvrez des professionnels fiables
        en</br>explorant leur portfolio.</p>
      <a class="hero__button" href="./src/pages/developpeurs.html">Explorer</a>
    </section>

    <div class="all__domains">
       <div class="tous-droits">
        <p>© 2026. Tous droits réservés</p>
      </div>
      <div class="speciality">
        <p class="domain">Front-end</p>
        <p class="domain">Back-end</p>
        <p class="domain">Full-stack</p>
      </div>
    </div>

  </main>


  `