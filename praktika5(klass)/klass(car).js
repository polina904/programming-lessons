class Car { // объявление класса Car
  constructor() {
      // Базовая стоимость
      this.cost = function () {
          return 20000;
      }
  }
}
// Функция-декоратор 1 (свойство №1: автомобиль с кондеционером)
function carWithAC(car) { 
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = function () {
      return prevCost + 525; // переопределение стоимости автомобиля №1
    }
  }
  // Функция-декоратор 2 (свойство №2: автомобиль с автоматической коробкой передач)
  function carWithAutoTransmission(car) { 
      car.hasAutoTransmission = true;
      const prevCost = car.cost();
      car.cost = function () {
          return prevCost + 2150; // переопределение стоимости автомобиля №2
      }
  }
  // Функция-декоратор 3 (свойство №3: автомобиль с силовыми замками)
  function carWithPowerLocks(car) { 
      car.hasPowerLocks = true;
      const prevCost = car.cost();
      car.cost = function () {
          return prevCost + 500; // переопределение стоимости автомобиля №3
          
      }
  }
  const car = new Car(); // переопределение стоимости автомобиля со всеми свойствами 
console.log(car.cost());
carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);
// Нахождение стоимости автомобиля с учётом улучшений
console.log(car.cost()); // 20000(базовая стоимость)+525+2150+500=23175

