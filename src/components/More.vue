<template
  ><section class="section mb-3 mt-3">
    <div class="container has-text-centered py-4">
      <h2 class="title mb-6">Más características</h2>
      <div class="columns mb-6">
        <div class="column" v-for="(feature, index) in features" :key="index">
          <div class="level">
            <div class="level-item">
              <figure class="image is-128x128">
                <g-image
                  :src="require(`!!assets-loader!@images/${feature.icon}`)"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <h5 class="title is-5">{{ feature.name }}</h5>
          <p class="block">
            {{ feature.description }}
          </p>
        </div>
      </div>
      <hr />
      <div class="columns is-vcentered mt-6">
        <div class="column has-text-centered">
          <h1 class="title is-spaced mb-6">
            Una colaboración con OnlineTIC
          </h1>
          <div class="is-flex is-justify-content-center mb-6">
            <a
              href="https://onlinetic.com/ccctool/"
              target="_blank"
              class="image-hover"
              ><img :src="require('@/assets/images/onlinetic-logo.jpeg')"
            /></a>
          </div>
          <p class="subtitle is-4">
            CCCtool ha sido desarrollado utilizando <strong>Hydra</strong>, la
            plataforma de automatización de flujos de trabajo de
            <strong>OnlineTIC</strong>. Gracias a su potencia y flexibilidad,
            Hydra ha permitido construir una herramienta robusta y adaptable,
            capaz de ajustarse a los requisitos específicos de cada centro. Esto
            convierte a CCCtool en una solución modulable y personalizada, y no
            en un producto cerrado, facilitando una implantación ágil y alineada
            con la estructura organizativa de cada institución.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "sintesis-de-voz.png",
          description:
            "Integración opcional de inteligencia artificial para transcripción automática, conversión de voz a texto y resumen de documentos.",
          name: "Experiencia mejorada con IA",
        },
        {
          icon: "libro.png",
          description:
            "Repositorio con materiales de apoyo y ayudas para cumplimentar los cuestionarios.",
          name: "Base de conocimiento",
        },
        {
          icon: "servicio-al-cliente.png",
          description:
            "Nuestro equipo de consultoría y tecnología te acompaña durante todo el proyecto.",
          name: "Soporte",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image-hover img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-hover:hover img {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
</style>
