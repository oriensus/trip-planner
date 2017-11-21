const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1Ijoiamx1cmlhIiwiYSI6ImNqYTl3YmhpaTBsaTcyd3E5anl5ejc1NHoifQ.Wdl8hoLAGP0HMqs2Vk4o4w';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 13,
  style: 'mapbox://styles/mapbox/streets-v10'
});

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);
