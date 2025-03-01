// 1. Написать функцию возведения числа в степень.

// const numberPower = (numb, power) => {
//   if (power === 1) {
//     return numb;
//   } else {
//     return numb * numberPower(numb, power - 1);
//   }
// };

const numberPower = (numb, power) =>
  (power === 1 && numb) || numb * numberPower(numb, power - 1);

// console.log(numberPower(2, 4));

// 2. Написать функцию поиска наибольшего общего делителя.

const greatestCommonDivisor = (numbFirst, numbSecond, count = numbSecond) => {
  if (numbFirst % count === 0 && numbSecond % count === 0) {
    return count;
  } else {
    return greatestCommonDivisor(numbFirst, numbSecond, count - 1);
  }
};

// console.log(greatestCommonDivisor(7, 12));

// 3. Написать функцию для поиска максимальной цифры в числе

const upperDigitsNumb = (numb, maxNum = 0) => {
  let newNumb = numb.toString();

  if (newNumb.slice(-1) === newNumb) {
    return maxNum;
  } else {
    if (maxNum < newNumb.slice(-1)) {
      maxNum = newNumb.slice(-1);
    }

    return upperDigitsNumb(newNumb.slice(0, -1), maxNum);
  }
};

// console.log(upperDigitsNumb(1543));

// 4. Написать функцию, которая определяет простое ли переданное число.

const primeNumb = (numb, count = 0, dividers = 0) => {
  if (numb < 2) {
    return "не простое число";
  }
  if (numb === count) {
    if (dividers > 2) {
      return "не простое число";
    } else {
      return "простое число";
    }
  } else {
    if (numb % count === 0) {
      dividers = dividers + 1;
    }

    return primeNumb(numb, count + 1, dividers);
  }
};

// ------------------------------------------------

function isPrimeNum(n, i = 2) {
  if (n < 2) return false;

  if (i === n) return true;

  if (n % i === 0) return false;

  return isPrimeNum(n, i + 1);
}

// console.log(isPrimeNum(11));

// TASK 4
// const primeNumber = function (number, counter) {
//   counter -= 1;
//   if (counter === 1) return true;
//   return number % counter !== 0 && primeNumber(number, counter);
// };
// console.log(primeNumber(11, 11));

// console.log(primeNumb(7))

// -----------------------------------------------------------------

// 5. Напиши функцию checkAge(age, callback), которая принимает возраст и
// функцию обратного вызова.

const checkAge = (age, callback) => {
  console.log(callback(age));
};

// checkAge(17, (age) => (age >= 18 ? "Доступ разрешён" : "Доступ запрещён"));

// 6. Проверка на палиндром

const revStr = (str) => str && str.slice(-1) + revStr(str.slice(0, -1));

const palindromeCheck = (str) =>
  revStr(str) === str ? "Палиндром" : "НЕ Палиндром";

// console.log(palindromeCheck("madam"));

// 7.. Написать функцию, которая возвращает число Фибоначчи по переданному
// порядковому номеру. Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том,
// что каждое число равно сумме двух предыдущих чисел. Например: порядковый номер
// 3 – число 2, порядковый номер 6 – число 8.

// count - порядковый номер
// firstNumb - первое число сложения
// secondNumb - второе число сложения

const fibonacci = (count, firstNumb = 1, secondNumb = 1) => {
  let newNumb = firstNumb + secondNumb;

  if (count === 1) return firstNumb;

  return firstNumb + " " + fibonacci(count - 1, secondNumb, newNumb);
};

// console.log(fibonacci(6));
