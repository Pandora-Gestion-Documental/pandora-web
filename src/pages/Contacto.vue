<template>
  <Layout>
    <section class="hero is-small is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-primary">Contacto</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered">
        <h2 class="title mb-6 has-text-dark">
          Dónde estamos
        </h2>
        <div class="columns is-centered">
          <div class="column is-12 is-7-desktop">
            <div class="media">
              <iframe
                width="600"
                height="450"
                style="border:0"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCxOw9lHR_S0ZdvFOawpKvgxoQSomZ0Tns
    &q=Calle Arévalo, 1, Ávila"
              >
              </iframe>
            </div>
          </div>
          <div class="column is-12 is-5-desktop">
            <div class="media">
              <div class="media-left">
                <b-icon pack="fas" icon="map-marker-alt" size="fa-lg"> </b-icon>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>Calle Arévalo, 1, Local 24, 05001 Ávila</p>
                </div>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <b-icon pack="fas" icon="envelope" size="fa-lg"> </b-icon>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>info@pandoragestiondocumental.es</p>
                </div>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <b-icon pack="fas" icon="mobile-alt" size="fa-lg"> </b-icon>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>+34 639 37 29 58</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactForm />
  </Layout>
</template>

<script>
import ContactForm from "~/components/ContactForm.vue";

export default {
  metaInfo() {
    return {
      title: "Contacto",
    };
  },
  components: { ContactForm },
};
</script>
