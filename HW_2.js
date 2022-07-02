// JS. HW_2

// Напишите валидационный скрипт, используя функции 

//  1. Скрипт должен на вход принимать строку
//  2. После проверки строки выводить в консоль сообщение,
//     где будет конкретно написано, что не так вo введённой строке
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

const check_str = function(str) {
    if (str.length == 0) {console.log("Строка не должна быть пустой")}
    if (str.length < 5) {console.log("В строке должно быть минимум 5 символов")}        
    if (str.length > 64) {console.log("В строке должно быть максимум 64 символа")}
    if (!/[a-zа-яё]/i.test(str)) {console.log("В строке должны быть буквы")}
    if (!/[A-ZА-ЯЁ]/.test(str)) {console.log("В строке должна быть хотя бы одна буква в верхнем регистре")}
    if (!/[0-9]/.test(str)) {console.log("В строке должна быть хотя бы одна цифра")}
    if (!/@/.test(str)){console.log("В строке должна быть хотя бы одна @")}
    if (str.length !== 0 && str.length >= 5 && str.length <= 64 && /[a-zа-яё]/i.test(str) 
        && /[A-ZА-ЯЁ]/.test(str) && /[0-9]/.test(str) && /@/.test(str)) 
        {console.log("Корректный ввод строки")}
}


check_str("")
check_str("7dT")
check_str("reyresytrdutrdcutrdvumpoiupoiugfoilsaojykutyrfsdvcdzgresyrewxyrew")
check_str("134895")
check_str("ewqewqweq")
check_str("GFDlkjiu")
check_str("987fdsOYUT")
check_str("9@@ёД123@")





