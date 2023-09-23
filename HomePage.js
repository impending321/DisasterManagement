if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition( (position) =>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position.coords.latitude, position.coords.longitude);
    const apiUrl= 'http://api.openweathermap.org/geo/1.0/reverse?lat=' + lat + '&lon=' + lon + '&limit='+0+'&appid='
    fetch(apiUrl)
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    const md = (data);
    const city = md[0].name;
    const country = md[0].state;
    console.log(data);
    console.log(city);
    console.log(country);
})
.catch(error => {
    console.error('Error fetching location data:', error);
});
});
} else {
  console.log("Geolocation is not supported by this browser.");
}
// JavaScript for Earthquake Alerts
function fetchEarthquakeAlerts() {
// Fetch recent earthquake alerts from an API or data source
// For demonstration, you can use sample data
const sampleAlerts = [
"Magnitude 5.0 earthquake in California",
"Magnitude 4.2 earthquake in Japan"
// Add more alerts as needed
];

function fetchData() {
    fetch("https://sachet.ndma.gov.in/cap_public_website/FetchAllAlertDetails")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Process and use the data here
        console.log(data[0].disaster_type);
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  fetchData();

// Get the alert-slider element
const alertSlider = document.getElementById("alert-slider");

// Function to add a new alert to the slider
function addAlert(alertText) {
const alertElement = document.createElement("div");
alertElement.classList.add("alert", "alert-dismissible", "fade", "show");
alertElement.innerHTML = `
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    ${alertText}
`;
alertSlider.appendChild(alertElement);
}

// Function to display alerts in a single line with a gap
function displayAlertsInLine() {
const alertsInLine = sampleAlerts.join(" • ");
addAlert(alertsInLine);
}

// Start displaying alerts
displayAlertsInLine();
}

// Fetch and display earthquake alerts when the page loads
fetchEarthquakeAlerts();
