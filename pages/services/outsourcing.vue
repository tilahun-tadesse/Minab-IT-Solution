<script setup>
  const offers = ref([
    {
      title: " Outsourcing software development",
      src: "/images/explore-more/outsourcing/software-outsourcing.png",
      description: `Minab provides quality outsourcing software development to offshore
          clients with very affordable rates and flexibility to fit their
          implementation needs. Our team has experience working with firms based
          in Europe, the UK, and Canada.`,
    },
    {
      title: " Dedicated developer capacity",
      src: "/images/explore-more/outsourcing/Devloper-Outsourcing.png",
      description: `  Minab trains and avails capable full-stack software developers well
          versed with our client's development workflow as well as their
          co-working tools and communication models for a seamless capacity
          increase.`,
    },
    {
      title: "IT department outsourcing",
      src: "/images/explore-more/outsourcing/IT-Support-Outsorcing.png",
      description: ` Minab offers full-scale IT department outsourcing services for large
          and medium-scale corporations with a tech infrastructure that requires
          dedicated technical support with little resource expenditure.`,
    },
  ]);
</script>
<template>
  <div class="bg-bg-gray dark:bg-bg-primary-dark">
    <div
      class="px-8 lg:px-[50px] xl:px-[105px] max-md:gap-y-5 pt-10 lg:pt-40 grid md:grid-cols-2"
    >
      <div>
        <div
          class="text-3xl lg:text-5xl font-extrabold mb-10 text-purple-4 dark:text-white"
        >
          Outsourcing
        </div>
        <p class="font-semibold text-lg leading-9 text-graytext">
          Minab offers developer hours, offshore dedicated developer capacity,
          and organization IT department outsourcing services to all
          corporations through our well-experienced team in the sector of
          operation. Through our six months internship program Minab trains
          fresh graduates and graduating students for an outsourcing developer
          our needs, in addition also offers dedicated on-call developers
          trained based on specifications of our clients based in Europe. We
          also outsource IT departments of large corporations to manage
          day-to-day support requests of the organization and manage maintenance
          runs based on a given operation plan communicated on service
          engagement.
        </p>
      </div>
      <div class="flex justify-center">
        <NuxtImg
          alt="Outsourcing"
          src="/images/explore-more/outsourcing.png"
          class="h-[549px] w-[549px] max-md:w-[200px] max-md:h-[200px] object-contain"
        />
      </div>
    </div>
    <div class="font-extrabold text-icon text-3xl leading-9 text-center">
      What we offer?
    </div>
    <div
      class="flex flex-row max-xl:flex-col items-center py-10 max-md:gap-y-5 md:gap-10 2xl:mx-40 mx-10"
    >
      <div
        v-for="(offer, index) in offers"
        :key="index"
        class="flex flex-col max-md:gap-y-5 gap-y-10 p-10 rounded-md bg-white border-b-1.5 border-b-icon shadow-md shadow-icon dark:bg-gray-3 lg:min-h-[430px] lg:max-h-[500px] h-full"
      >
        <NuxtImg
          :src="offer.src"
          class="h-16 w-16"
          alt="icon of Outsourcing software development"
        />
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
</template>
