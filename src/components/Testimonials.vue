<template
  ><section class="section">
    <div class="container has-text-centered py-4">
      <h2 class="title mb-6">Hablan nuestros clientes</h2>
      <div class="columns mb-6">
        <div class="column" v-for="(customer, index) in customers" :key="index">
          <div class="level">
            <div class="level-item">
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
          <p class="block">
            {{ customer.testimonial }}
          </p>
          <h5 class="title is-5">{{ customer.name }}</h5>
          <p class="subtitle">{{ customer.role }}</p>
        </div>
      </div>
      <div class="buttons is-flex is-justify-content-center">
        <g-link class="button is-dark is-outlined" to="/clientes/"
          >Todos los clientes</g-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          logo: "archivos-comunidad-madrid.jpg",
          testimonial:
            "Es una empresa que conoce de primera mano los procesos archivísticos y por tanto plantea soluciones adecuadas a  las necesidades que les planteas. Hace una muy buena selección de personal. Destacaría su profesionalidad y eficacia.",
          name: "Beatriz García Gómez",
          role: "Directora del Archivo Histórico de Protocolos de Madrid",
        },
        {
          logo: "diputacion-valladolid.png",
          testimonial:
            "Pandora trabaja con nosotros desde 2015. Su asimilación de nuestro sistema de descripción y de organización de los expedientes fue rápida. También lo fue su integración en las rutinas establecidas. Su trabajo resulta muy eficiente.",
          name: "Carlos Alcalde Martín-Calero",
          role:
            "Jefe de Servicio del Archivo de la Diputación Provincial de Valladolid",
        },
      ],
    };
  },
};
</script>
