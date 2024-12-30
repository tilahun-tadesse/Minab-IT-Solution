<script setup>
  import { ref } from "vue";
  import {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip,
    LLayerGroup,
    LPopup,
    LControlScale,
  } from "@vue-leaflet/vue-leaflet";
  const zoom = ref();
  const map = ref(null);
  const h = ref(25);
  const w = ref(25);
  const iconSize = ref([w.value, h.value]);
</script>
<template>
  <div class="p-2">
    <LMap
      style="height: 350px; width: 100%"
      :zoom="100"
      :use-global-leaflet="false"
      :center="[8.98940754281959, 38.78601008199691]"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LLayerGroup>
        <LMarker :lat-lng="[8.98940754281959, 38.78601008199691]">
          <LIcon icon-url="/images/home/minab.svg" :icon-size="iconSize" />
          <LTooltip> Minab It Solutions </LTooltip>
          <LPopup
            ><div>
              <h1 class="text-lg text-primary-minab-2">Minab It Solutions</h1>
              <NuxtImg src="/images/home/minab_map.png" />
              <NuxtLink to="https://www.minabtech.com/">www.minab.com</NuxtLink>
            </div>
          </LPopup>
        </LMarker>
        <LControlScale
          position="topright"
          :imperial="true"
          :metric="false"
          updateWhenIdle="true"
        />
      </LLayerGroup>
    </LMap>
  </div>
</template>
