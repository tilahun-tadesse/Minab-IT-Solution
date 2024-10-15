<script setup>
  const openModal = ref(false);
  const explore_more = ref([
    {
      title: "Technology Consultancy",
      src: "/images/explore-more/consult-minab.png",
      description: `Minab offers technical consultancy services to both local and
                international organizations in three primary areas, data
                collection and analysis, process automation, and standard
                operation procedure designs. With extensive experience in all
                categories of services we deliver we offer our clients a holistic
                approach to data collection visualization in context-relevant
                models. We also offer process automaton and digitization models
                for scaling organizations that are looking to automate their
                business operation processes or keep track of a set of specific
                KPIs. We also help our clients in defining standard operating
                procedures in day-to-day operations to help guide their
                automation guides.`,
    },
    {
      title: "Data collection and visualization",
      src: "/images/explore-more/Data-visualization.png",
      description: `  We have a demonstrable capacity in data processing and analysis using
          standardized tools. We have a reputation for being a data-driven
          company with the capacity to properly capture, index, process,
          visualize and analyze data a competency we can demonstrate. enim.`,
    },

    {
      title: "  Automation and digitization models",
      src: "/images/explore-more/Automation.png",
      description: ` Minab offers a well-thought automation model prior to the technical
          proposal for enterprises with no digital automation prior experience
          before software development proposals for effective implementation of
          any digital intervention their organization requires to increase
          operational efficiency. `,
    },
    {
      title: "Standard operation procedures",
      src: "/images/explore-more/Operations.png",
      description: `We consult on standardizing organization operations, especially ones
          that require multiple process points and generate high volume data.
          Standard operation procedure consultations are usually coupled with
          proposed automation and development proposals.`,
    },
  ]);
  const img = useImage();
</script>

<template>
  <div>
    <ModalBookServices v-if="openModal" v-model="openModal">
    </ModalBookServices>
    <div class="bg-bg-gray max-2xl:pt-10 dark:bg-bg-primary-dark w-full">
      <div
        v-for="(explore, index) in explore_more"
        :key="index"
        :class="[index % 2 == 0 ? 'lg:flex flex-row' : 'lg:flex-row-reverse']"
        class="w-full flex max-md:flex-col 2xl:gap-x-20 max-md:gap-y-5 2x:mb-0 px-8 lg:px-[10%]"
      >
        <div
          class="flex flex-col justify-center space-y-6 w-[60%] max-md:w-[100%]"
        >
          <div
            class="text-3xl lg:text-5xl font-extrabold mb-5 text-purple-4 dark:text-white"
          >
            {{ explore.title }}
          </div>
          <p class="font-semibold text-lg leading-9 text-graytext">
            {{ explore.description }}
          </p>
          <div class="w-auto">
            <button
              @click="openModal = !openModal"
              class="px-4 py-3 rounded-md bg-primary text-white font-semibold"
            >
              Let's talk standards
            </button>
          </div>
        </div>
        <div class="flex justify-center">
          <NuxtImg
            alt="Consultancy"
            format="webp"
            :placeholder="img(explore.src, { blur: 2 })"
            :src="explore.src"
            class="h-[549px] w-[549px] max-md:h-[300px] max-md:w-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>
