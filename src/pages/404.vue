<template>
  <main>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title is-1">
            404
          </p>
          <p class="subtitle is-2">
            Página no encontrada :(
          </p>
          <b-button
            tag="router-link"
            to="/"
            type="is-primary"
            size="is-medium"
            inverted
          >
            Volver a Inicio
          </b-button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Página no encontrada",
    };
  },
};
</script>
