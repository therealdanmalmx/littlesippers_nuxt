const autocomplete = (inputName, inputStreet, inputPostalCode, inputCity, inputLat, inputLng) => {
    if (!inputName) {
      return;
    }
    const dropdown = new google.maps.places.Autocomplete(inputName);
  
    dropdown.addListener("place_changed", () => {
      const place = dropdown.getPlace();
      console.log({place});
      inputName.value = place.name;
      inputStreet.value = place.formatted_address;
      inputPostalCode.value = place.address_components[5].long_name ||place.address_components[6].long_name;
      inputCity.value = place.address_components[3].long_name;
      inputLat.value = place.geometry.location.lat();
      inputLng.value = place.geometry.location.lng();


    });
    inputName.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  };
  
  export default autocomplete;
  