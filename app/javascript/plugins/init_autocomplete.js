import places from 'places.js';

const initAutocomplete = () => {
  const cityInput = document.getElementById('city-input');
  if (cityInput) {
    places({ type: 'city', container: cityInput });
  }
};

export { initAutocomplete };
