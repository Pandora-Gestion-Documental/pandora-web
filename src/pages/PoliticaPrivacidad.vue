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
            <div class="content" v-html="$page.equipo.content"></div>
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
      </div>
    </section>
    <ContactForm />
  </Layout>
</template>

<page-query>
query Article {
  article(id: 2) {
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Equipo",
    };
  },
};
</script>
