//загрузка карты и текста
import { getMap } from './Задание3.js'


document.getElementById('my_position').onclick = () => {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
  })
}

 functionsuccess({ coords }) {
  const { latitude, longitude } = coords
  const currentPosition = [latitude, longitude]

  getMap(currentPosition, 'You are here')
}

 functionerror({ message }) {
  console.log(message)
} 