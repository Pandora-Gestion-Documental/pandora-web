<template>
  <Layout>
    <section class="hero is-small is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-primary">Equipo</h1>
        </div>
      </div>
    </section>
    <section class="section has-background-light">
      <div class="container has-text-centered ">
        <h2 class="title has-text-dark">
          {{ $page.article.title }}
        </h2>
        <div class="columns is-centered is-multiline">
          <div class="column is-half mb-6">
            <div class="content" v-html="$page.article.content"></div>
          </div>
        </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Article {
  article(id: 2) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Política de privacidad",
    };
  },
};
</script>
