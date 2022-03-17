var map = L.map('map').setView([-34.59157417453913, -58.44770924768198], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



fetch('api/bicicletas')
    .then(response => response.json())
    .then(data => data.bicicletas.forEach(bicicleta => {
        L.marker(bicicleta.ubicacion, { title: bicicleta.id }).addTo(map);
    }))
