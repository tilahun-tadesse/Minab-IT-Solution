<script setup>
  const route = useRoute();

  const share = ref([
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
  ]);
  const project = [
    {
      image: "/images/home/project/hahu-jobs.png",
      title: "Hahu Jobs",
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
  ];
  const img = useImage();
</script>

<template>
  <div class="bg-bg-gray dark:bg-bg-primary-dark min-h-screen">
    <div
      v-for="{ image, title, description } in project"
      class="pt-8 md:pt-20 lg:pt-40 px-6 lg:px-24"
    >
      <div class="flex justify-between">
        <div
          class="font-extrabold text-[20px] md:text-[40px] leading-9 text-purple-4 dark:text-white flex items-center gap-6 mb-3"
        >
          {{ title }}
        </div>
      </div>
      <div class="grid lg:grid-cols-5 gap-y-4">
        <div class="lg:col-span-2">
          <NuxtImg
            :src="image"
            :alt="title"
            :placeholder="img(image, { blur: 2, h: 200 })"
            class="md:h-[340px] object-contain rounded-xl"
          />
        </div>
        <div class="lg:col-span-3 lg:px-10">
          <p class="font-semibold text-graytext leading-9 text-lg text-left">
            {{ description }}
          </p>
          <div class="font-bold dark:text-white mt-6">Share Project</div>
          <div class="flex gap-2 items-center">
            <div
              v-for="({ icon, title, to }, index) in share"
              class="flex gap-3 mt-2"
            >
              <NuxtLink @click.stop="" :to="to" target="_blank">
                <Icon
                  class="h-6 w-6 text-primary dark:text-darkmode-white"
                  :name="icon"
                ></Icon>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
