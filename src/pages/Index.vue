<template>
  <Layout>
    <Carousel />
    <Card />
    <Featured />
    <!--
    <Customers />
    -->
    <Testimonials />

    <ContactForm />
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</page-query>

<script>
import Navbar from "~/components/Navbar.vue";
import Card from "~/components/Card.vue";
import Featured from "~/components/Featured.vue";
import Testimonials from "~/components/Testimonials.vue";
import ContactForm from "~/components/ContactForm.vue";
import Carousel from "~/components/Carousel.vue";

export default {
  metaInfo() {
    return {
      title: this.pageTitle,
      meta: [
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: this.pageTitle },
        { name: "twitter:image", content: this.socialImage },
        {
          name: "twitter:description",
          content: this.$page.metadata.siteDescription,
        },
        { property: "og:title", content: this.pageTitle },
        { property: "og:site_name", content: this.$page.metadata.siteName },
        { property: "og:type", content: "website" },
        { property: "og:image", content: this.socialImage },
        {
          property: "og:description",
          content: this.$page.metadata.siteDescription,
        },
      ],
    };
  },
  data() {
    return {
      socialImage:
        "https://pandoragestiondocumental.es" +
        require("~/assets/images/logo-alt.png"),
      pageTitle: "Pandora Gestión Documental",
    };
  },
  components: {
    Navbar,
    Card,
    Featured,
    Testimonials,
    ContactForm,
    Carousel,
  },
};
</script>
