<template>
  <footer class="footer has-background-white">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="columns is-desktop">
          <div class="column is-5">
            <h2 class="title is-5">Pandora Gestión Documental</h2>
            <p class="block">
              Nuestro equipo organiza los documentos, tu organización recupera
              espacio, dinero e información.
            </p>
            <div class="buttons">
              <a
                class="button"
                href="https://twitter.com/Pandoragestdoc"
                aria-label="Ve a nuestro Twitter"
                target="_blank"
              >
                <b-icon pack="fab" icon="twitter"></b-icon>
              </a>
              <a
                class="button"
                href="https://es.linkedin.com/company/pandora-gesti-n-documental-s-l-"
                aria-label="Ve a nuestro LinkedIn"
                target="_blank"
              >
                <b-icon pack="fab" icon="linkedin"></b-icon>
              </a>
              <a
                class="button"
                href="https://www.facebook.com/Pandora-Gesti%C3%B3n-Documental-SL-359119350780398/"
                aria-label="Ve a nuestro Facebook"
                target="_blank"
              >
                <b-icon pack="fab" icon="facebook"
                  ><a
                    class="button"
                    href="https://www.facebook.com/Pandora-Gesti%C3%B3n-Documental-SL-359119350780398/"
                    aria-label="Ve a nuestro Facebook"
                    target="_blank"
                  ></a
                ></b-icon>
              </a>
            </div>
          </div>

          <div class="column is-4">
            <h3 class="title is-6">Mapa del sitio</h3>
            <ul>
              <li>
                <g-link class="has-text-link" to="/">Inicio</g-link>
              </li>
              <li>
                <g-link class="has-text-link" to="/servicios/"
                  >Servicios</g-link
                >
              </li>
              <li>
                <g-link class="has-text-link" to="/ccctool/">CCCtool</g-link>
              </li>
              <li>
                <g-link class="has-text-link" to="/clientes/">Clientes</g-link>
              </li>
              <li>
                <g-link class="has-text-link" to="/equipo/">Equipo</g-link>
              </li>
              <li>
                <g-link class="has-text-link" to="/contacto/">Contacto</g-link>
              </li>
            </ul>
          </div>

          <div class="column is-3">
            <h3 class="title is-6">Miembros de</h3>
            <div class="columns is-vcentered">
              <div class="column">
                <a
                  href="https://acal.es"
                  aria-label="Ve al sitio web de ACAL"
                  target="_blank"
                >
                  <img
                    src="../assets/images/acal.png"
                    alt="Logo de la Asociación de Archiveros de Castilla y León"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <!-- <a href="#">Aviso legal</a>
            | -->
          <g-link class="has-text-link" to="/politica-privacidad"
            >Política de Privacidad</g-link
          >
        </div>
        <div class="column has-text-right-tablet">
          <p class="subtitle is-6">
            &copy; 2012-2021 Pandora Gestión Documental, SL
          </p>
        </div>
      </div>

      <hr />
      <div class="columns">
        <div class="column">
          <p class="has-text-centered">
            Creado con
            <b-icon pack="fas" icon="coffee" />
            utilizando
            <a class="has-text-link" href="https://gridsome.org/">Gridsome</a>
            y
            <a class="has-text-link" href="https://buefy.org/">Buefy</a>.
          </p>
          <p class="has-text-centered">
            Código liberado bajo
            <a class="has-text-link" href="https://mit-license.org/"
              >Licencia MIT</a
            >.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
