<script setup>
  const projects = ref([
    {
      image: "/images/projects/jcc.png",
      title: "National Recruitment Platform",
      description: ` A system analyst and solutions architect with active involvement in
          system designs, incepting real-world application of service
          components, and managing stakeholder communications Kaleab leads the
          entirety of MinabTech operations.`,
    },
    {
      image: "/images/projects/hahu_box_logo.png",
      title: " HaHuJobs for Industry Parks",
      description: `Labour Management Information System implemented in 8 industry parks across Ethiopia in collaboration with Ethiopian Investment Commission (EIC), funded by MasterCard Foundation.`,
    },
    {
      image: "/images/projects/hahu_logo.png",
      title: "HaHuJobs Jobs Ecosystem",
      description: ` A job platform with 150,000+ users, features include a
                    jobaggregator, enterprise HRMS services, training,
                    university &amp; TVETintegration, data analysis and
                    visualization, Telegram channel andbot, and more.  `,
    },
    {
      image: "/images/projects/IFPF.png",
      title: " iConsult &amp; Auxilio",
      description: `Open source collaborative policy consultation and agenda
                    setting web and mobile apps in collaboration with i4Policy,
                    a collaborationof 45 start-up and innovation hubs from 20
                    African countries.`,
    },
    {
      image: "/images/projects/EIC.png",
      title: "Jobs Protection Facility Platform",
      description: ` Aimed at saving thousands of jobs in Ethiopia’s textile and
                    garments industry while helping to support the country’s
                    economic recovery from COVID-19, this platform helped to
                    apply for and dispers USD 6.5 million funding by the
                    governments of the UK, US and Germany.`,
    },
    {
      image: "/images/projects/AAU_logo.png",
      title: "  AAU Annual Job Fair",
      description: `  A job fair digitization and facilitation platform for annual
                    job fairs held at AAU 6 kilo campus.  `,
    },
    {
      image: "/images/projects/jcc.png",
      title: " National SME Data Analysis",
      description: `Cleaning, analysis and visualization of data of over 19,000
                    Ethiopian SMEs for national strategic decision in response
                    to COVID 19 impact on informal sectors. `,
    },
  ]);
  const social_links = ref([
    {
      social_media: [
        {
          icon: "mdi:twitter",
          title: "Twitter",
          to: "https://twitter.com/kaleabmezgebu",
        },
        {
          icon: "mdi:linkedin",
          title: "Linkedin",
          to: "https://www.linkedin.com/in/kaleab-tesema-5885897a/",
        },
        {
          icon: "arcticons:emoji-web",
          title: "Website",
          to: "mailto:kaleab.mezgebu@hahu.jobs",
        },
      ],
    },
    {
      share: [
        {
          icon: "mdi:facebook",
          title: "Facebook",
          to: "http://www.facebook.com/sharer/sharer.php?u=https://www.minabtech.com/team/1&amp;t=Kaleab Mezgebu",
        },
        {
          icon: "mdi:twitter",
          title: "Twitter",
          to: "http://twitter.com/share?text=Kaleab Mezgebu&amp;url=https://www.minabtech.com/team/1&amp;hashtags=HahuJobs,Minab_ICT_Solutions",
        },
        {
          icon: "mdi:telegram",
          title: "Telegram",
          to: "https://t.me/share/url?url=https://www.minabtech.com/team/1&amp;text=Kaleab Mezgebu",
        },
      ],
    },
  ]);
</script>
<template>
  <div
    class="w-full dark: bg-secondary-4 dark:bg-minab-dark-background h-full pt-20 2xl:px-40 xl:px-20 lg:px-10 px-5 pb-28"
  >
    <div class="flex w-full flex-col">
      <div
        class="w-full flex flex-row gap-x-32 max-md:gap-x-0 2xl:mx-[10%] lg:mx-[3%] max-md:mx-0"
      >
        <div class="max-md:w-full">
          <div class="flex lg:justify-center justify-start">
            <div>
              <NuxtImg
                alt="Kaleab Mezgebu"
                src="/images/home/team/Kaleab_Mezgeb.png"
                class="object-contain flex rounded-xl"
              />
              <div class="flex mt-6 justify-center gap-y-3 gap-x-5">
                <NuxtLink
                  v-for="(link, index) in social_links[0].social_media"
                  :key="index"
                  :to="link.to"
                  target="_blank"
                >
                  <Icon
                    class="h-6 w-6 text-primary dark:text-primary-lite"
                    :name="link.icon"
                  ></Icon>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-3">
          <span
            class="uppercase font-bold font-body 2xl:text-[40px] xl:text-4xl lg:text-3xl md:text-xl text-lg text-primary-dark dark:text-white"
            >Kaleab Mezgebu</span
          >
          <div
            class="font-body 2xl:text-2xl xl:text-xl md:text-lg text-base font-medium text-primary-hover"
          >
            Co-Founder and COO
          </div>
          <div class="pt-5 space-y-3">
            <div class="flex gap-1 font-semibold items-center">
              <span class="lg:text-lg md:text-sm text-xs dark:text-white"
                >kaleab.mezgebu@hahu.jobs</span
              >
            </div>
            <div>
              <div class="font-bold dark:text-white mt-6">Share</div>
              <div class="flex gap-3 mt-2">
                <a
                  v-for="(share, index) in social_links[1].share"
                  :key="index"
                  :href="share.to"
                  target="_blank"
                >
                  <Icon
                    class="text-secondary-2 lg:h-6 lg:w-6 h-4 w-4"
                    :name="share.icon"
                  ></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-5 mx-[27%] w-full md:w-[90%] 2xl:w-[60%] xl:w-[80%] max-xl:mx-[5%] max-md:mx-0"
      >
        <div
          class="font-body w-[80%] font-medium lg:text-lg text-sm text-secondary-8 pt-6 md:pr-10 pr-5 break-words"
        >
          A system analyst and solutions architect with active involvement in
          system designs, incepting real-world application of service
          components, and managing stakeholder communications Kaleab leads the
          entirety of MinabTech operations.
        </div>
        <div
          class="font-bold max-md:text-center 2xl:text-[32px] xl:text-2xl text-xl font-body text-primary-dark pt-10 dark:text-white"
        >
          Projects
        </div>
        <div class="pt-10 max-md:pt-2">
          <div v-for="(our_project, index) in projects" :key="index">
            <div
              class="flex flex-row gap-x-10 max-md:flex-col max-md:justify-center max-md:items-center border-b-[0.5px] border-collapse border-secondary-8 md:pt-10 pt-7 pb-6"
            >
              <div class="md:col-span-3 col-span-12">
                <div class="w-32 h-32 my-auto flex md:items-start items-center">
                  <NuxtImg
                    :src="our_project.image"
                    :alt="our_project.title"
                    class="object-contain"
                  />
                </div>
              </div>
              <div
                class="md:col-span-9 max-md:text-center col-span-10 items-center"
              >
                <div
                  class="font-body font-medium lg:text-lg text-base text-minab-gray dark:text-white"
                >
                  {{ our_project.title }}
                </div>
                <div
                  class="font-body font-medium lg:text-lg text-sm w-9/12 max-md:w-full md:pr-0 pr-5 break-words text-secondary-8 pt-7"
                >
                  {{ our_project.description }}
                </div>
                <div class="pt-4">
                  <NuxtLink
                    class="lg:text-base text-sm text-primary-hover font-body font-medium"
                    to="/projects"
                    >View projects</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
