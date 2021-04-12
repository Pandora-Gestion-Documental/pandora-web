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

<script>
import Navbar from "~/components/Navbar.vue";
import Card from "~/components/Card.vue";
import Featured from "~/components/Featured.vue";
import Testimonials from "~/components/Testimonials.vue";
import ContactForm from "~/components/ContactForm.vue";
import Carousel from "~/components/Carousel.vue";

export default {
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
