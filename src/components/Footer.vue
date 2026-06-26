<template>
  <footer class="footer has-background-white">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="columns is-desktop">
          <div class="column is-5">
            <h2 class="title is-5">Pandora Gestión Documental</h2>
            <p class="block">
              {{ $t("components.footer.description") }}
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
            <h3 class="title is-6">{{ $t("components.footer.map") }}</h3>
            <ul>
              <li>
                <g-link class="has-text-link" to="/">{{
                  $t("components.navbar.home")
                }}</g-link>
              </li>
              <li>
                <g-link class="has-text-link" to="/servicios/">{{
                  $t("components.navbar.services")
                }}</g-link>
              </li>
              <li>
                <g-link class="has-text-link" to="/clientes/">{{
                  $t("components.navbar.customers")
                }}</g-link>
              </li>
              <li>
                <g-link class="has-text-link" to="/equipo/">{{
                  $t("components.navbar.team")
                }}</g-link>
              </li>
              <li>
                <g-link class="has-text-link" to="/contacto/">{{
                  $t("components.navbar.contact")
                }}</g-link>
              </li>
            </ul>
          </div>

          <div class="column is-3">
            <h3 class="title is-6">{{ $t("components.footer.membership") }}</h3>
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
          <ul>
            <li>
              <g-link class="has-text-link" to="/politica-privacidad">{{
                $t("components.footer.privacy")
              }}</g-link>
            </li>
            <li>
              <g-link class="has-text-link" to="/politica-calidad">{{
                $t("components.footer.quality")
              }}</g-link>
            </li>
          </ul>
        </div>
        <div class="column has-text-right-tablet">
          <p class="subtitle is-6">
            &copy; 2012-2025 Pandora Gestión Documental, SL
          </p>
        </div>
      </div>

      <hr />
      <div class="columns">
        <div class="column">
          <p class="has-text-centered">
            {{ $t("components.footer.made") }}
            <b-icon pack="fas" icon="coffee" />
            {{ $t("components.footer.use") }}
            <a class="has-text-link" href="https://gridsome.org/">Gridsome</a>
            {{ $t("components.footer.and") }}
            <a class="has-text-link" href="https://buefy.org/">Buefy</a>.
          </p>
          <p class="has-text-centered">
            {{ $t("components.footer.code") }}
            <a class="has-text-link" href="https://mit-license.org/">{{
              $t("components.footer.mit")
            }}</a
            >.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
