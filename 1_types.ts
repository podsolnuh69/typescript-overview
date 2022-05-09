// Булевые значения
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 43;
// int = '' // оштбка - Type 'string' is not assignable to type 'number'.
const float: number = 2.4; // один и тот же тип у целых и дробных чисел

const numberArray1: number[] = [1, 2, 3]; // массивы в ts
const numberArray2: Array<number> = [3, 2, 1]; // альтернативная запись

const words: Array<string> = ["hello", "world"];

// Tuple (для разных типов в массиве)
const contact: [string, number, boolean] = ["Avgustin", 38099999999, false];

// Any
let variable: any = 32;
variable = "asdasd";

// ===

function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Heisenberg");

// Never - тип для функций, которые пробрасывают ошибку
function throwError(message: string): never {
  throw new Error(message);
}

// ===
// Type - алиасы
type Login = string;
const login1: Login = "asdasdas";
// const login2: Login = 22; // ошибка

type Id = string | number;
const id1: Id = "22";
const id2: Id = 44;
