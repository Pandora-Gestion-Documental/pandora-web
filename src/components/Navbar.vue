<template>
  <section>
    <b-navbar
      type="is-dark"
      wrapper-class="container"
      class="has-background-black"
      centered
    >
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/images/logo.png" style="max-height: 3rem;" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" to="/">
          {{ $t("components.navbar.home") }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/servicios/">
          {{ $t("components.navbar.services") }}
        </b-navbar-item>
        <b-navbar-dropdown
          collapsible
          has-link="true"
          :label="$t('components.navbar.products')"
        >
          <b-navbar-item tag="router-link" to="/ccctool/">
            CCCtool
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown
          collapsible
          has-link="true"
          :label="$t('components.navbar.about')"
        >
          <b-navbar-item tag="router-link" to="/clientes/">
            {{ $t("components.navbar.customers") }}
          </b-navbar-item>
          <b-navbar-item tag="router-link" to="/equipo/">
            {{ $t("components.navbar.team") }}
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="router-link" to="/contacto/">
          {{ $t("components.navbar.contact") }}
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <b-dropdown aria-role="list" v-model="currentLocale">
            <button
              class="button is-black"
              slot="trigger"
              slot-scope="{ active }"
            >
              <b-icon
                pack="fas"
                icon="globe-europe"
                size="is-medium"
                type="is-white"
              ></b-icon>
              <span class="has-text-white ml-1">{{
                localeLabels[currentLocale]
              }}</span>
            </button>
            <b-dropdown-item
              @click="setLocale(locale)"
              aria-role="listitem"
              v-for="locale in availableLocales"
              :key="locale"
              :value="locale"
            >
              {{ localeLabels[locale] }}
            </b-dropdown-item>
          </b-dropdown>
        </b-navbar-item>

        <b-navbar-item tag="div">
          <div class="block">
            <a
              class="has-text-white"
              href="https://twitter.com/Pandoragestdoc"
              aria-label="Ve a nuestro Twitter"
              target="_blank"
            >
              <b-icon pack="fab" icon="twitter" size="is-large"> </b-icon
            ></a>
            <a
              class="has-text-white"
              href="https://es.linkedin.com/company/pandora-gesti-n-documental-s-l-"
              aria-label="Ve a nuestro LinkedIn"
              target="_blank"
            >
              <b-icon pack="fab" icon="linkedin" size="is-large"> </b-icon
            ></a>
            <a
              class="has-text-white"
              href="https://www.facebook.com/Pandora-Gesti%C3%B3n-Documental-SL-359119350780398/"
              aria-label="Ve a nuestro Facebook"
              target="_blank"
            >
              <b-icon pack="fab" icon="facebook" size="is-large"> </b-icon
            ></a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
      localeLabels: {
        es: "Castellano",
        ca: "Català",
        en: "English",
        fr: "Français",
      },
    };
  },
  methods: {
    setLocale(locale) {
      this.currentLocale = locale;
      this.$router.push({
        path: this.$tp(this.$route.path, locale, true),
      });
    },
  },
};
</script>
