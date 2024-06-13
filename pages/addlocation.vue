<template>
  <h1 class="my-8 text-center text-3xl font-bold uppercase text-black">
    Add a new location
  </h1>
  <div class="mx-auto w-2/3 space-y-4 border-2 border-black p-12">
    <p class="mx-auto w-2/3 text-balanced text-center">
      Start typing the name of the establishment and chose the one from the list
      <span class="text-balanced block">- the rest of the information will be filled out automatically.</span>
    </p>
    <form id="new-location-form" class="mx-auto flex w-3/4 flex-col space-y-6">
      <div class="mx-auto flex w-full flex-col space-y-2">
        <input
          type="text"
          name="name"
          :placeholder="capitalizeFirstLetter('name of establishment')"
          id="name"
          class="pointer-events-auto border-b-4 outline-none bg-gray-500/10 p-4 text-black"
        />
        <input
          type="text"
          name="street"
          placeholder="street"
          id="street"
          class="p-4 capitalize text-black"
          disabled
        />
      </div>
      <div class="flex space-x-4">
        <input
          type="text"
          name="postalcode"
          placeholder="postal code"
          id="postalCode"
          class="w-2/5 p-4 capitalize text-black"
          disabled
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          id="city"
          class="w-3/5 p-4 capitalize text-black"
          disabled
        />
      </div>
      <div class="flex space-x-4">
        <input
          type="text"
          name="latitude"
          placeholder="latitude"
          id="lat"
          class="w-1/2 p-4 capitalize text-black"
          disabled
        />
        <input
          type="text"
          name="longitude"
          placeholder="longitude"
          id="lng"
          class="w-1/2 p-4 capitalize text-black"
          disabled
        />
      </div>
      <p class="text-center text-2xl uppercase text-black">
        What amenities exist? Click all that apply
      </p>
      <div class="mt-12 flex justify-between">
        <label htmlFor="changeroom">
          <input
            type="checkbox"
            :value="checked"
            name="changeroom"
            id="changeroom"
            @change="toggleIcon('changeroom')"
          />
          <img
            :src="
              selectedItems.includes('changeroom')
                ? '../icons/changeroom_checked.svg'
                : '../icons/changeroom.svg'
            "
            class="mx-auto h-12 max-h-16 cursor-pointer"
            alt="changeroom"
          />
          <p>Changeroom</p>
        </label>

        <label htmlFor="duck">
          <input
            type="checkbox"
            value="duck"
            name="duck"
            id="duck"
            @change="toggleIcon('duck')"
          />
          <img
            :src="
              selectedItems.includes('duck')
                ? '../icons/duck_checked.svg'
                : '../icons/duck.svg'
            "
            class="mx-auto h-12 max-h-16 cursor-pointer"
            alt="duck"
          />
          <p>Toys</p>
        </label>
        <label htmlFor="literature">
          <input
            type="checkbox"
            value="literature"
            name="literature"
            id="literature"
            @change="toggleIcon('literature')"
          />
          <img
            :src="
              selectedItems.includes('literature')
                ? '../icons/literature_checked.svg'
                : '../icons/literature.svg'
            "
            class="mx-auto h-12 max-h-16 cursor-pointer"
            alt="literature"
          />
          <p>Books</p>
        </label>
        <label htmlFor="playground">
          <input
            type="checkbox"
            value="playground"
            name="playground"
            id="playground"
            @change="toggleIcon('playground')"
          />
          <img
            :src="
              selectedItems.includes('playground')
                ? '../icons/playground_checked.svg'
                : '../icons/playground.svg'
            "
            class="mx-auto h-12 max-h-16 cursor-pointer"
            alt="playground"
          />
          <p>Playground</p>
        </label>
        <label htmlFor="playoutside">
          <input
            type="checkbox"
            value="playoutside"
            name="playoutside"
            id="playoutside"
            @change="toggleIcon('playoutside')"
          />
          <img
            :src="
              selectedItems.includes('playoutside')
                ? '../icons/playoutside_checked.svg'
                : '../icons/playoutside.svg'
            "
            class="mx-auto h-12 max-h-16 cursor-pointer"
            alt="playoutside"
          />
          <p>Garden</p>
        </label>
      </div>

      <button
        @click.prevent="addNewLocation"
        class="w-full rounded-full border-2 px-2 py-4 uppercase"
        type="submit"
      >
        Submit new location
      </button>
    </form>
  </div>
</template>
<script>
import { ref, onMounted, onUpdated } from "vue";
import autocomplete from "../components/autoComplete";
import changeroom from "@/icons/changeroom.svg";
import changeroom_checked from "@/public/icons/changeroom_checked.svg";

export default {
  setup() {
    let checked = ref(false);
    const selectedItems = ref([]);
    const addNewLocation = () => {
      console.log("add new location");
    };

    const toggleIcon = (itemName) => {
      checked.value = !checked.value;
      const index = selectedItems.value.indexOf(itemName);
      if (index !== -1) {
        selectedItems.value.splice(index, 1);
      } else {
        selectedItems.value.push(itemName);
      }
    };

    const capitalizeFirstLetter = (str) => {
        const words = str.split(" ");
        if (words.length > 1) {
            words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
            }
        return words.join(" ");
    }

    const initAutocomplete = () => {
      autocomplete(
        document.getElementById("name"),
        document.getElementById("street"),
        document.getElementById("postalCode"),
        document.getElementById("city"),
        document.getElementById("lat"),
        document.getElementById("lng"),
      );
    };

    onMounted(() => {
      initAutocomplete();
    });

    return {
      addNewLocation,
      toggleIcon,
      checked,
      changeroom,
      changeroom_checked,
      selectedItems,
      capitalizeFirstLetter,
    };
  },
};
</script>
<style scoped>
/* Custom checkbox */
input[type="checkbox"] {
  display: none;
  -webkit-appearance: none;
}

input[type="checkbox"] ~ .new-location-icons-text {
  border-bottom: 5px solid transparent;
  margin: auto;
}

input[type="checkbox"]:checked ~ .new-location-icons-text {
  position: relative;
  width: 100px;
  border-bottom: 3px solid #c1cad6;
}
</style>
