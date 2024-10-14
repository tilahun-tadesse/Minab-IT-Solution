<script setup>
  const projects = ref([
    {
      image: "/images/home/project/hahu-jobs.png",
      title: "Hahu Jobs",
      id: 1,
      description: `HaHuJobs a cloud services operating to capture structured data of the Ethiopian
       skilled and non-skilled labor market through digitally connecting thousands of job seekers in
        major Ethiopian cities as well as industrial parks. The platform in a collection of micro
        services groped to compose web application modules that offer a set of functionalities.
         HaHuJobs is an electronic product sold as service to a category of clients as per their
         specific needs in the labor market of Ethiopia. It features various service categories
         which revolves around data driven job matching of the right candidate with the right job
          opening, student tracing, capacity building and assessing of Jobseekers.
       This platform has sub services tailored to the specific industries and stakeholders, but
       as a primary concept HaHuJobs has a strong biometric based jobseeker identification and
       an automated method of matching workers with appropriate vacancy through structured data formats.`,
    },
    {
      image: "/images/home/project/minab_dms.png",
      title: "Minab BMS",
      id: 2,
      description: `Minab BMS is a system that allows the client to manage rental structures 
      with ease by modulating the activities undertook to manage structures and summarizing
       the total expense to the total income collected per each structure as it supports multiple
        buildings. The system will has five modules each dedicated to automating a section of the
         activities involved in managing the structures. The solution is delivered on multiple platforms
         including cloud, desktop with SMS notification integration and mobile responsive version. Making
          it convenient for any poor Telecom infrastructural structures challenges faced in Ethiopia.`,
    },
    {
      image: "/images/home/project/BMS-Banner.png",
      title: "Minab Digital Data Management tool",
      id: 3,
      description: `Is a digital solution to automate a projects Monitoring, Evaluation,
       Accountability and Learning (MEAL) and implementation model. The platform is built
        with standardized operation procedures that are aided with a system to keep logs
        of operation activities. The tool offers two levels of data collection model, with
         configurable form parameters and a separate reporting tool to offer insights on
         the data collecte using the tool. The platform aslo offers a separate configuration
          deployment that allows the client to configure the user and workflow of the data 
          collection process.`,
    },
  ]);
  const img = useImage();
</script>
<template>
  <div class="bg-bg-gray dark:bg-bg-primary-dark">
    <div class="text-center pt-20 lg:pt-40">
      <div
        class="font-extrabold leading-[55px] text-[40px] text-purple-4 dark:text-white"
      >
        Projects
      </div>
      <p class="leading-9 font-semibold text-lg px-3 2xl:px-96 text-graytext">
        Below are some of our notable products and projects. We have
        successfully developed and delivered multiple projects. Among other
        below are some of our large-scale engagement and products currently
        actively serving our clients as well as users.
      </p>
    </div>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 px-3 lg:px-10 2xl:px-40 py-20 gap-10"
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="rounded-2xl bg-white dark:bg-bg-secondary-dark p-2 border dark:border-minab-dark-section hover:border-primary dark:hover:border-primary-hover"
      >
        <NuxtLink :href="`/projects/${project.id}`"
          ><div>
            <div class="flex justify-center">
              <NuxtImg
                :alt="project.title"
                :src="project.image"
                format="webp"
                :placeholder="img(project.image, { blur: 2 })"
                class="md:h-[240px] rounded-t-xl object-contain"
              />
            </div>
            <div class="h-0.5 bg-darkmode-white dark:bg-secondary mt-0.5"></div>
          </div>
          <div class="p-4">
            <div
              class="text-primary dark:text-bg-primary font-extrabold text-lg mb-3"
            >
              {{ project.title }}
            </div>
            <p
              class="text-gray-3 dark:text-bg-primary text-base leading-6 mb-3 line-clamp-4"
            >
              {{ project.description }}
            </p>
            <div class="grid lg:grid-cols-3">
              <div class="col-span-3 flex justify-end p-4">
                <NuxtLink
                  :to="`/projects/${project.id}`"
                  class="flex flex-row-reverse justify-center gap-x-2 text-purple-4 dark:text-darkmode-white text-lg items-center"
                >
                  <span>Explore More</span>
                  <Icon
                    name="gravity-ui:arrow-right"
                    class="text-primary dark:text-darkmode-white"
                  ></Icon>
                </NuxtLink>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
