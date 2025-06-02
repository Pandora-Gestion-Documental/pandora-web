<template
  ><section class="section has-grey-background">
    <div class="container has-text-centered py-4">
      <h2 class="title mb-6">Más características</h2>
      <div class="columns">
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
.has-grey-background {
  background-color: #f5f5f5;
}
</style>
