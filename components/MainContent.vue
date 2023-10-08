<template>
  <main class="flex-grow">
    <div style="height: 70vh;"></div>
    <LMap
        ref="map"
        :zoom="zoom"
        :center="[47.21322, -1.559482]"
    >
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
  />
</LMap>
    <div class="bg-white p-6" style="height: 30vh;">
      <div class="h-full flex justify-center items-center">
        <input type="text" placeholder="Enter location..." class="border rounded-l px-4 py-2 w-1/2">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r">Search</button>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: "MainContent",
  mounted() {
    // const map = Leaflet.map(this.$refs.map).setView([51.505, -0.09], 13);
    // Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
  }
};
</script>
