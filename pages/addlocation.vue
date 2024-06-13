<template>
    <h1 class="text-3xl font-bold uppercase text-center my-8 text-black">Add a new location</h1>
    <div class="p-12 border-2 border-black w-2/3 mx-auto space-y-4">
        <p class="text-balance w-2/3 text-center mx-auto">Start typing the name of the establishment and chose the one from the list <span class="text-balance block">- the rest of the information will be filled out automatically.</span></p>
        <form id="new-location-form" class="flex flex-col w-3/4 space-y-6 mx-auto">
            <div class="flex flex-col w-full mx-auto space-y-2">
                <input type="text" name="name" placeholder="name of establishment" id="name" class="capitalize text-black p-4 border-2 border-black" />
                <input type="text" name="street" placeholder="street" id="street" class="text-black capitalize p-4 border-2 border-black" />
            </div>
            <div class="flex space-x-4">
                <input type="text" name="postalcode" placeholder="postal code" id="postalCode" class="w-2/5 text-black capitalize p-4 border-2 border-black" />
                <input type="text" name="city" placeholder="city" id="city" class="w-3/5 text-black capitalize p-4 border-2 border-black" />
            </div>
            <div class="flex space-x-4">
                <input type="text" name="latitude" placeholder="latitude" id="lat" class="w-1/2 text-black uppercase p-4 border-2 border-black" />
                <input type="text" name="longitude" placeholder="longitude" id="lng" class="w-1/2 text-black uppercase p-4 border-2 border-black" />
            </div>
            <p class="text-black text-2xl text-center uppercase">What options exist? Click all that apply</p>
            <div class="flex justify-between mt-12">
                <label htmlFor="changeroom">
                    <input type="checkbox" :value="checked" name="changeroom" id="changeroom" @change="toggleIcon('changeroom')" />
                    <img :src="selectedItems.includes('changeroom') ? '../icons/changeroom_checked.svg' : '../icons/changeroom.svg'" class="max-h-16 h-12 mx-auto cursor-pointer" alt="changeroom"  />
                    <p :style="{ color: selectedItems.includes('changeroom') ? '#000000' : '#CCCCCC' }">Changeroom</p>
                </label>


                <label htmlFor="duck">
                    <input type="checkbox" value='duck' name="duck" id="duck" @change="toggleIcon('duck')"/>
                    <img :src="selectedItems.includes('duck') ? '../icons/duck_checked.svg' : '../icons/duck.svg'" class="max-h-16 h-12 mx-auto cursor-pointer" alt="duck" />
                    <p :style="{ color: selectedItems.includes('duck') ? '#000000' : '#CCCCCC' }">Toys</p>
                </label>
                <label htmlFor="literature">
                    <input type="checkbox" value='literature' name="literature" id="literature" @change="toggleIcon('literature')" />
                    <img :src="selectedItems.includes('literature') ? '../icons/literature_checked.svg' : '../icons/literature.svg'" class="max-h-16 h-12 mx-auto cursor-pointer" alt="literature" />
                    <p :style="{ color: selectedItems.includes('literature') ? '#000000' : '#CCCCCC' }">Books</p>
                </label>
                <label htmlFor="playground">
                    <input type="checkbox" value='playground' name="playground" id="playground" @change="toggleIcon('playground')" />
                    <img :src="selectedItems.includes('playground') ? '../icons/playground_checked.svg' : '../icons/playground.svg'" class="max-h-16 h-12 mx-auto cursor-pointer" alt="playground" />
                    <p :style="{ color: selectedItems.includes('playground') ? '#000000' : '#CCCCCC' }">Playground</p>
                </label>
                <label htmlFor="playoutside">
                    <input type="checkbox" value='playoutside' name="playoutside" id="playoutside" @change="toggleIcon('playoutside')" />
                    <img :src="selectedItems.includes('playoutside') ? '../icons/playoutside_checked.svg' : '../icons/playoutside.svg'" class="max-h-16 h-12 mx-auto cursor-pointer" alt="playoutside" />
                    <p :style="{ color: selectedItems.includes('playoutside') ? '#000000' : '#CCCCCC' }">Garden</p>
                </label>
            </div>

            <button @click.prevent="addNewLocation" class="w-full px-2 py-4 border-2 uppercase rounded-full" type="submit">
                Submit new location 
            </button>
        </form>
    </div>
</template>
<script>
import { ref, onMounted, onUpdated } from 'vue'
import autocomplete from '../components/autoComplete';
import changeroom from '@/icons/changeroom.svg';
import changeroom_checked from '@/public/icons/changeroom_checked.svg';
import { list } from 'postcss';

export default {

    setup() {
        let checked = ref(false);
        const selectedItems = ref([]);

        const addNewLocation = () => {
            const name = document.getElementById('name').value;
            const street = document.getElementById('street').value;
            const postalCode = document.getElementById('postalCode').value;
            const city = document.getElementById('city').value;
            const lat = document.getElementById('lat').value;
            const lng = document.getElementById('lng').value;
            const listItems = selectedItems.value;

            console.log({
                name,
                street,
                postalCode,
                city,
                lat,
                lng,
                listItems
            })
            
            return {
                name,
                street,
                postalCode,
                city,
                lat,
                lng,
                listItems
            }          
        }

        const toggleIcon = (itemName) => {
            checked.value = !checked.value;
            const index = selectedItems.value.indexOf(itemName);
            if (index !== -1) {
                // Item is checked, remove it
                selectedItems.value.splice(index, 1);
            } else {
                // Item is unchecked, add it
                selectedItems.value.push(itemName);
            }
            console.log(selectedItems.value)
        }

        const initAutocomplete = () => {
          autocomplete(
                document.getElementById('name'),
                document.getElementById('street'),
                document.getElementById('postalCode'),
                document.getElementById('city'),
                document.getElementById('lat'),
                document.getElementById('lng'),
            );
        }

        onMounted(() => {
            initAutocomplete();
        })

        return {
            addNewLocation,
            toggleIcon,
            checked, 
            changeroom,
            selectedItems
        }
    }
    
}
</script>
<style scoped>

/* Custom checkbox */
input[type='checkbox'] {
    display: none;
    -webkit-appearance: none;
}

input[type='checkbox'] ~ .new-location-icons-text {
    border-bottom: 5px solid transparent;
    margin:  auto;
}

input[type='checkbox']:checked ~ .new-location-icons-text {
    position: relative;
    width: 100px;
    border-bottom: 3px solid #C1CAD6;
}
    
</style>