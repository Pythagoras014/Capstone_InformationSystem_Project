// Set up the map using Leaflet.js
const map = L.map('map').setView([12.8797, 121.7740], 6);  // Center the map on the Philippines

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const apiKey = '9f426bb71fb7859415c57ea06e638c3b';  // Replace this with your OpenWeatherMap API Key

// Example locations across the Philippines
const locations = [
  { name: 'Manila', lat: 14.5995, lng: 120.9842 },
  { name: 'Cebu', lat: 10.3157, lng: 123.8854 },
  { name: 'Davao', lat: 7.1907, lng: 125.4553 },
  { name: 'Baguio', lat: 16.4023, lng: 120.5960 },
  { name: 'Legazpi', lat: 13.1465, lng: 123.7354 }
];

// Fetch and display weather data for each location
locations.forEach(location => {
  getWeatherData(location.lat, location.lng, location.name);
});

// Function to fetch weather data from OpenWeatherMap and add markers to the map
async function getWeatherData(lat, lng, locationName) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const weatherDescription = data.weather[0].description;
      
      // Create a marker on the map for the location
      const marker = L.marker([lat, lng]).addTo(map);
      
      // Add a popup to display the weather information
      marker.bindPopup(`
        <b>${locationName}</b><br>
        Temperature: ${temp}°C<br>
        Humidity: ${humidity}%<br>
        Wind Speed: ${windSpeed} m/s<br>
        Weather: ${weatherDescription}
      `);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Weather layers from OpenWeatherMap (use your API key here)
        var precipLayer = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=ca8be7998ceb13b1ddcb47ff01d76805', {
            attribution: 'Weather data © OpenWeatherMap',
            maxZoom: 19,
        }).addTo(map);

        var cloudsLayer = L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=3791df67d996ef4b9e51f2d6f98e3fbb', {
            attribution: 'Weather data © OpenWeatherMap',
            maxZoom: 19,
        }).addTo(map);

        // Toggle between weather layers
        var baseLayers = {
            "Precipitation": precipLayer,
            "Clouds": cloudsLayer
        };

        
        L.control.layers(baseLayers).addTo(map);