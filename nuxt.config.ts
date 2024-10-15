// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr:true,
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
   
   app: {
    head: {
      title: "Minab",
      meta: [
        {
          name: "viewport",
          content: " width=device-width, initial-scale=1",
        },
        {
          hid: "Minab IT Solutions",
          name: "description",
          content: "Minab IT Solutions",
        },
        // { "x-robots-tag": "all" },
        {
          "data-n-head": "ssr",
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "description",
          name: "description",
          content:
            "Minab IT Solutions Plc is a technology solutions provider with teams in Addis Ababa, Hawassa, Mekelle and Kombolcha. Minab’s team has worked on several government projects in Ethiopia, Nigeria, Mali, Tunisia, etc. as well as with international organizations and private sector companies, among others with jobs matching services and property management solutions which has afforded us excellent reputation with our clients for delivering outstanding results as evidenced in the reference letters. Our clients will also testify to our willingness to take ownership of issue analysis and resolution efforts and our commitment to resolve technical issues regardless of effort or time required",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:url",
          property: "og:url",
          content:
            "https://res.cloudinary.com/dtlezwrzm/image/upload/v1659170749/minab_v5s5ye.png",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:type",
          property: "og:type",
          content: "website",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:title",
          property: "og:title",
          content: "Minab IT Solution",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:description",
          property: "og:description",
          content:
            "Minab IT Solutions Plc is a technology solutions provider with teams in Addis Ababa, Hawassa, Mekelle and Kombolcha. Minab’s team has worked on several government projects in Ethiopia, Nigeria, Mali, Tunisia, etc. as well as with international organizations and private sector companies, among others with jobs matching services and property management solutions which has afforded us excellent reputation with our clients for delivering outstanding results as evidenced in the reference letters. Our clients will also testify to our willingness to take ownership of issue analysis and resolution efforts and our commitment to resolve technical issues regardless of effort or time required",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/dtlezwrzm/image/upload/v1659170793/Minab-meta_euoe81.png",
        },

        // twitter
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:domain",
          property: "twitter:domain",
          content:
            "https://res.cloudinary.com/dtlezwrzm/image/upload/v1659170749/minab_v5s5ye.png",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:url",
          property: "twitter:url",
          content:
            "https://res.cloudinary.com/dtlezwrzm/image/upload/v1659170749/minab_v5s5ye.png",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:title",
          property: "twitter:title",
          content: "Minab IT Solution",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:description",
          property: "twitter:description",
          content:
            "Minab IT Solutions Plc is a technology solutions provider with teams in Addis Ababa, Hawassa, Mekelle and Kombolcha. Minab’s team has worked on several government projects in Ethiopia, Nigeria, Mali, Tunisia, etc. as well as with international organizations and private sector companies, among others with jobs matching services and property management solutions which has afforded us excellent reputation with our clients for delivering outstanding results as evidenced in the reference letters. Our clients will also testify to our willingness to take ownership of issue analysis and resolution efforts and our commitment to resolve technical issues regardless of effort or time required",
        },
        { "data-hid": "twitter:image", content: "/minab-name.png" },
        {
          "data-hid": "twitter:image",
          "data-n-head": "ssr",
          property: "twitter:image",
          content:
            "https://res.cloudinary.com/dtlezwrzm/image/upload/v1659170793/Minab-meta_euoe81.png",
        },
      ],
      link: [
        { rel: "icon", type: "icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
        },
      ],
    },
  },
 headlessui: {
    prefix: 'Headless', 
  },
   modules: [
    '@nuxtjs/color-mode',
    "@nuxt/icon",
    "nuxt-headlessui",
    '@nuxtjs/leaflet',
    '@vee-validate/nuxt',
     '@nuxt/image',
     '@nuxtjs/apollo'
     
    
  ],
   apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
     clients: {
      
    }
  },
   veeValidate: {
    autoImports: true, // Enable auto imports for components and composables
    componentNames: {
      Form: 'VeeForm', // Custom name for Form component
      Field: 'VeeField', // Custom name for Field component
      FieldArray: 'VeeFieldArray', // Custom name for FieldArray component
      ErrorMessage: 'VeeErrorMessage', // Custom name for ErrorMessage component
    },
  },
   router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
    colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
    
  image: {
  //  provider:'ipx',
  // presets: {
  //     avatar: {
  //       modifiers: {
  //         format: 'jpg',
  //         width: 50,
  //         height: 50
  //       }
  //     }
  // },
  // format: ['webp','png','jpg'],
}
})