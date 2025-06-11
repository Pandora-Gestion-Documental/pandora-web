<template
  ><section class="section">
    <div class="container has-text-centered py-4">
      <h2 class="title mb-6">{{ $t("ccctool.partnership.title") }}</h2>
      <div class="is-flex is-justify-content-center mb-6">
        <a
          href="https://onlinetic.com/ccctool/"
          target="_blank"
          class="image-hover"
          ><img :src="require('@/assets/images/onlinetic-logo.png')"
        /></a>
      </div>
      <p
        class="subtitle is-4"
        v-html="$t('ccctool.partnership.firstParagraph')"
      ></p>
      <p
        class="subtitle is-4"
        v-html="$t('ccctool.partnership.secondParagraph')"
      ></p>
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
  max-height: 200px;
  height: auto;
  width: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
}

.image-hover:hover img {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.has-grey-background {
  background-color: #f5f5f5;
}
</style>
