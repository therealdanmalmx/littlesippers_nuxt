const autocomplete = (
  inputName,
  inputStreet,
  inputPostalCode,
  inputCity,
  inputLat,
  inputLng,
) => {
  if (!inputName) {
    return;
  }
  const dropdown = new google.maps.places.Autocomplete(inputName);

  dropdown.addListener("place_changed", () => {
      const place = dropdown.getPlace();
      const streetAddress = place.formatted_address.split(",")[0].trim();
      const postalCode = !place.address_components[6] ? place.address_components[5].long_name : place.address_components[6].long_name.split(" ") ? place.address_components[6].long_name : place.address_components[5].long_name;
      inputName.value = place.name;
      inputStreet.value = streetAddress;
      inputPostalCode.value = postalCode;
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
