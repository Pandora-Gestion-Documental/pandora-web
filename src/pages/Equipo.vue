<template>
  <Layout>
    <section class="hero is-small is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-primary">Equipo</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered">
        <h2 class="title has-text-dark">
          Quiénes somos
        </h2>

        <div class="columns is-centered is-multiline">
          <div class="column is-half mb-6">
            <div class="content" v-html="$page.article.content"></div>
          </div>
        </div>

        <hr />

        <h2 class="title has-text-dark">
          Personas
        </h2>

        <div class="columns is-centered is-multiline py-5">
          <div
            class="column is-4 mb-6"
            v-for="(employee, index) in team"
            :key="index"
          >
            <div class="level">
              <div class="level-item my-5">
                <figure class="image is-128x128">
                  <g-image
                    :src="
                      require(`!!assets-loader!@images/empleados/${
                        employee.picture
                      }`)
                    "
                    alt=""
                    class="is-rounded"
                  />
                </figure>
              </div>
            </div>

            <h5 class="title is-5">{{ employee.name }}</h5>
            <p class="subtitle is-6">{{ employee.role }}</p>
          </div>
        </div>

        <hr />

        <h2 class="title has-text-dark">
          Partners
        </h2>

        <div class="columns is-multiline">
          <div
            class="column is-12 is-4-desktop"
            v-for="(partner, index) in partners"
            :key="index"
          >
            <div class="level">
              <div class="level-item my-5">
                <figure class="image is-128x128">
                  <g-image
                    :src="require(`!!assets-loader!@images/${partner.logo}`)"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <h5 class="title is-5">{{ partner.name }}</h5>
          </div>
        </div>
      </div>
    </section>
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

export default {
  metaInfo() {
    return {
      title: "Equipo",
    };
  },
  components: { ContactForm },
  data() {
    return {
      team: [
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
