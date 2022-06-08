//подключение карты к серверу с сайта с 0 координатами
let map = null
let marker = null

export function getMap(position, tooltip) {

  if (map === null) {

    map = L.map('map').setView(position, 15)
  } else return
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)


  L.marker(position).addTo(map).bindPopup(tooltip).openPopup()
} 