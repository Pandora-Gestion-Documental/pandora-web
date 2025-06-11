<template>
  <section class="hero has-grey-background">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-8 has-text-centered">
            <img :src="content.imageSrc" :alt="content.imageAlt" class="box" />
          </div>
          <div class="column is-4">
            <h1 class="subtitle is-spaced">
              {{ $t(`${content.title}`) }}
            </h1>
            <p>
              {{ $t(`${content.text}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ScreenshotLeft",
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
.has-grey-background {
  background-color: #f5f5f5;
}
</style>
