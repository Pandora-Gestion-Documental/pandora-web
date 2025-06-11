<template>
  <section class="section">
    <div class="container content">
      <h2 class="title has-text-centered mb-6">{{ $t("ccctool.faqTitle") }}</h2>

      <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
        <h5 class="faq-question" @click="toggle(index)">
          <b-icon
            pack="fas"
            icon="chevron-right"
            custom-size="is-small"
            class="faq-chevron"
            :class="{ rotated: activeIndex === index }"
          />
          {{ faq.question }}
        </h5>

        <transition name="fade">
          <div v-show="activeIndex === index" class="faq-answer">
            <div v-html="faq.answer"></div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FaqAccordion",
  data() {
    return {
      activeIndex: null,
    };
  },
  computed: {
    faqs() {
      return this.$t("ccctool.faqs");
    },
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.faq-item {
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
}

.faq-question {
  cursor: pointer;
  font-weight: 600;
  color: #363636;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
}

.faq-question:hover {
  color: #afcb05; /* azul suave */
}

.faq-chevron {
  margin-right: 0.5rem;
  transition: transform 0.3s ease;
}

.faq-chevron.rotated {
  transform: rotate(90deg);
}

.faq-answer {
  margin-top: 0.5rem;
  color: #4a4a4a;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
