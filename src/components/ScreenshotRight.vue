<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4">
            <h1 class="subtitle is-spaced">
              {{ content.title }}
            </h1>
            <p>
              {{ content.text }}
            </p>
          </div>
          <div class="column is-8 has-text-centered">
            <img :src="content.imageSrc" :alt="content.imageAlt" class="box" />
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
