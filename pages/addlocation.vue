<template>
    <div class="new-location">
        <h1 class="new-location-heading">Add a new location</h1>
        <form id="new-location-form">
            <input type="text" name="name" placeholder="name of establishment" id="name"/>
            <input type="text" name="street" placeholder="street" id="street" />
            <div class="new-location-city">
                <input type="text" name="postalcode" placeholder="postal code" id="postalCode"/>
                <input type="text" name="city" placeholder="city" id="city" />
            </div>
            <div class="new-location-latlng">
                <input type="text" name="latitude" placeholder="latitude" id="lat"/>
                <input type="text" name="longitude" placeholder="longitude" id="lng" />
            </div>
            <p class="new-location-icons-heading">What amenities exist? Click all that apply</p>
            <div class="new-location-icons">
                <label class="new-location-icons-img" htmlFor="changeroom">
                    <input type="checkbox" value='changeroom' name="changeroom" id="changeroom" />
                    <img class="new-location-icon" src="/icons/changeroom.png" alt="changeroom" />
                    <p class="new-location-icons-text">Changeroom</p>
                    <span class="new-location-icons-underline"></span>
                </label>
                <label class="new-location-icons-img" htmlFor="duck">
                    <input type="checkbox" value='duck' name="duck" id="duck" />
                    <img class="new-location-icon" src="/icons/duck.png" alt="duck" />
                    <p class="new-location-icons-text">Toys</p>
                </label>
                <label class="new-location-icons-img" htmlFor="literature">
                    <input type="checkbox" value='literature' name="literature" id="literature" />
                    <img class="new-location-icon" src="/icons/literature.png" alt="literature" />
                    <p class="new-location-icons-text">Books</p>
                </label>
                <label class="new-location-icons-img" htmlFor="playground">
                    <input type="checkbox" value='playground' name="playground" id="playground" />
                    <img class="new-location-icon" src="/icons/playground.png" alt="playground" />
                    <p class="new-location-icons-text">Playground</p>
                </label>
                <label class="new-location-icons-img" htmlFor="playoutside">
                    <input type="checkbox" value='playoutside' name="playoutside" id="playoutside" />
                    <img class="new-location-icon" src="/icons/playoutside.png" alt="playoutside" />
                    <p class="new-location-icons-text">Garden</p>
                </label>
            </div>

            <button @click.prevent="addNewLocation" class="new-location-button" type="submit">
                Submit new location 
            </button>
        </form>
    </div>
</template>
<script>
import autocomplete from '../components/autoComplete';

export default {

    setup() {
        const addNewLocation = () => {
            console.log('add new location')
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
            addNewLocation
        }
    }
    
}
</script>
<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #6DB1BF;
}
.new-location {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 20px;
    width: 50%;
}

#new-location-form {
    display: flex;
    flex-direction: column;
}

input {
    margin-bottom: 1rem;
    background-color: #C1CAD6;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    outline: none;
    color: #FFF;
}

input[type="text"]::placeholder {
    text-transform: uppercase;
    color: #FFF;
}

.new-location-city,
.new-location-latlng {
    display: flex;
    justify-content: space-between;
}

input[name="postalcode"] {
    width: 34%
}

input[name="city"] {
    width: 64%
}

input[name="latitude"],
input[name="longitude"] {
    width: 49%;
}

.new-location-heading {
    text-align: center;
    text-transform: uppercase;
    padding: 1rem 0;
    color: #FFF;
}

.new-location-form {
    display: flex;
    flex-direction: column;
}

.new-location-icons {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.new-location-icons-heading {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: #EEE;
}

.new-location-icons-img {
    margin-top: 1.5rem;
    height: 100px;
    width: 100px;
    cursor: pointer;
}
.new-location-icon {
    cursor: pointer;
}

.new-location-icons-text {
    margin-top: 0.3rem;
    text-align: center;
    padding-bottom: 0.3rem;
}

div img:not(.footer-logo-img) {
    display: block;
    margin-top: 1.5rem;
    margin: 0 auto;
    max-height: 3.125rem;
    height: 2.8125rem;
}

.new-location-button {
    padding: 1rem 2rem;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    border-radius: 50px;
    color: #6DB1BF;
    background-color: #C1DDD8;
}

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