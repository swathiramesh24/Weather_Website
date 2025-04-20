document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-input'); 

  if (!searchInput) {
    console.error("Search input element not found!");
    return;
  }

  searchBtn.addEventListener('click', function() {
    const cityName = searchInput.value.trim(); 

    if (cityName) {
      window.location.href = `weather.html?city=${encodeURIComponent(cityName)}`;
    } else {
      alert("Please enter a city name.");
    }
  });
});
