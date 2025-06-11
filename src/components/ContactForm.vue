<template>
  <section id="contact" class="section has-background-light">
    <div class="container py-4 is-max-desktop">
      <h2 class="title has-text-centered mb-6">
        {{ $t("components.contactForm.title") }}
      </h2>
      <p class="subtitle has-text-centered">
        {{ $t("components.contactForm.subtitle") }}
      </p>

      <form @submit.prevent="submitForm">
        <div class="columns">
          <div class="column is-6">
            <b-field :label="$t('components.contactForm.name')" for="name">
              <b-input
                id="name"
                aria-label="User"
                type="text"
                placeholder="Ada Lovelace"
                icon-pack="fas"
                icon="user"
                v-model="name"
                required
              />
            </b-field>
          </div>
          <div class="column is-6">
            <b-field
              :label="$t('components.contactForm.company')"
              for="company"
            >
              <b-input
                id="company"
                aria-label="Building"
                type="text"
                :placeholder="$t('components.contactForm.university')"
                icon-pack="fas"
                icon="building"
                v-model="company"
                required
              >
              </b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6-desktop">
            <b-field label="Email*" for="email">
              <b-input
                id="email"
                aria-label="Email"
                type="email"
                placeholder="ada@example.com"
                icon-pack="fas"
                icon="envelope"
                v-model="email"
                required
              >
              </b-input>
            </b-field>
          </div>
          <div class="column is-6-desktop">
            <b-field
              :label="$t('components.contactForm.number')"
              for="phoneNumber"
            >
              <b-input
                id="phoneNumber"
                aria-label="Mobile"
                type="text"
                placeholder="+34 600112233"
                icon-pack="fas"
                icon="mobile-alt"
                v-model="phoneNumber"
                required
              >
              </b-input>
            </b-field>
          </div>
        </div>
        <!-- Honeypot to avoid spam -->
        <b-field label="Teléfono*" class="is-honey" for="phoneNumber">
          <b-input
            id="mobileNumber"
            aria-label="Mobile"
            type="text"
            placeholder="+34 600112233"
            icon-pack="fas"
            icon="mobile-alt"
            v-model="mobile"
          >
          </b-input>
        </b-field>
        <b-field :label="$t('components.contactForm.help')" for="message">
          <b-input
            id="message"
            aria-label="Message"
            type="textarea"
            :placeholder="$t('components.contactForm.message')"
            v-model="message"
            required
          >
          </b-input>
        </b-field>

        <div class="field">
          <b-field class="form-control">
            <b-checkbox :value="true" type="is-light" v-model="gdpr">
              {{ $t("components.contactForm.consent") }}
              <g-link class="has-text-link" to="/politica-privacidad">{{
                $t("components.contactForm.privacy")
              }}</g-link>
            </b-checkbox>
          </b-field>
        </div>

        <div class="field">
          <div class="control">
            <button id="submission" class="button is-dark " :disabled="!gdpr">
              {{ $t("components.contactForm.contact") }}
            </button>
          </div>
        </div>

        <p class="help has-text-primary-dark">
          * {{ $t("components.contactForm.mandatory") }}
        </p>
      </form>

      <p class="help">
        {{ $t("components.contactForm.legalNotice") }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      company: "",
      email: "",
      phoneNumber: "",
      mobile: "",
      message: "",
      gdpr: false,
    };
  },
  methods: {
    submitForm() {
      if (this.mobile === "") {
        const subject = `Hola, soy ${this.name} de ${this.company}`;
        const body = `
  <html>
  <p><strong>Nombre</strong>: ${this.name}</p>
  <p><strong>Empresa</strong>: ${this.company}</p>
  <p><strong>Email</strong>: ${this.email}</p>
  <p><strong>Teléfono:</strong> ${this.phoneNumber}</p>
  <p><strong>Mensaje</strong>: ${this.message}<p>
  </html>`;

        Email.send({
          SecureToken: "02985081-a715-4fb2-bbe0-c7ba92bf904a",
          To: "info@pandoragestiondocumental.es",
          From: "info@pandoragestiondocumental.es",
          Subject: subject,
          Body: body,
        }).then((message) =>
          swal({
            title: "¡Gracias!",
            text: "Nos pondremos en contacto contigo lo antes posible.",
            icon: "success",
            button: "Genial",
          })
        );
        this.resetForm();
      }
    },
    resetForm() {
      this.name = "";
      this.company = "";
      this.email = "";
      this.phoneNumber = "";
      this.message = "";
      this.gdpr = false;
    },
  },
};
</script>

<style>
.swal-button {
  background-color: #0b486b;
}
.is-honey {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}
</style>
