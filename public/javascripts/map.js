var map = L.map('map').setView([-34.59157417453913, -58.44770924768198], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([-34.59157417453913, -58.44770924768198]).addTo(map);
L.marker([-34.58157417453913, -58.41770924768198]).addTo(map);
L.marker([-34.59017380558375, -58.445955094990346]).addTo(map);
L.marker([-34.59688566335241, -58.43720172012423]).addTo(map);