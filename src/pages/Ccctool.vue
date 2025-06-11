<template>
  <Layout>
    <Hero />
    <FeaturedText :texts="mainFeatured" />
    <ScreenshotRight :content="formulario" />
    <ScreenshotLeft :content="flujo" />
    <ScreenshotRight :content="seguimiento" />
    <ScreenshotLeft :content="cumplimiento" />
    <ScreenshotRight :content="responsive" />
    <FeaturedText :texts="secondaryFeatured" />
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
      mainFeatured: ["ccctool.mainFeatured"],
      secondaryFeatured: [
        "ccctool.secondaryFeatured.text1",
        "ccctool.secondaryFeatured.text2",
      ],
      formulario: {
        title: "ccctool.form.title",
        text: "ccctool.form.text",
        imageSrc: require("@/assets/images/formularios-oeci.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      flujo: {
        title: "ccctool.workflow.title",
        text: "ccctool.workflow.text",
        imageSrc: require("@/assets/images/proceso.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      seguimiento: {
        title: "ccctool.followUp.title",
        text: "ccctool.followUp.text",
        imageSrc: require("@/assets/images/power-bi.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      cumplimiento: {
        title: "ccctool.compliance.title",
        text: "ccctool.compliance.text",
        imageSrc: require("@/assets/images/cumplimiento.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
      responsive: {
        title: "ccctool.responsive.title",
        text: "ccctool.responsive.text",
        imageSrc: require("@/assets/images/responsive.png"),
        imageAlt: "Gestor documental para la acreditación OECI",
      },
    };
  },
};
</script>
