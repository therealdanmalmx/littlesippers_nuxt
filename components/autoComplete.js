const autocomplete = (input) => {
    if (!input) {
      return;
    }
    const dropdown = new google.maps.places.Autocomplete(input);
  
    dropdown.addListener("place_changed", () => {
      const place = dropdown.getPlace();
      console.log({place});
      input.value = place.name;

    });
    input.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  };
  
  export default autocomplete;
  