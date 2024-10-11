<script setup>
  const head_nav = ref([
    {
      title: "About",
      to: "/#about",
    },

    {
      title: "Services",
      to: "/#services",
    },
    {
      title: "Project",
      to: "/#project",
    },
    {
      title: "Partners",
      to: "/#partners",
    },
    {
      title: "Privacy policy",
      to: "/#services",
    },
  ]);
  const social_links = ref([
    {
      title: "Twitter",
      icon: "mdi:twitter",
      path: "https://twitter.com/minabplc?t=hDNwc6oi9Mpx1ZTFGsA_DA&amp;s=09",
    },
    {
      title: "Facebook",
      icon: "mdi:facebook",
      path: "https://www.linkedin.com/company/minab-it-solutions-plc/about/",
    },

    {
      title: "Linkedin",
      icon: "mdi:linkedin",
      path: "https://www.facebook.com/minabitsolutions",
    },
  ]);
</script>
<template>
  <div class="bg-bg-gray dark:bg-bg-primary-dark">
    <div class="mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:py-20">
      <div class="h-0.5 bg-gray-400 xl:mx-[292px] mx-[30px]"></div>
      <div
        class="max-w-7xl flex flex-col justify-center self-center mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
      >
        <div
          class="flex flex-wrap justify-center self-center items-center gap-x-10"
        >
          <nav
            class="-mx-5 -my-2 flex justify-center"
            aria-label="Footer"
            v-for="(head, index) in head_nav"
          >
            <div class="px-5 py-2">
              <NuxtLink
                :to="head.to"
                class="router-link-active router-link-exact-active font-medium text-gray-500 text-lg hover:text-gray-900 dark:hover:text-darkmode-white"
                >{{ head.title }}</NuxtLink
              >
            </div>
          </nav>
        </div>
        <div class="mt-8 flex justify-center space-x-6">
          <NuxtLink
            v-for="(social, index) in social_links"
            :to="social.path"
            rel="noopener noreferrer"
            target="_blank"
            class="text-gray-400 hover:text-gray-500 dark:hover:text-darkmode-white"
            ><span class="sr-only">{{ social.title }}</span
            ><Icon class="w-6 h-6" :name="social.icon"></Icon
          ></NuxtLink>
        </div>
        <p class="mt-8 text-center text-lg text-gray-400">
          © 2022 Minab IT Solutions. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
