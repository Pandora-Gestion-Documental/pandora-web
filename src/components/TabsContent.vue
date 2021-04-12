<template>
  <div class="columns is-centered">
    <div class="column">
      <div class="content is-medium" v-html="content.node.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Array,
  },
};
</script>
