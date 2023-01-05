/* eslint-disable*/

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGlseWxvdmUiLCJhIjoiY2xjaWhpcDZvM3gzbjNwbDc1YjVkbHUyNiJ9.Om4YqSuqqzGaLkVgXJuOVg';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/hilylove/clcihmsjk003814o2v2znov4l', // style URL
  scrollZoom: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: { top: 200, bottom: 100, left: 100, right: 100 }
});
