<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <hr />
        <div class="columns is-vcentered mt-6 mb-6">
          <div class="column has-text-centered">
            <h1 class="title is-spaced mb-6">
              {{ content.title }}
            </h1>
            <div class="is-flex is-justify-content-center mb-6">
              <a
                href="https://onlinetic.com/ccctool/"
                target="_blank"
                class="image-hover"
                ><img :src="content.imageSrc" :alt="content.imageAlt"
              /></a>
            </div>
            <p class="subtitle is-4" v-html="content.text"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ScreenshotRight",
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        text: "",
        imageSrc: "",
        imageAlt: "",
      }),
    },
  },
};
</script>

<style scoped>
.image-hover img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-hover:hover img {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
</style>
