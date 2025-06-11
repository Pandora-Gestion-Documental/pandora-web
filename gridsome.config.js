// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Pandora Gestión Documental",
  siteUrl: "https://pandoragestiondocumental.es",
  siteDescription:
    "Nosotros organizamos los documentos, nuestros clientes recuperan espacio, dinero e información. ",

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/data/services/*.md",
        typeName: "Service",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/data/*.md",
        typeName: "Article",
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-194465716-1",
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: ["es", "ca", "en", "fr"],
        fallbackLocale: "es",
        defaultLocale: "es",
        enablePathRewrite: true,
        rewriteDefaultLanguage: true,
      },
    },
  ],
  transformers: {
    remark: {
      autolinkHeadings: false,
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@images", "@/assets/images");
  },
};
