var API_DB = './data.json';
var XHRs = [];
var locations = null;
var API_STYLE = './style.json';
var styles = null;

function loadInitialData(){
  XHRs.push($.getJSON(API_DB),function(json){
      locations = json;
  })
  XHRs.push($.getJSON(API_STYLE),function(json){
    styles = json;
})
}
async function initMap() {
  loadInitialData();
    // Create the map.
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 52.632469, lng: -1.689423},
    });
  
    // Load the stores GeoJSON onto the map.

    //map.data.loadGeoJson('package.json', {idPropertyName: 'storeid'});
    
    const apiKey = 'AIzaSyB1saUjtFLYEus1v9oNEqN1zyJ5S5j9OSs';
    const infoWindow = new google.maps.InfoWindow();
  
    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
      const category = event.feature.getProperty('category');
      const name = event.feature.getProperty('name');
      const description = event.feature.getProperty('description');
      const hours = event.feature.getProperty('hours');
      const phone = event.feature.getProperty('phone');
      const position = event.feature.getGeometry().get();
      const content = `
        <h2>${name}</h2><p>${description}</p>
        <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
      `;
  
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
      infoWindow.open(map);
    });
  }