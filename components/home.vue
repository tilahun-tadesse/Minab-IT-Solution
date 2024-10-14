<script setup>
  const img = useImage();
  const heroPlaceholder = ref("/images/home/logo_main.png");
</script>
<template>
  <div
    id="home"
    class="bg-[url('/images/home/minab_back.png')] h-[570px] sm:h-full object-contain bg-cover relative"
  >
    <div class="h-screen justify-center">
      <div
        class="flex justify-center items-center w-full 2xl:pt-28 xl:pt-20 lg:pt-14 pt-10 group space-x-7"
      >
        <NuxtImg
          alt="Minab Logo"
          format="webp"
          :placeholder="img(heroPlaceholder, { blur: 2 })"
          src="/images/home/logo_main.png"
          class="object-contain 2zl:h-52 xl:h-48 lg:h-44 md:h-32 h-20"
        />
      </div>
      <div
        class="lg:w-7/12 md:w-11/12 w-full mx-auto justify-center items-center 2xl:pt-20 lg:pt-16 pt-10"
      >
        <div
          class="flex flex-col gap-y-20 justify-center items-center self-center"
        >
          <p
            class="font-bold w-[70%] leading-10 font-body text-white 2xl:text-6xl xl:text-4xl lg:text-3xl text-2xl text-center"
          >
            From the cloud to clients, we have all the
            <span
              class="bg-white ml-1 text-primary-lite px-1 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl text-center"
              >answers.</span
            >
          </p>

          <div class="bg-primary rounded-lg">
            <NuxtLink
              to="#contact"
              class="bg-primary font-bold text-white px-6 rounded-lg py-2.5 flex items-center gap-x-3 hover:scale-105 duration-200"
            >
              <span class="font-body text-lg">Let's discuss</span>
              <Icon class="font-bold text-lg" name="uiw:message"></Icon>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-24"></div>
    </div>
  </div>
</template>
