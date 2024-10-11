<script setup>
  import { employee } from "~/use/employee";
  const founders = ref([]);
  const teams = ref([]);
  onMounted(() => {
    founders.value = employee.filter((emp) => emp.founder == true);

    teams.value = employee.filter((emp) => !emp.founder);
  });
</script>
<template>
  <div
    class="w-full bg-secondary-1 dark:bg-minab-dark-background h-full pt-10 2xl:px-20 md:px-10 px-6"
  >
    <div class="h-full w-full pt-5">
      <div>
        <div
          class="text-primary-dark lg:text-4xl text-2xl font-bold flex justify-center dark:text-secondary-navbar"
        >
          Founders
        </div>
        <div
          class="flex justify-center lg:w-8/12 w-full mx-auto lg:px-20 sm:px-10 px-2 pt-10 break-words"
        >
          <p
            class="text-center text-secondary-8 lg:text-lg text-sm font-medium"
          >
            MinabTech was founded by three ambitious college friends from Addis
            Ababa university in 2014 who saw an opportunity with the lack of
            capacity to serve the Ethiopian technology market demand
          </p>
        </div>
        <div
          class="flex flex-wrap justify-center pt-10 mt-10 max-md:pt-0 max-md:mt-5 px-20 max-xl:px-0"
        >
          <div
            v-for="(founder, indexs) in founders"
            :key="indexs"
            class="rounded-xl max-w-[450px] max-xl:max-w-[300px] lg:mt-0 mt-8 flex flex-col"
          >
            <NuxtLink :to="founder.to"
              ><div
                class="mx-auto flex flex-col max-xl:justify-center max-xl:items-center"
              >
                <NuxtImg
                  alt="founder"
                  :src="founder.image"
                  class="object-cover object-top rounded-full h-40 w-40 max-md:h-20 max-md:w-20"
                />

                <div class="">
                  <div
                    class="pt-5 text-primary dark:text-white font-bold lg:text-lg text-md font-body"
                  >
                    {{ founder.name }}
                  </div>
                  <div
                    class="text-primary dark:text-white dark:contrast-50 font-medium lg:text-lg text-sm font-body"
                  >
                    {{ founder.title }}
                  </div>
                </div>
                <div
                  class="font-body max-xl:text-center font-medium text-secondary-8 pr-5 pt-3 leading-7 lg:text-lg text-sm 2xl:w-10/12 md:w-11/12 w-full"
                >
                  {{ founder.description }}
                </div>

                <div class="flex gap-x-2 mt-6">
                  <div
                    v-for="(socail_link, index) in founder.socail_links"
                    class="flex gap-3"
                  >
                    <a
                      v-if="socail_link.title !== 'website'"
                      @click.stop=""
                      :href="socail_link.link"
                      target="_blank"
                    >
                      <Icon
                        class="text-secondary-2 hover:text-primary lg:h-6 lg:w-6 h-4 w-4"
                        :name="socail_link.icon"
                      >
                      </Icon>
                    </a>
                    <a
                      v-else
                      :href="`mailto:${socail_link.link}`"
                      target="_blank"
                    >
                      <Icon
                        class="text-secondary-2 hover:text-primary lg:h-6 lg:w-6 h-4 w-4"
                        :name="socail_link.icon"
                      >
                      </Icon>
                    </a>
                  </div>
                </div></div
            ></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full xl:mt-20 lg:mt-16 pt-5">
      <div
        class="text-primary-dark lg:text-4xl text-2xl font-bold flex justify-center dark:text-secondary-navbar"
      >
        Our team
      </div>
      <div
        class="flex justify-center lg:w-8/12 w-full mx-auto lg:px-20 sm:px-10 px-2 pt-10 break-words"
      >
        <p class="text-center text-secondary-8 lg:text-2xl text-lg font-medium">
          Here are the people behind the magic
        </p>
      </div>
      <div class="w-full pb-16 2xl:px-20 xl:px-10 lg:px-8 px-0">
        <div
          class="xl:w-1/2 w-2/3 flex p-1 justify-center items-center mx-auto"
        >
          <div
            class="outline-none justify-center place-self-center 2xl:mx-20 xl:mx-10 lg:mx-8 mx-5"
          ></div>
        </div>
        <div class="xl:mt-20 lg:mt-16 md:mt-10 mt-6">
          <div>
            <div
              class="flex flex-wrap justify-center max-md:gap-x-2 2xl:px-10 gap-x-3 xl:px-10 lg:px-8"
            >
              <NuxtLink
                v-for="(our_team, index) in teams"
                :key="index"
                class="rounded-xl max-md:max-w-[165px] min-w-[310px] max-w-[30px] max-xl:min-w-[250px] max-md:min-w-[165px] lg:px-4 px-0 md:mt-8 mt-5"
                ><div
                  class="bg-primary-lite-2 dark:bg-minab-dark-section min-h-[250px] rounded-xl pb-7 pt-5 w-full mt-4 border dark:border-minab-dark-section hover:border-primary dark:hover:border-primary-hover"
                >
                  <div class="flex justify-center">
                    <NuxtImg
                      :src="our_team.image"
                      class="rounded-full lg:w-28 lg:h-28 w-16 h-16 object-cover object-top"
                    />
                  </div>
                  <div class="flex justify-center">
                    <div>
                      <div
                        class="pt-5 text-primary dark:text-white font-bold lg:text-lg text-sm font-body text-center"
                      >
                        {{ our_team.name }}
                      </div>
                      <div
                        class="text-primary dark:text-primary-hover font-medium lg:text-base text-sm font-body text-center pt-2"
                      >
                        {{ our_team.title }}
                      </div>
                      <div class="flex mt-6 gap-x-2 justify-center">
                        <div
                          v-for="(social_media, index) in our_team.socail_links"
                          :key="index"
                          class="flex gap-3"
                        >
                          <a
                            v-if="social_media.title !== 'website'"
                            @click.stop=""
                            :href="social_media.link"
                            target="_blank"
                          >
                            <Icon
                              class="text-secondary-2 hover:text-primary lg:h-6 lg:w-6 h-4 w-4"
                              :name="social_media.icon"
                            >
                            </Icon>
                          </a>
                          <a
                            v-else
                            @click.stop=""
                            :href="`mailto:${social_media.link}`"
                            target="_blank"
                          >
                            <Icon
                              class="text-secondary-2 hover:text-primary lg:h-6 lg:w-6 h-4 w-4"
                              :name="social_media.icon"
                            >
                            </Icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
