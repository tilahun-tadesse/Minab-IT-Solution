<script setup>
  const teams = ref([
    {
      image: "/images/home/team/Kaleab_Mezgeb.png",
      name: "Kaleab Mezgebu",
      position: "Co-Founder and COO",
      description: `  A system analyst and solutions architect with active involvement in
          system designs, incepting real-world application of service
          components, and managing stakeholder communications Kaleab leads the
          entirety of MinabTech operations.`,
      social_links: [
        {
          icon: "mdi:twitter",
          title: "Twitter",
          to: "https://x.com/i/flow/login?redirect_after_login=%2FkaleabMT",
        },
        {
          icon: "mdi:linkedin",
          title: "Linkedin",
        },
        {
          icon: "arcticons:emoji-web",
          title: "website",
        },
      ],
    },
    {
      image: "/images/home/team/michael_sahelu.png",
      name: " Michael Sahlu",
      position: " Co-Founder and CEO",
      description: ` A full stack developer specializing in front-end implementation and
          architecture design. With over nine years of working experience,
          Michael leads the overall technology advances of all MinabTech
          deployed products.`,
      social_links: [
        {
          icon: "mdi:twitter",
          title: "Twitter",
        },
        {
          icon: "mdi:linkedin",
          title: "Linkedin",
        },
        {
          icon: "arcticons:emoji-web",
          title: "website",
        },
      ],
    },
    {
      image: "/images/home/team/bereket_abebe.png",
      name: "Bereket Abebe",
      position: "Co-Founder and former CTO",
      description: `Bereket a senior back-end developer and one of our founding partners
          whom we lost in 2018 due to a car accident, use to manage all
          technical directions and stack choices for all internal and external
          projects MinabTech implements.`,
      social_links: [
        {
          icon: "mdi:twitter",
          title: "Twitter",
        },
        {
          icon: "mdi:linkedin",
          title: "Linkedin",
        },
        {
          icon: "arcticons:emoji-web",
          title: "website",
        },
      ],
    },
  ]);
</script>
<template>
  <div class="pb-20 bg-bg-gray dark:bg-bg-primary-dark">
    <div
      class="flex pb-14 pt-14 lg:pt-60 justify-center items-end bg-bg-primary dark:bg-bg-secondary-dark class font-extrabold text-3xl lg:text-4xl text-purple-4 border-b-8 border-b-primary dark:text-white"
    >
      Minab IT Solutions Plc
    </div>
    <div class="text-left h-[70%] 2xl:px-[292px] xl:px-28 px-[30px]">
      <p class="text-gray-500 font-semibold leading-9 text-lg pt-10">
        Founded in 2014 by three college friends in Addis Ababa Minab IT
        Solutions Plc is a technology solutions provider with teams in Addis
        Ababa, Hawassa, Mekelle, Adama, Diredawa, Debre Birhan, Bahir Dar,
        Bulbula, Bure, Yirgalem and Kombolcha. Minab is a technology consulting
        and cloud platforms development firm that has worked on several
        government and international development organization projects in
        Ethiopia, Nigeria, Mali, Morocco, Ghana, etc. Among others, our
        implementation sector includes jobs matching services, data analysis,
        and reporting tools, enterprise process automation, and property
        management solutions affording us an excellent reputation with our
        clients in delivering outstanding results as evidenced in their
        testimonies. We have a testified willingness to take ownership of issue
        analysis and resolution efforts and commitment to resolving technical
        issues regardless of effort or time scoped of any engagement.
        <br /><br />
        Our team consists of full-stack web and mobile developers, system
        solution designers as well as business experts with advanced work
        experience in requirement analysis, architectural design, user interface
        design, database design, implementation, testing, and documentation.
        <br /><br />
        Minab applies cutting-edge software development methodologies and
        technologies while taking the limitations in Ethiopia, such as
        connectivity issues, into consideration and providing capable systems.
        User-friendly designs and capable database schemas keeping in mind the
        queries that will have to be run, proficiency in the use of the latest
        cloud computing frameworks, hosted storage, etc. are at the core of our
        competency. We also uphold values of quality assurance which is a
        traditional ignored by service providers like us regardless of MinabTech
        automated functional, load, performance, unit, and security testing are
        as important as the development process itself. Both the management and
        the core team can demonstrate an outstanding understanding of
        information technology and processes.
      </p>
    </div>
    <div
      class="grid md:grid-cols-3 gap-32 md:gap-10 lg:gap-32 xl:gap-6 2xl:px-[292px] xl:px-28 px-[15px] mt-40"
    >
      <div
        v-for="(team, index) in teams"
        :key="index"
        class="text-center flex flex-col gap-6 place-items-center rounded-md bg-bg-primary dark:bg-bg-secondary-dark px-4 lg:pt-10 pb-10 border border-bg-primary dark:border-bg-secondary-dark hover:border-primary dark:hover:border-purple-3"
      >
        <NuxtImg
          alt="user-photo"
          :src="team.image"
          class="object-contain h-36 w-36 -mt-[20%] sm:-mt-[15%] md:-mt-[15%] lg:-mt-[20%] xl:-mt-[35% rounded-full"
        />
        <div class="font-medium leading-9 text-2xl dark:text-white">
          {{ team.name }}
        </div>
        <div
          class="text-primary font-extrabold leading-6 text-lg dark:text-bg-primary"
        >
          {{ team.position }}
        </div>
        <p class="leading-9 text-lg text-graytext font-semibold">
          {{ team.description }}
        </p>
        <div class="flex gap-6">
          <NuxtLink
            v-for="({ icon }, index) in team.social_links"
            :key="index"
            class="flex gap-6 text-secondary-2 hover:text-primary duration-200"
          >
            <Icon :name="icon" class="w-8 h-8"> </Icon>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
