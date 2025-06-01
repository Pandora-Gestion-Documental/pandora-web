<template>
  <section class="hero is-medium has-background-primary py-4">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h1
              v-for="(item, index) in texts"
              :key="index"
              class="subtitle is-spaced is-3"
              v-html="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedText",
  props: {
    texts: {
      type: Array,
      required: true,
    },
  },
};
</script>
