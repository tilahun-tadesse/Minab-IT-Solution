<script setup>
  const offers = ref([
    {
      title: "Cloud platforms",
      svg: `<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="h-16 w-16 text-icon"
        >
          <path
            d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
          ></path>`,
      description: `Minab provides large-scale cloud-based software solutions based
          requirements of our clients, we have extensive experience in
          modern-day microservice architecture and event-driven programming with
          demonstrable reference projects.`,
    },
    {
      title: "Integration or upgrade",
      svg: ` <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="h-16 w-16 text-icon"
        >
          <path
            fill-rule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>`,
      description: `We offer existing systems integration and overall upgrade for
          organizations that require modernizing or updating their existing
          systems in place. We are experienced in the system to system
          inspiration and guided automation revisions.`,
    },
    {
      title: " Enterprise solutions",
      svg: ` <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="h-16 w-16 text-icon"
        >
          <path
            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
          ></path>
        </svg>`,
      description: ` Minabs software development team has a long-standing experience in
          developing and delivering common enterprise solutions like human
          resource, stock, sales, and customer relations management platform
          solutions.`,
    },
  ]);
</script>
<template>
  <div class="bg-bg-gray dark:bg-bg-primary-dark">
    <div
      class="2xl:mb-60 md:mb-10 lg:mb-40 2x:mb-0 px-8 lg:px-[50px] xl:px-[105px] pt-10 lg:pt-40 grid md:grid-cols-2"
    >
      <div>
        <div
          class="text-3xl lg:text-5xl font-extrabold mb-10 text-purple-4 dark:text-white"
        >
          Software Development
        </div>
        <p class="font-semibold text-lg leading-9 text-graytext">
          Minab is a reputable firm in delivering various types of software
          development services based on both liners as well as dynamic
          specifications from our clients following all the industry standards
          and procedures. Our team has extensive experience in large-scale
          service cloud platforms that involve multi-stakeholders both in the
          development and operation period. We also offer initiation, upgrade,
          and modification of existing platforms following guidelines from our
          clients or ones proposed by us. In addition, we implement enterprise
          solutions platforms both as self-hosted and following software as a
          service model on a subscription basis based on the automation scale
          needs of our clients.
        </p>
      </div>
      <div class="flex justify-center">
        <NuxtImg
          alt="Software Development"
          src="/images/explore-more/software-development.png"
          class="h-[549px] w-[549px] max-md:h-[300px] max-md:w-[300px] object-contain"
        />
      </div>
    </div>
    <div class="text-center xl:grid xl:grid-cols-12 -mb-5 items-center">
      <div
        class="hidden xl:block h-0.5 bg-icon dark:bg-white xl:col-span-5"
      ></div>
      <div
        class="xl:col-span-2 font-extrabold text-icon text-3xl leading-9 text-center"
      >
        What we offer?
      </div>
      <div
        class="hidden xl:block h-0.5 bg-icon dark:bg-white xl:col-span-5"
      ></div>
    </div>
    <div
      class="flex flex-row max-md:flex-col justify-evenly items-center pt-10 max-md:pt-5 bg-white border-b-1.5 border-b-icon shadow-md shadow-icon dark:bg-gray-3"
    >
      <div v-for="(offer, index) in offers" :key="index" class=" ">
        <div
          class="flex flex-col gap-y-10 max-md:gap-y-5 px-10 max-xl:px-5 lg:px-20 py-20 max-xl:py-10 border-b border-b-primary lg:border-none"
        >
          <div v-html="offer.svg" class="h-16 w-16 text-icon"></div>
          <div class="font-medium text-2xl dark:text-white">
            {{ offer.title }}
          </div>
          <p class="text-graytext text-lg">
            {{ offer.description }}
          </p>
          <div><button class="text-icon font-bold">Book Now</button></div>
        </div>
      </div>
    </div>
  </div>
</template>
