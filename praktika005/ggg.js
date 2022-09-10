let Name = 'Вася';
function showMessage() {
 Name = "Петя"; // (1) изменяем значение внешней переменной
let message = 'Привет, ' + Name;
 console.log(message);
}
console.log( Name ); // Вася перед вызовом функции
showMessage();
console.log( Name ); // Петя, значение внешней переменной было изменено функцией