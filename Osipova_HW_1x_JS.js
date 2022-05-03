// HW_1* 
// Задания с разным количеством звездочек:)

// Задание 1*:

// Преобразовать написанный код (см. HW_1) в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_2 = 18;
let age_3 = 60;

const checkAge1 = function(age) {
    if (age < age_2) {
    console.log("You don't have access cause your age is " + age + ". It's less than " + age_2);
    } else if (age >= age_2 && age <= age_3) {
    console.log("Welcome!");
    } else if (age > age_3) {
    console.log("Keep calm and look Culture channel");
    } else {
    console.log("Technical work");
    }
}

checkAge1(17)
checkAge1(18)
checkAge1(61)
checkAge1("twenty")

console.log("-----------------------------")


// Задание 2*:

// Преобразовать Задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка

const checkAge2 = function(age) {
    if (typeof age == "number") {
        
        if (age < age_2) {
        console.log("You don't have access cause your age is " + age + ". It's less than " + age_2);
        } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
        } else {
        console.log("Welcome!");
        }

    } else {
      console.log('Error. Data type is not "number"');
    }
}

checkAge2(17)
checkAge2(18)
checkAge2(61)
checkAge2("twenty")
checkAge2("20")

console.log("-----------------------------")


// Задание 3**:

// Преобразовать Задание 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА)
// пропускалось, преобразовываясь в number

const checkAge3 = function(age) {
    if (+age) {
        
        if (age < age_2) {
        console.log("You don't have access cause your age is " + age + ". It's less than " + age_2);
        } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
        } else {
        console.log("Welcome!");
        }

    } else {
      console.log("Error. Value is not a number");
    }
}

checkAge3(20)
checkAge3("20")
checkAge3("20years")

console.log("-----------------------------")


// Задание 4***:

// Преобразовать Задание 3** таким образом, 
// чтобы возраст вводился, используя функцию prompt в привязанной верстке
// ======================================================================

// Для выполнения задания 4***:
// - создаем файл HW_1x-4.html
// - в нем "привязываем" HW_1x.js (см. срока 7)
// - открываем файл HW_1x-4.html в браузере
// - смотрим вывод в Console (F12)

const checkAge = function(age) {
  if (+age) {
      
      if (age < age_2) {
      console.log("You don't have access cause your age is " + age + ". It's less than " + age_2);
      } else if (age > age_3) {
      console.log("Keep calm and look Culture channel");
      } else {
      console.log("Welcome!");
      }

  } else {
    console.log("Error. Value is not a number");
  }
}

let agePrompt = prompt('Enter age')
checkAge(agePrompt)
    















