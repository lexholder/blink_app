import places from 'places.js';

const initAutocomplete = () => {
  const cityInput = document.getElementById('city-input');
  if (cityInput) {
    const cityAutocomplete = places({ type: 'city', container: cityInput });
    if (cityInput.classList.contains('update')){
      cityAutocomplete.on('change', function(e) {
        const data = { 'city': cityInput.value}
        fetch('/settings/update-city', {
          method: 'PATCH',
          body: JSON.stringify(data)
        });
      });
    }
  }
};

export { initAutocomplete };
