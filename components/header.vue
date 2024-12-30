<script setup>
  const route = useRoute();
  const head_nav = ref([]);
  const img = useImage();
  const isActive = (link) => {
    return route.hash === link;
  };
  onMounted(() => {
    head_nav.value = [
      {
        title: "Home",
        to: "",
      },
      {
        title: "About",
        to: "#about",
      },
      {
        title: "Services",
        to: "#services",
      },
      {
        title: "Team",
        to: "#team",
      },
      {
        title: "Project",
        to: "#project",
      },
      {
        title: "Partners",
        to: "#partners",
      },
      {
        title: "Contact",
        to: "#contact",
      },
    ];
  });
  watchEffect(
    () => route.hash,
    (newVal) => {
      isActive(newVal);
    }
  );
  // onMounted(() => {
  //   if (route.path == "/") {
  //     isActive("/#home");
  //     console.log(isActive("/#home"));
  //   }
  // });
  const showMenu = ref(false);
  watchEffect(() => (showMenu) => {
    console.log(showMenu);
  });
  function click() {
    showMenu.value = !showMenu.value;
    console.log(showMenu.value);
    if (showMenu.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
</script>
<template>
  <div
    class="dark:bg-minab-dark-primary transition-colors duration-700 ease-in-out w-full bg-[#ffffff60] dark:bg-opacity-90 bg-opacity-70 sticky py-3 top-0 z-20 shadow backdrop-blur-md"
  >
    <div class="mx-auto px-4 sm:px-10 lg:px-10">
      <div class="flex items-center justify-between h-[58px]">
        <div class="flex items-center">
          <div class="flex-shrink-0 lg:pl-10 flex items-center gap-x-5">
            <NuxtLink to="/"
              ><NuxtImg
                class="object-contain h-10 block dark:hidden"
                format="webp"
                alt="minab"
                src="/images/home/logo_main.png"
                :placeholder="
                  img(`/images/home/logo_main.png`, { blur: 2, h: 200 })
                "
              />
              <NuxtImg
                src="/images/home/minab-logo-darkmood.png"
                alt="minab"
                format="webp"
                class="hidden dark:block object-contain h-10"
                :placeholder="
                  img(`/images/home/minab-logo-darkmood.png`, {
                    blur: 2,
                    h: 200,
                  })
                "
              />
            </NuxtLink>
          </div>
        </div>
        <div class="md:flex hidden gap-x-10 items-center">
          <div class="hidden md:block">
            <div class="ml-4 flex items-center gap-x-5 lg:gap-x-10">
              <div
                v-for="(head_navs, index) in head_nav"
                :key="index"
                class="flex items-baseline lg:gap-x-10 gap-x-5"
              >
                <NuxtLink
                  :to="{ path: '/', hash: head_navs.to }"
                  class="text-lg font-body text-primary-lite dark:text-dark-header hover:scale-105 duration-150 hover:text-primary"
                  :class="[
                    'text-lg font-body hover:scale-105 duration-150',
                    isActive(head_navs.to)
                      ? 'active dark:text-white font-bold'
                      : 'dark:text-minab-dark-header',
                  ]"
                  ><span>{{ head_navs.title }} </span></NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center self-center">
            <ThemeSwitcher class="flex justify-center items-center" />
          </div>
        </div>
        <div class="flex md:hidden -mr-2 gap-x-10 items-center">
          <ThemeSwitcher class="flex justify-center items-center" />
          <button
            @click="click()"
            class="bg-primary inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-lite focus:ring-white"
          >
            <span class="sr-only">Open main menu</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="block h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showMenu" class="fixed w-full z-10">
    <div
      class="flex flex-row-reverse justify-between md:hidden bg-primary-lite bg-opacity-80"
    >
      <button @click="click()" class="flex justify-end px-5 py-5">
        <Icon
          class="w-10 h-10 text-primary-minab-2"
          name="carbon:close-filled"
        ></Icon>
      </button>
      <div
        class="flex flex-col gap-y-5 h-screen py-10 justify-start w-[60%] bg-primary overflow-hidden items-center gap-x-5 lg:gap-x-10"
      >
        <div
          v-for="(head_navs, index) in head_nav"
          :key="index"
          class="flex items-baseline lg:gap-x-10 gap-x-5"
        >
          <NuxtLink
            :to="{ path: '/', hash: head_navs.to }"
            @click="click()"
            class="text-lg font-body text-primary-lite dark:text-dark-header hover:scale-125 duration-150 hover:text-primary-lite-2"
            :class="[
              'text-lg font-body hover:scale-105 duration-150',
              isActive(head_navs.to)
                ? 'active dark:text-white  text-white font-bold '
                : 'dark:text-minab-dark-header text-white',
            ]"
            ><span>{{ head_navs.title }} </span></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  html {
    scroll-behavior: smooth;
    transition: all 0.3s ease-in-out;
  }
</style>
