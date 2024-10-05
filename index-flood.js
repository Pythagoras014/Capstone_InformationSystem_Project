document.getElementById('get-flood-watch').addEventListener('click', function() {
    const region = document.getElementById('region').value;

    getFloodWatch(region);
});

function getFloodWatch(region) {
    // Replace with the actual API endpoint for flood watch alerts
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={'9f426bb71fb7859415c57ea06e638c3b'}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const floodList = document.getElementById('flood-list');
            floodList.innerHTML = ''; // Clear previous results
            data.forEach(alert => {
                const listItem = document.createElement('li');
                listItem.textContent = `Status: ${alert.status} - Advisory: ${alert.advisory}`;
                floodList.appendChild(listItem);
            });
            document.getElementById('flood-info').style.display = 'block';
        })
        .catch(error => {
            alert('Error fetching flood watch data: ' + error.message);
            console.log(error);
        });
}
