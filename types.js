// Булевые значения
var isFetching = true;
var isLoading = false;
var int = 43;
// int = '' // оштбка - Type 'string' is not assignable to type 'number'.
var float = 2.4; // один и тот же тип у целых и дробных чисел
var numberArray1 = [1, 2, 3]; // массивы в ts
var numberArray2 = [3, 2, 1]; // альтернативная запись
var words = ['hello', 'world'];
// Tuple (для разных типов в массиве)
var contact = ["Avgustin", 38099999999, false];
// Any
var variable = 32;
variable = 'asdasd';
// ===
function sayMyName(name) {
    console.log(name);
}
sayMyName('Heisenberg');
