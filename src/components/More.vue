<template
  ><section class="section has-grey-background">
    <div class="container has-text-centered py-4">
      <h2 class="title mb-6">{{ $t("ccctool.more.title") }}</h2>
      <div class="columns">
        <div class="column" v-for="(feature, index) in features" :key="index">
          <div class="level">
            <div class="level-item">
              <figure class="image is-128x128">
                <g-image
                  :src="require(`!!assets-loader!@images/${feature.icon}`)"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <h5 class="title is-5">{{ $t(`${feature.name}`) }}</h5>
          <p class="block">
            {{ $t(`${feature.description}`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "sintesis-de-voz.png",
          description: "ccctool.more.ai.description",
          name: "ccctool.more.ai.name",
        },
        {
          icon: "libro.png",
          description: "ccctool.more.knowledgeBase.description",
          name: "ccctool.more.knowledgeBase.name",
        },
        {
          icon: "servicio-al-cliente.png",
          description: "ccctool.more.support.description",
          name: "ccctool.more.support.name",
        },
      ],
    };
  },
};
</script>

<style scoped>
.has-grey-background {
  background-color: #f5f5f5;
}
</style>
