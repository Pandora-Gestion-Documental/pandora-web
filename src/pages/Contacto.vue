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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.614479148375!2d-3.691257948139417!3d40.46166897925864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42291a4ab44c6d%3A0xa858244075d9c42b!2sCink%20Coworking!5e0!3m2!1ses!2ses!4v1678207676108!5m2!1ses!2ses"
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
                  <p>Paseo de la Castellana, 194, 28046 Madrid</p>
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
                  <p>+34 613 79 57 69</p>
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
