// Import necessary Leaflet modules
import L from 'leaflet';

// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker
const marker = L.marker([51.505, -0.09]).addTo(map).bindPopup('Hello, I am a marker!');
