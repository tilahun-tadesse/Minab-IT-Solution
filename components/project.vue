<script setup>
  const projects = ref([]);
  const img = useImage();
  onMounted(() => {
    projects.value = [
      {
        image: "/images/home/project/hahu-jobs.png",
        title: "HahuJobs",
        slug: "hahu-jobs",
        description: `HaHuJobs a cloud services operating to capture structured
                    data of the Ethiopian skilled and non-skilled labor market
                    through digitally connecting thousands of job seekers in
                    major Ethiopian cities as well as industrial parks. The
                    platform in a collection of micro services groped to compose
                    web application modules that offer a set of functionalities.
                    HaHuJobs is an electronic product sold as service to a
                    category of clients as per their specific needs in the labor
                    market of Ethiopia. It features various service categories
                    which revolves around data driven job matching of the right
                    candidate with the right job opening, student tracing,
                    capacity building and assessing of Jobseekers. This platform
                    has sub services tailored to the specific industries and
                    stakeholders, but as a primary concept HaHuJobs has a strong
                    biometric based jobseeker identification and an automated
                    method of matching workers with appropriate vacancy through
                    structured data formats.`,
      },

      {
        image: "/images/home/project/BMS-Banner.png",
        title: "Minab BMS",
        slug: "minab-bms",
        description: `Minab BMS is a system that allows the client to manage
                    rental structures with ease by modulating the activities
                    undertook to manage structures and summarizing the total
                    expense to the total income collected per each structure as
                    it supports multiple buildings. The system will has five
                    modules each dedicated to automating a section of the
                    activities involved in managing the structures. The solution
                    is delivered on multiple platforms including cloud, desktop
                    with SMS notification integration and mobile responsive
                    version. Making it convenient for any poor Telecom
                    infrastructural structures challenges faced in Ethiopia.`,
      },
      {
        image: "/images/home/project/minab_dms.png",
        title: " Minab Digital Data Management tool",
        slug: "minab-digital-data-management-tool",
        description: `Is a digital solution to automate a projects Monitoring,
                    Evaluation, Accountability and Learning (MEAL) and
                    implementation model. The platform is built with
                    standardized operation procedures that are aided with a
                    system to keep logs of operation activities. The tool offers
                    two levels of data collection model, with configurable form
                    parameters and a separate reporting tool to offer insights
                    on the data collecte using the tool. The platform aslo
                    offers a separate configuration deployment that allows the
                    client to configure the user and workflow of the data
                    collection process.`,
      },
    ];
  });
</script>
<template>
  <div id="project" class="w-full dark:bg-minab-dark-section">
    <div class="lg:px-24 max-xl:px-10 w-full pt-20 h-full py-10">
      <div class="w-full pb-2">
        <div
          class="font-bold text-black lg:text-6xl text-4xl dark:text-secondary-navbar"
        >
          Projects
        </div>
        <div class="pt-5">
          <p
            class="font-body lg:text-lg text-sm mt-7 text-secondary-8 font-semibold break-words"
          >
            Below are some of our notable products and projects. We have
            successfully developed and delivered multiple projects. Among other
            below are some of our large-scale engagement and products currently
            actively serving our clients as well as users.
          </p>
        </div>
      </div>
      <div class="w-full lg:pr-20 py-10" v-if="true">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="w-full group flex flex-col cursor-pointer py-5"
        >
          <NuxtLink to="/projects"
            ><div
              class="h-full w-full bg-primary-lite-2 dark:bg-minab-dark-background rounded-xl flex flex-row max-xl:flex-col lg:p-10 px-2 py-2 pb-10 lg:max-h-[340px] border dark:border-minab-dark-section hover:border-primary dark:hover:border-primary-hover"
            >
              <div class="w-[40%] max-xl:w-[100%] flex">
                <NuxtImg
                  :src="project.image"
                  :alt="project.title"
                  format="webp"
                  :placeholder="img(project.image, { blur: 2 })"
                  class="rounded-xl object-contain"
                />
              </div>
              <div class="w-[60%] max-xl:w-[100%] lg:px-10 px-3 lg:mt-0 pt-8">
                <div
                  class="font-body font-bold lg:text-3xl md:text-xl text-lg text-primary dark:text-white"
                >
                  {{ project.title }}
                </div>
                <div class="mt-7">
                  <p
                    class="text-minab-gray tracking-wide lg:text-base text-sm font-semibold lg:leading-7 leading-6 dark:text-secondary-8 break-words lg:overflow-hidden lg:max-h-[132px]"
                  >
                    {{ project.description }}
                  </p>
                </div>
                <div class="flex justify-end items-center mt-5">
                  <div class="invisible group-hover:visible">
                    <NuxtLink
                      class="flex justify-center items-center content-center gap-x-5"
                      :to="`/projects/${project.slug}`"
                      ><span class="text-primary dark:text-secondary-navbar">
                        Explore More</span
                      >
                      <Icon
                        name="gravity-ui:arrow-right"
                        class="text-primary dark:text-secondary-navbar"
                      ></Icon>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="flex justify-center">
          <NuxtLink
            to="/projects"
            class="text-primary-lite dark:text-primary-hover font-bold font-body text-lg"
          >
            More Projects
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="border-4 w-full border-primary"></div>
  </div>
</template>
