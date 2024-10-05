// Initialize the map centered on the Philippines
const map = L.map('map').setView([12.8797, 121.7740], 6); // Philippines

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Array to store reported incidents
const incidents = [];

// Handle form submission for reporting an incident
document.getElementById('incident-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const severity = document.getElementById('severity').value;

    // Create incident object
    const incident = { title, description, latitude, longitude, severity };

    // Add incident to the array
    incidents.push(incident);

    // Add marker on the map for the incident
    L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`<b>${title}</b><br>${description}<br>Severity: ${severity}`)
        .openPopup();

    // Reset the form
    document.getElementById('incident-form').reset();
});

// Functionality for other modules like Resource Management, Task Management, Reporting can be added similarly.
