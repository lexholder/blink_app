const initAutocomplete = () => {
  const cityInput = document.getElementById('city-input');
  if (cityInput) {
    places({ container: cityInput });
  }
};

export { initAutocomplete };