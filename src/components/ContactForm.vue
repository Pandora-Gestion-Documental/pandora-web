<template>
  <section id="contact" class="section has-background-light">
    <div class="container py-4 is-max-desktop">
      <h2 class="title has-text-centered mb-6">
        Contacta con nosotros
      </h2>
      <p class="subtitle has-text-centered">
        ¡Estás a un paso de controlar tu información!
      </p>

      <form @submit.prevent="submitForm">
        <div class="columns">
          <div class="column is-6">
            <b-field label="Nombre*" for="name">
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
            <b-field label="Organización*" for="company">
              <b-input
                id="company"
                aria-label="Building"
                type="text"
                placeholder="Universidad de Cambridge"
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
            <b-field label="Teléfono*" for="phoneNumber">
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
        <b-field label="¿Cómo podemos ayudarte?*" for="message">
          <b-input
            id="message"
            aria-label="Message"
            type="textarea"
            placeholder="Cuéntanos tu proyecto de gestión documental y pídenos presupuesto."
            v-model="message"
            required
          >
          </b-input>
        </b-field>

        <div class="field">
          <b-field class="form-control">
            <b-checkbox :value="true" type="is-light" v-model="gdpr">
              He leído y acepto la
              <g-link class="has-text-link" to="/politica-privacidad">
                Política de Privacidad
              </g-link>
            </b-checkbox>
          </b-field>
        </div>

        <div class="field">
          <div class="control">
            <button id="submission" class="button is-dark " :disabled="!gdpr">
              Contacta
            </button>
          </div>
        </div>

        <p class="help has-text-primary-dark">
          * Campos obligatorios
        </p>
      </form>

      <p class="help">
        Utilizamos estos datos únicamente para responder tus consultas, lo que
        puede incluir la elaboración y la presentación de una propuesta
        comercial personalizada en el caso de consultas relativas a nuestros
        servicios. Por supuesto, no cederemos tus datos a terceros ni usaremos
        estos datos con cualquier otra finalidad. Puedes ejercer tus derechos de
        acceso, rectificación, oposición, supresión, limitación del tratamiento
        y portabilidad escribiéndonos a info@pandoragestiondocumental.es. Al
        contactar con nosotros, garantizas que eres mayor de 14 años y que la
        información facilitada es exacta y veraz. Si no estás de acuerdo, por
        favor no envíes este formulario.
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
