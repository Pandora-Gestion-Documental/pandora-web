<template>
  <section class="section">
    <div class="container content">
      <h2 class="title has-text-centered mb-6">Preguntas frecuentes</h2>

      <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
        <h5 class="faq-question" @click="toggle(index)">
          <b-icon
            pack="fas"
            icon="chevron-right"
            custom-size="is-small"
            class="faq-chevron"
            :class="{ rotated: activeIndex === index }"
          />
          {{ faq.question }}
        </h5>

        <transition name="fade">
          <div v-show="activeIndex === index" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FaqAccordion",
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: "¿Cuáles son los plazos de puesta en marcha?",
          answer:
            "CCCtool ya está desarrollado y listo para implantarse en un plazo máximo de 2 semanas, incluyendo la instalación, configuración inicial, carga de grupos y usuarios y formación del centro. Este plazo puede variar en caso de contratar nuevas funcionalidades.",
        },
        {
          question:
            "¿Se puede instalar en los servidores del hospital o instituto oncológico?",
          answer:
            "Sí, la aplicación se ofrece tanto en la modalidad Cloud como On-Premise, por lo que el hospital o instituto oncológico decide en qué infraestructura funcionará la aplicación.",
        },
        {
          question: "¿Quién ha desarrollado CCCtool?",
          answer:
            "CCCtool ha sido desarrollado de manera independiente por las empresas OnlineTIC y Pandora Gestión Documental para cubrir una necesidad de hospitales e institutos oncológicos. Aunque está basado en el Manual de usuario para la acreditación y designación de la OECI, no se trata de una herramienta oficial y su uso es completamente opcional.",
        },
        {
          question: "¿CCCtool sustituye otros sistemas de la OECI?",
          answer:
            "CCCtool no sustituye la aplicación de la OECI, sino que facilita la obtención, revisión y preparación de los datos a introducir posteriormente en dicho sistema, así como el seguimiento del proceso por parte de la persona responsable de la acreditación. Además, la solución también es aplicable a otros proceso de acreditación del hospital o instituto oncológico.",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.faq-item {
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
}

.faq-question {
  cursor: pointer;
  font-weight: 600;
  color: #363636;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
}

.faq-question:hover {
  color: #afcb05; /* azul suave */
}

.faq-chevron {
  margin-right: 0.5rem;
  transition: transform 0.3s ease;
}

.faq-chevron.rotated {
  transform: rotate(90deg);
}

.faq-answer {
  margin-top: 0.5rem;
  color: #4a4a4a;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
