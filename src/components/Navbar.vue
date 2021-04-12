<template>
  <section>
    <b-navbar
      type="is-dark"
      wrapper-class="container"
      class="has-background-black"
      centered
    >
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/images/logo.png" style="max-height: 3rem;" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" to="/">
          Inicio
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/servicios/">
          Servicios
        </b-navbar-item>
        <b-navbar-dropdown collapsible has-link="true" label="Nosotros">
          <b-navbar-item tag="router-link" to="/clientes/">
            Clientes
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/equipo/">
            Equipo
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="router-link" to="/contacto/">
          Contacto
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="block">
            <a
              class="has-text-white"
              href="https://twitter.com/Pandoragestdoc"
              aria-label="Ve a nuestro Twitter"
              target="_blank"
            >
              <b-icon pack="fab" icon="twitter" size="is-large"> </b-icon
            ></a>
            <a
              class="has-text-white"
              href="https://es.linkedin.com/company/pandora-gesti-n-documental-s-l-"
              aria-label="Ve a nuestro LinkedIn"
              target="_blank"
            >
              <b-icon pack="fab" icon="linkedin" size="is-large"> </b-icon
            ></a>
            <a
              class="has-text-white"
              href="https://www.facebook.com/Pandora-Gesti%C3%B3n-Documental-SL-359119350780398/"
              aria-label="Ve a nuestro Facebook"
              target="_blank"
            >
              <b-icon pack="fab" icon="facebook" size="is-large"> </b-icon
            ></a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </section>
</template>
