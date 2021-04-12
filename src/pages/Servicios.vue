<template>
  <Layout>
    <section class="hero is-small is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-primary">Servicios</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <tabs>
          <tab :name="title(services[0])" :selected="true">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="content" v-html="services[0].content"></div>
              </div>
            </div>
          </tab>
          <tab :name="title(services[1])">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="content" v-html="services[1].content"></div>
              </div>
            </div>
          </tab>
          <tab :name="title(services[2])">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="content" v-html="services[2].content"></div>
              </div>
            </div>
          </tab>
          <tab :name="title(services[3])">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="content" v-html="services[3].content"></div>
              </div>
            </div>
          </tab>
          <tab :name="title(services[4])">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="content" v-html="services[4].content"></div>
              </div>
            </div>
          </tab>
          <tab :name="title(services[5])">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="content" v-html="services[5].content"></div>
              </div>
            </div>
          </tab>
        </tabs>
      </div>
    </section>
    <section class="hero has-background-primary py-4">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="subtitle is-spaced is-2">
                La optimización de recursos es una norma. Desde esa base,
                tenemos en cuenta tus necesidades específicas para aportarte
                soluciones documentales de calidad.
              </h1>
            </div>
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

<script>
import Tabs from "~/components/Tabs.vue";
import ContactForm from "~/components/ContactForm.vue";
import Tab from "~/components/Tab.vue";

export default {
  components: {
    Tabs,
    Tab,
    ContactForm,
  },
  methods: {
    title(service) {
      return service.title.split("-")[1];
    },
  },
  computed: {
    services() {
      let arr = [];
      this.$page.services.edges.forEach((element) => arr.push(element.node));

      return arr;
    },
    selectedTab() {
      return this.$store.state.serviceId;
    },
  },
};
</script>
