<script setup>
  const img = useImage();
</script>
<template>
  <div id="about" class="lg:px-24 md:px-10 px-5 w-full">
    <div class="w-full h-full py-20">
      <div
        class="grid sm:grid-cols-12 gap-x-10 justify-between items-center h-full py-10"
      >
        <div class="sm:col-span-7 h-full">
          <div
            class="font-bold text-black dark:text-secondary-navbar lg:text-full6xl text-4xl"
          >
            About
          </div>
          <div class="w-full lg:w-10/12">
            <p
              class="lg:text-lg text-sm mt-10 text-secondary-8 break-words lg:w- md:w-10/12"
            >
              Founded in 2014 by three college friends in Addis Ababa. Minab IT
              Solutions Plc is a technology solutions provider with teams in
              Addis Ababa, Hawassa, Mekelle, Adama, Diredawa, Debre Birhan,
              Bahir Dar, Bulbula, Bure, Yirgalem and Kombolcha. Minab is a
              technology consulting and cloud platforms development firm that
              has worked on several governments and international development
              organization projects in Ethiopia, Nigeria, Mali, Morocco, Ghana,
              etc. Among others, our implementation sector includes jobs
              matching services, data analysis, and reporting tools, enterprise
              process automation, and property management solutions affording us
              an excellent reputation with our clients in delivering outstanding
              results as evidenced in their testimonies. We have a testified
              willingness to take ownership of issue analysis and resolution
              efforts and commitment to resolving technical issues regardless of
              effort or time scoped of any engagement.
            </p>
          </div>
          <div class="mt-10">
            <NuxtLink
              to="/about-us"
              class="text-primary-hover lg:text-base text-sm font-body font-medium"
              ><span>Read more</span></NuxtLink
            >
          </div>
        </div>
        <div
          class="col-span-4 md:block hidden rounded-xl justify-end h-full mt-10 sm:-mt-60 lg:-mt-24"
        >
          <div class="flex lg:justify-center items-start h-full justify-start">
            <div>
              <NuxtImg
                alt="About Us"
                format="webp"
                :placeholder="
                  img('/images/home/minab_about_us.png', { blur: 2 })
                "
                src="/images/home/minab_about_us.png"
                class="h-[549px] w-[549px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
