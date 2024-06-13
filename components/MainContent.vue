<template>
  <div style="height: 75vh">
    <LMap v-if="lat && lng" ref="map" :zoom="zoom" :center="changePosition">
      <LTileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution="&amp;copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
        layer-type="base"
        name="OpenStreetMap"
      />
    </LMap>
  </div>
  <div class="bg-white p-6" style="height: 25vh">
    <div class="flex items-center justify-center">
      <input
        type="text"
        placeholder="Enter location..."
        class="w-1/2 rounded-l border px-4 py-2"
        id="search"
      />
      <button
        class="rounded-r bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        @click="getAddress"
      >
        Search
      </button>
    </div>
    <router-link to="/addlocation">
      <div class="mt-8 flex w-full items-end justify-center">
        <button
          class="rounded-r bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Add a new location
        </button>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import autocomplete from "../components/autoComplete";

export default {
  setup() {
    const zoom = ref(12);
    const lat = ref(null);
    const lng = ref(null);

    const addressToLatLng = async (address) => {
      const apiKey =
        "AIzaSyC5oFI5rnbE39s-DlfwLSd0_x9Z3kWWGio" || process.env.MAP_KEY;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address,
      )}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log({ data });

        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          console.log({ location });
          lat.value = location.lat;
          lng.value = location.lng;
        } else {
          console.error("Geocoding failed:", data.status);
          return null;
        }
      } catch (error) {
        console.error("Error fetching geocode:", error);
        return null;
      }
    };

    const getAddress = () => {
      const address = document.getElementById("search").value;
      addressToLatLng(address);
    };

    const initAutocomplete = () => {
      autocomplete(document.getElementById("search"));
    };

    const getGeoPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          lat.value = position.coords.latitude;
          lng.value = position.coords.longitude;
        });
      } else {
        console.log("Geolocation is not supported");
      }
    };

    onMounted(() => {
      initAutocomplete();
      getGeoPosition();
    });

    const changePosition = computed(() => {
      return [lat.value || 0, lng.value || 0];
    });

    return {
      zoom,
      lat,
      lng,
      changePosition,
      addressToLatLng,
      getAddress,
    };
  },
};
</script>
