<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li v-for="(tab, i) in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab, i)" :id="i">{{
            tab.name
          }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  updated() {
    document.getElementById(this.$store.state.serviceId).click();
  },
  methods: {
    selectTab(selectedTab, i) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
      this.$store.state.serviceId = i.toString();
    },
  },
};
</script>
