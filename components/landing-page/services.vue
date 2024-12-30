<script setup>
  const img = useImage();
  const services = ref([
    {
      title: "Technology Consultancy",
      src: "/images/home/consult.png",
      description: `Minab offers technical consultancy services to both local and
                international organizations in three primary areas, data
                collection and analysis, process automation, and standard
                operation procedure designs.`,
      to: "/services/technonolgy_consultancy",
    },
    {
      title: "Software Development",
      src: "/images/home/coding.png",
      description: ` Minab is a reputable firm in delivering various types of
                software development services based on both liners as well as
                dynamic specifications from our clients following all the
                industry standards and procedures.`,
      to: "/services/software_development",
    },
    {
      title: "Dta analytics",

      description: ` Minab offers a diverse set of data cleaning, processing,
       and visualizing services to clients. 
      We offer data collection platforms or process archived client
      data to generate insights regarding their businesses.`,
      to: "/services/outsourcing",
      svg: `<svg width="50" height="50" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_869_265" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="123" height="123">
<path d="M16.2275 7.77515H8.60254V106.9C8.60254 108.922 9.40588 110.862 10.8358 112.292C12.2658 113.722 14.2053 114.525 16.2275 114.525H115.353V106.9H16.2275V7.77515Z" fill="black"/>
<path d="M115.353 34.4626H88.665V42.0876H102.352L73.415 71.0245L57.0594 54.6308C56.705 54.2734 56.2833 53.9898 55.8187 53.7962C55.3541 53.6027 54.8558 53.503 54.3525 53.503C53.8492 53.503 53.3509 53.6027 52.8863 53.7962C52.4218 53.9898 52.0001 54.2734 51.6457 54.6308L23.8525 82.462L29.2282 87.8376L54.3525 62.7133L70.7082 79.107C71.0626 79.4644 71.4843 79.748 71.9488 79.9415C72.4134 80.1351 72.9117 80.2348 73.415 80.2348C73.9183 80.2348 74.4166 80.1351 74.8812 79.9415C75.3458 79.748 75.7675 79.4644 76.1219 79.107L107.728 47.4633V61.1501H115.353V34.4626Z" fill="black"/>
</mask>
<g mask="url(#mask0_869_265)">
<rect x="-12.3232" y="-18.7637" width="153.188" height="172.42" fill="#ffff"/>
</g>
</svg>
`,
    },
  ]);
</script>
<template>
  <div
    id="services"
    class="pt-5 2xl:px-28 px-5 xl:px-16 lg:px-10 sm:pt-10 md:pt-20"
  >
    <div class="text-center">
      <p
        class="text-4xl sm:text-6xl font-extrabold mb-2 text-minab-gray dark:text-secondary-navbar"
      >
        Services
      </p>
    </div>
    <div class="text-center px-5 lg:mt-32 md:mt-24 mt-10">
      <div class="flex max-md:flex-col group mt-6 xl:gap-5 sm:gap-10 h-full">
        <div v-for="(service, index) in services" :key="index">
          <NuxtLink :to="service.to" class="h-full cursor-pointer">
            <div
              class="flex justify-center mx-auto shadow-lg shadow-primary rounded-xl items-center bg-primary max-w-xs flex-wrap w-24 h-24"
            >
              <div v-if="service.svg" v-html="service.svg"></div>
              <div class="w-6/12" v-else>
                <NuxtImg
                  :src="service.src"
                  format="webp"
                  alt="Technology Consultancy"
                  :placeholder="img(service.src, { blur: 2 })"
                />
              </div>
            </div>
            <div class="mt-10">
              <p
                class="font-body font-bold 2xl:text-2xl text-xl text-primary-dark dark:text-secondary-navbar"
              >
                {{ service.title }}
              </p>
            </div>
            <div class="flex justify-center mt-8">
              <p
                class="xl:w-3/4 w-11/12 max-md:w-[80%] break-words font-semibold xl:text-lg lg:text-base text-sm font-body text-minab-gray dark:text-gray-100"
              >
                {{ service.description }}
              </p>
            </div>
            <div class="mt-8 lg:mb-2 mb-5">
              <NuxtLink @click.stop="" :to="service.to"
                ><span
                  class="text-primary-hover font-body font-extrabold text-lg"
                >
                  Explore More</span
                ></NuxtLink
              >
            </div>
          </NuxtLink>
        </div>

        <!--]-->
      </div>
    </div>
  </div>
</template>
