<script setup>
  import { employee } from "~/use/employee";
  const teams = ref([]);
  onMounted(() => {
    teams.value = employee.slice(0, 6);
  });
</script>
<template>
  <div
    id="team"
    class="lg:flex lg:gap-10 gap-5 mt-32 pb-20 max-xl:mt-10 pt-10 max-md:pt-0"
  >
    <div
      class="px-20 max-md:px-5 flex flex-row max-xl:flex-col max-xl:justify-center max-xl:items-center gap-10"
    >
      <div class="text-left max-xl:text-center lg:w-5/12 w-full">
        <p
          class="font-body font-extrabold lg:text-6xl text-4xl dark:text-gray-100 text-minab-gray mt-14 max-xl:mt-5"
        >
          Meet the Team
        </p>
        <p
          class="mt-16 max-xl:mt-5 font-body font-medium lg:text-lg text-sm break-words text-secondary-8 lg:w-full"
        >
          Introducing one of the best software development and technical
          operation team in the Ethiopian technology service market. Our team
          constitutes a diverse set of talent and expertise to tackle our
          client's challenges and solution needs.
        </p>
      </div>
      <div class="w-[60%] max-xl:w-[100%] items-center">
        <div
          class="flex flex-wrap justify-center items-center self-center gap-4 max-md:gap-2 mt-6"
        >
          <div v-for="(team, index) in teams" :key="index" class="">
            <div
              class="rounded-xl shadow-lg w-[300px] max-xl:w-[200px] max-md:w-[170px] max-h-[300px] hover:shadow-sm cursor-pointer lg:mb-12 mb-5 lg:p-6 p-4 bg-primary-lite-2 dark:bg-minab-dark-section opacity/90 h-[90%] dark:border dark:border-minab-dark-section dark:hover:border-primary-hover"
            >
              <NuxtLink :to="team.to"
                ><div class="flex justify-center">
                  <NuxtImg
                    :src="team.image"
                    class="rounded-full lg:w-28 lg:h-28 w-16 h-16 object-cover object-top"
                  />
                </div>
                <div class="flex justify-center items-center">
                  <div class="w-full">
                    <div class="text-left mt-5">
                      <p
                        class="lg:text-lg text-sm dark:text-secondary-4 font-bold font-body text-primary-dark text-center"
                      >
                        {{ team.name }}
                      </p>
                    </div>
                    <div class="pt-2">
                      <p
                        class="font-body lg:text-base text-xs font-medium text-primary-lite text-center dark:text-primary-hover"
                      >
                        {{ team.title }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center gap-3 items-center mt-6">
                  {{ team.social_links }}
                  <div
                    v-for="(social, index) in team.social"
                    :key="index"
                    class="flex"
                  >
                    <div aria-label="contact team ">
                      <Icon
                        class="lg:h-6 lg:w-6 h-4 w-4 text-secondary-2 hover:text-primary"
                        :name="social.icon"
                      ></Icon>
                    </div>
                  </div></div
              ></NuxtLink>
            </div>
          </div>
        </div>
        <div class="">
          <NuxtLink
            to="/team"
            class="text-primary-hover lg:text-lg text-sm font-body font-bold"
          >
            More team members
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
