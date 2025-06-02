<template>
  <Layout>
    <Hero />
    <FeaturedText :texts="texts1" />
    <ScreenshotRight :content="formulario" />
    <ScreenshotLeft :content="flujo" />
    <ScreenshotRight :content="seguimiento" />
    <ScreenshotLeft :content="cumplimiento" />
    <ScreenshotRight :content="responsive" />
    <FeaturedText :texts="texts2" />
    <Partnership />
    <More />
    <FaqAccordion />
    <ContactForm />
  </Layout>
</template>

<page-query>
query Article {
  article(id: 1) {
    content
  }
}
</page-query>

<script>
import ContactForm from "~/components/ContactForm.vue";
import FeaturedText from "~/components/FeaturedText.vue";
import Hero from "~/components/Hero.vue";
import ScreenshotRight from "~/components/ScreenshotRight.vue";
import ScreenshotLeft from "~/components/ScreenshotLeft.vue";
import More from "~/components/More.vue";
import Partnership from "../components/Partnership.vue";
import FaqAccordion from "../components/FaqAccordion.vue";

export default {
  metaInfo() {
    return {
      title: "CCCtool",
    };
  },
  components: {
    ContactForm,
    FeaturedText,
    Hero,
    ScreenshotRight,
    ScreenshotLeft,
    More,
    Partnership,
    FaqAccordion,
  },
  data() {
    return {
      texts1: [
        "Hemos creado una herramienta tecnológica para facilitar y automatizar el proceso de acreditación OECI (Organisation of European Cancer Institutes) en <strong>hospitales e institutos oncológicos</strong>. Intuitiva, segura y adaptable, nuestra solución reduce la carga operativa y mejora la coordinación entre equipos.",
      ],
      texts2: [
        "Disponible en <strong>modalidad Cloud u On-premise</strong>, nuestro servicio se adapta a las necesidades de la organización con total flexibilidad. Es posible agregar a la herramienta funcionalidades a medida como soporte multilingüe, cumplimiento de normativas internas e integración con otros sistemas.",
        "Además, es una solución <strong>escalable</strong>, ideal para cualquier proceso de acreditación que requiera una gestión eficiente de datos y flujos de trabajo automatizados, optimizando la colaboración entre equipos.",
      ],
      formulario: {
        title:
          "Formularios íntegramente adaptados al manual de acreditación de la OECI",
        text:
          "Gestiona los estándares cualitativos y sus preguntas CORE, los cuestionarios cuantitativos y la solicitud de documentos.",
        imageSrc: require("@/assets/images/formularios-oeci.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      flujo: {
        title: "Flujos de trabajo configurables",
        text:
          "Facilita la comunicación y el intercambio de datos entre las áreas.",
        imageSrc: require("@/assets/images/proceso.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      seguimiento: {
        title: "Seguimiento en tiempo real",
        text:
          "Seguimiento visual del avance de la acreditación a través de paneles de Power BI.",
        imageSrc: require("@/assets/images/power-bi.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      cumplimiento: {
        title: "Puntuación de cumplimiento",
        text:
          "Compara el cumplimiento de tu hospital o instituto oncológico con la media de centros acreditados.",
        imageSrc: require("@/assets/images/cumplimiento.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      responsive: {
        title: "Diseño amigable, intuitivo y adaptativo",
        text:
          "Las personas pueden acceder a los cuestionarios desde sus correos y cumplimentarlos en cualquier dispositivo.",
        imageSrc: require("@/assets/images/responsive.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      inteligenciaArtificial: {
        title: "Experiencia mejorada con IA",
        text:
          "Integración opcional de inteligencia artificial para transcripción automática o conversión de voz a texto, entre otras mejoras.",
        imageSrc: require("@/assets/images/inteligencia-artificial.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      team: [
        {
          name: "Diego Rodríguez",
          role: "Co-fundador",
          picture: "diego-rodriguez.jpg",
        },
        {
          name: "Alba Jiménez",
          role: "Responsable de Administración y Soporte",
          picture: "alba-jimenez.jpeg",
        },
        {
          name: "Guillermo Castellano",
          role: "Responsable de Tecnología y Consultoría",
          picture: "guillermo-castellano.jpg",
        },
        {
          name: "Eva Guerrero",
          role: "Coordinadora de Proyectos Archivísticos",
          picture: "eva-guerrero.jpeg",
        },
        {
          name: "Pablo Berrón",
          role: "Responsable de Digitalización y grabación de datos",
          picture: "pablo-berron.jpeg",
        },
        {
          name: "Elizabeth Oliva",
          role: "Consultora de Gestión Documental",
          picture: "elizabeth-oliva.jpeg",
        },
      ],
      partners: [
        {
          logo: "acal.png",
          name: "Asociación de Archiveros de Castilla y León",
        },
        { logo: "usal.png", name: "Universidad de Salamanca" },
        { logo: "openkm.jpg", name: "OpenKM" },
      ],
    };
  },
};
</script>
