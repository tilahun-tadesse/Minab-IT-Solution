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
    
   ],
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
  // presets: {
  //     avatar: {
  //       modifiers: {
  //         format: 'jpg',
  //         width: 50,
  //         height: 50
  //       }
  //     }
  //   }
}
})