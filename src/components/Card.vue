<template>
  <section class="section has-background-light">
    <div class="container has-text-centered">
      <h2 class="title mb-6 has-text-dark">
        Conoce Pandora Gestión Documental
      </h2>
      <div class="columns is-multiline">
        <div
          class="column is-12 is-4-desktop"
          v-for="(service, index) in services"
          :key="index"
        >
          <a href="/servicios/" @click="switchService(index)">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <g-image
                    :src="require(`!!assets-loader!@images/${service.path}`)"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content has-background-primary">
                <div class="media">
                  <div class="media-left">
                    <b-icon
                      pack="fas"
                      :icon="service.icon"
                      size="is-medium"
                      custom-size="3x"
                      type="is-dark"
                    ></b-icon>
                  </div>
                  <div class="media-content">
                    <p class="title is-5 has-text-dark">
                      {{ service.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          path: "consultoria.jpg",
          icon: "project-diagram",
          text: "Consultoría de gestión documental",
          tab: "0",
        },
        {
          path: "archivos.jpg",
          icon: "archive",
          text: "Organización de archivos",
          tab: "1",
        },
        {
          path: "digitalizacion-alt.jpg",
          icon: "print",
          text: "Digitalización",
          tab: "2",
        },
        {
          path: "biblioteca-edificio.jpg",
          icon: "book",
          text: "Bibliotecas",
          tab: "3",
        },
        {
          path: "otros.jpg",
          icon: "laptop",
          text: "Software de gestión documental",
          tab: "4",
        },
        {
          path: "software-gestion-documental.jpg",
          icon: "comment-dots",
          text: "Otros servicios",
          tab: "5",
        },
      ],
    };
  },
  methods: {
    switchService(x) {
      this.$store.state.serviceId = x.toString();
    },
  },
};
</script>

<style>
.card img {
  opacity: 0.8;
}

.card:hover {
  transform: scale(1.025);
}

.card:hover img {
  opacity: 1;
}
</style>
