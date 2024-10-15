<script setup>
  const partners = ref([
    {
      name: "MLS",
      src: "/images/home/partners/MLS.png",
    },
    {
      name: "GIZ",
      src: "/images/home/partners/giz.png",
    },
    {
      name: "MC-LOGO",
      src: "/images/home/partners/mc-logo.png",
    },

    {
      name: "ICAS",
      src: "/images/home/partners/icas.png",
    },
    {
      name: "WORLD_BANK",
      src: "/images/home/partners/world_bank.png",
    },

    {
      name: "ABC",
      src: "/images/home/partners/abc.png",
    },
    {
      name: "UKAID",
      src: "/images/home/partners/UKAID.png",
    },
    {
      name: "OXFORD",
      src: "/images/home/partners/oxford.png",
    },

    {
      name: "EIC",
      src: "/images/home/partners/EIC.png",
    },
    {
      name: "SAVECGILD",
      src: "/images/home/partners/savechild.png",
    },
    {
      name: "DAI",
      src: "/images/home/partners/DAI.png",
    },
    {
      name: "MASTERCARD",
      src: "/images/home/partners/mastercard.png",
    },
    {
      name: "SNV",
      src: "/images/home/partners/snv.png",
    },
    {
      name: "CONSULT",
      src: "/images/home/partners/consult.png",
    },
    {
      name: "USAID",
      src: "/images/home/partners/USAID.png",
    },
    {
      name: "DFID",
      src: "/images/home/partners/DFID.png",
    },
    {
      name: "BMZ",
      src: "/images/home/partners/BMZ.png",
    },
    {
      name: "HPR",
      src: "/images/home/partners/HPR.png",
    },
    {
      name: "SIDA",
      src: "/images/home/partners/sida.png",
    },
  ]);
  const img = useImage();
</script>
<template>
  <div id="partners" class="lg:px-24 md:px-10 px-5 w-full">
    <div class="w-full h-full lg:py-32">
      <div class="w-full pb-2">
        <div
          class="font-bold text-black lg:text-6xl text-4xl flex justify-center dark:text-secondary-navbar"
        >
          Partners &amp; Clients
        </div>
      </div>
      <div class="pt-24">
        <div
          class="pb-5 flex lg:gap-x-20 max-xl:gap-x-10 lg:gap-y-14 gap-y-5 flex-wrap items-center justify-center w-full"
        >
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="hover:grayscale-0 w-48 max-xl:w-20 h-20 dark:hover:invert-0 dark:invert grayscale cursor-pointer duration-200"
          >
            <NuxtImg
              :src="partner.src"
              :alt="partner.name"
              format="webp"
              :placeholder="img(partner.src, { blur: 2 })"
              class="object-contain lg:full lg:w-full h-20 w-20"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
