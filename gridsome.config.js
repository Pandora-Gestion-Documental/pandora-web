// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
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
        path: "src/data/equipo.md",
        typeName: "Equipo",
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
