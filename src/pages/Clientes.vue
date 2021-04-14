<template>
  <Layout>
    <section class="hero is-small is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-primary">Clientes</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered">
        <h2 class="title mb-6 has-text-dark">
          Nuestros clientes
        </h2>
        <div class="columns is-multiline">
          <div
            class="column is-12 is-4-desktop"
            v-for="(customer, index) in customers"
            :key="index"
          >
            <div class="level">
              <div class="level-item my-5">
                <figure class="image is-128x128">
                  <g-image
                    :src="
                      require(`!!assets-loader!@images/logos-clientes/${
                        customer.logo
                      }`)
                    "
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <h5 class="title is-5">{{ customer.name }}</h5>
          </div>
        </div>
      </div>
    </section>
    <ContactForm />
  </Layout>
</template>

<page-query>
query Services {
  services: allService(sortBy: "title", order: ASC) {
    edges {
      node {
        title
        content
      }
    }
  }
}
</page-query>

<style scoped>
.image {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import ContactForm from "~/components/ContactForm.vue";

export default {
  metaInfo() {
    return {
      title: "Clientes",
    };
  },
  components: {
    ContactForm,
  },
  data() {
    return {
      customers: [
        { logo: "urbaser.png", name: "Urbaser" },
        { logo: "caf.jpg", name: "CAF Turnkey & Engineering" },
        { logo: "bbva.jpg", name: "BBVA" },
        { logo: "ministerio-defensa.png", name: "Ministerio de Defensa" },
        {
          logo: "ministerio-defensa-ejercito-aire.png",
          name: "Ejército del Aire",
        },
        { logo: "ministerio-fomento.png", name: "Ministerio de Fomento" },
        {
          logo: "ministerio-hacienda-catastro.png",
          name: "Ministerio de Hacienda",
        },
        { logo: "ministerio-sanidad.png", name: "Ministerio de Sanidad" },
        { logo: "ministerio-sanidad-imserso.jpg", name: "IMSERSO" },
        {
          logo: "archivo-militar-pirenaico.png",
          name: "Archivo Militar Pirenaico",
        },
        {
          logo: "archivos-comunidad-madrid.jpg",
          name: "Archivos de la Comunidad de Madrid",
        },
        {
          logo: "comunidad-madrid-transportes.jpg",
          name: "Consejería de Transportes de la Comunidad de Madrid",
        },
        {
          logo: "comunidad-madrid-consejeria-cultura.png",
          name: "Consejería de Cultura de la Comunidad de Madrid",
        },
        {
          logo: "comunidad-madrid-consejeria-educacion.jpg",
          name: "Consejería de Educación de la Comunidad de Madrid",
        },
        {
          logo: "comunidad-madrid-consejeria-justicia.jpg",
          name: "Consejería de Justicia de la Comunidad de Madrid",
        },
        {
          logo: "archivo-nacional-cataluna.jpg",
          name: "Archivos Nacional de Cataluña",
        },
        {
          logo: "generalitat-cataluna-cultura.jpg",
          name: "Departamento de Cultura de la Generalitat de Cataluña",
        },
        {
          logo: "generalitat-valenciana-educacion.jpg",
          name: "Consejería de Educación de la Generalitat Valenciana",
        },
        {
          logo: "xunta-galicia-presidencia.png",
          name: "Presidencia de la Xunta de Galicia",
        },
        {
          logo: "xunta-galicia.jpg",
          name: "Xunta de Galicia",
        },
        {
          logo: "navarra.jpg",
          name: "Gobierno de Navarra",
        },
        {
          logo: "diputacion-zaragoza.png",
          name: "Diputación de Zaragoza",
        },
        {
          logo: "diputacion-avila.png",
          name: "Diputación de Ávila",
        },
        {
          logo: "diputacion-valladolid.png",
          name: "Diputación de Valladolid",
        },
        {
          logo: "ajuntament-castellbisbal.jpg",
          name: "Ayuntamiento de Castellbisbal",
        },
        {
          logo: "ayuntamiento-a-coruna.png",
          name: "Ayuntamiento de La Coruña",
        },
        {
          logo: "ayuntamiento-hospitalet.png",
          name: "Ayuntamiento de L'Hospitalet",
        },
        {
          logo: "ayuntamiento-arroyo-encomienda.jpg",
          name: "Ayuntamiento de Arroyo de la Encomienda",
        },
        {
          logo: "ayuntamiento-fuente-alamo.png",
          name: "Ayuntamiento de Fuente Álamo",
        },
        {
          logo: "ayuntamiento-higueruela.png",
          name: "Ayuntamiento de Higueruela",
        },
        {
          logo: "ayuntamiento-hoya-gonzalo.png",
          name: "Ayuntamiento de Hoya-Gonzalo",
        },
        {
          logo: "ayuntamiento-montealegre-castillo.png",
          name: "Ayuntamiento de Montealegre del Castillo",
        },
        {
          logo: "ayuntamiento-pozo-lorente.png",
          name: "Ayuntamiento de Pozo Lorente",
        },
        {
          logo: "ayuntamiento-zaragoza.jpg",
          name: "Ayuntamiento de Zaragoza",
        },
        {
          logo: "concello-ferrol.jpg",
          name: "Concello de Ferrol",
        },
        {
          logo: "concello-neda.jpg",
          name: "Concello de Neda",
        },
        {
          logo: "greenpeace-espana.png",
          name: "Greenpeace España",
        },
        {
          logo: "patrimonio-nacional.jpg",
          name: "Patrimonio Nacional",
        },
        {
          logo: "icac.jpg",
          name: "Instituto de Contabilidad y Auditoría de Cuentas",
        },
      ],
    };
  },
};
</script>
