// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      url_api: process.env.URL_API,
    },
  },
  app: {
    head: {
      title: "Lancang Kuning",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          id: "googleFonts",
          href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light%7CPlayfair+Display:400&display=swap",
          rel: "stylesheet",
          type: "text/css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
          crossorigin: "anonymous",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
          integrity:
            "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
          crossorigin: "anonymous",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
          integrity:
            "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
          crossorigin: "anonymous",
        },
        // {
        //   src: "/_nuxt/assets/vendor/modernizr/modernizr.min.js",
        // },
        // {
        //   src: "/_nuxt/assets/vendor/plugins/js/plugins.min.js",
        // },
        // {
        //   src: "/_nuxt/assets/js/theme.js",
        // },
        // {
        //   src: "/_nuxt/assets/js/custom.js",
        // },
        // {
        //   src: "/_nuxt/assets/js/theme.init.js",
        // },
      ],
    },
  },
  css: [
    "~/assets/vendor/bootstrap/css/bootstrap.min.css",
    "~/assets/vendor/fontawesome-free/css/all.min.css",
    "~/assets/vendor/animate/animate.compat.css",
    "~/assets/vendor/simple-line-icons/css/simple-line-icons.min.css",
    "~/assets/vendor/owl.carousel/assets/owl.carousel.min.css",
    "~/assets/vendor/owl.carousel/assets/owl.theme.default.min.css",
    "~/assets/vendor/magnific-popup/magnific-popup.min.css",
    "~/assets/css/theme.css",
    "~/assets/css/theme-elements.css",
    "~/assets/css/theme-blog.css",
    "~/assets/css/theme-shop.css",
    "~/assets/css/custom.css",
    "~/assets/css/skins/default.css",
  ],
  plugins: ["~/plugins/disqus", "~/plugins/chartjs"],
});
