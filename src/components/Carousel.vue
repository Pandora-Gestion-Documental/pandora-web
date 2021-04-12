<template>
  <section class="hero is-large">
    <b-carousel
      :arrow="arrow"
      :repeat="arrowBoth"
      :arrow-hover="arrowHover"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
      :autoplay="autoPlay"
      :progress="progress"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <div :class="`hero-body has-text-centered has-bg-${carousel.image}`">
          <h1 class="title has-text-primary">
            {{ carousel.title }}
          </h1>
        </div>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrow: true,
      arrowBoth: true,
      arrowHover: true,
      iconPack: "fa",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "",
      autoPlay: true,
      progress: true,
      carousels: [
        {
          title: "La transformación digital de tu empresa",
          image: "consultoria",
        },
        {
          title: "Gestión integral de archivos y bibliotecas",
          image: "archivos",
        },
        { title: "Confianza, experiencia, trayectoria", image: "confianza" },
      ],
    };
  },
};
</script>

<style scoped>
.has-bg-consultoria {
  background-image: url("../assets/images/movil.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
}

.has-bg-archivos {
  background-image: url("../assets/images/biblioteca-alt.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
}

.has-bg-confianza {
  background-image: url("../assets/images/equipo.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
}

.hero-body h1 {
  display: inline-block;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 0.2em 1em 0.2em 1em;
}
</style>
