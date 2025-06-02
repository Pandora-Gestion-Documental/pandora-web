<template
  ><section class="section">
    <div class="container has-text-centered py-4">
      <h2 class="title mb-6">Una colaboración con OnlineTIC</h2>
      <div class="is-flex is-justify-content-center mb-6">
        <a
          href="https://onlinetic.com/ccctool/"
          target="_blank"
          class="image-hover"
          ><img :src="require('@/assets/images/onlinetic-logo.png')"
        /></a>
      </div>
      <p class="subtitle is-4">
        CCCtool ha sido desarrollado utilizando <strong>Hydra</strong>, la
        plataforma de automatización de flujos de trabajo de
        <strong>OnlineTIC</strong>.
      </p>
      <p class="subtitle is-4">
        Gracias a su potencia y flexibilidad, Hydra ha permitido construir una
        herramienta robusta y adaptable, capaz de ajustarse a los requisitos
        específicos de cada centro. Esto convierte a CCCtool en una solución
        modulable y personalizada, y no en un producto cerrado, facilitando una
        implantación ágil y alineada con la estructura organizativa de cada
        institución.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ScreenshotRight",
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        text: "",
        imageSrc: "",
        imageAlt: "",
      }),
    },
  },
};
</script>

<style scoped>
.image-hover img {
  max-height: 200px;
  height: auto;
  width: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
}

.image-hover:hover img {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.has-grey-background {
  background-color: #f5f5f5;
}
</style>
