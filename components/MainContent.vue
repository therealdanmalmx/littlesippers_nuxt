<template>
    <div style="height: 75vh;">
        <LMap
            ref="map"
            :zoom="zoom"
            :center="[57.721001, 12.94025]"
        >
            <LTileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution="&amp;copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
                layer-type="base"
                name="OpenStreetMap"
            />
        </LMap>
    </div>
    <div class="bg-white p-6" style="height: 25vh;">
        <div class="flex justify-center items-center">
            <input type="text" placeholder="Enter location..." class="border rounded-l px-4 py-2 w-1/2">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r">Search</button>
        </div>
        <div class="flex justify-center items-end w-full mt-8">
            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r">Add a new location</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(10)
</script>

<style>
body {
  margin: 0;
}
</style>