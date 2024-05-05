// 1.Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:

let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p class="text">About</p></div>', 
    '<div><p class="text">FAQ</p></div>', 
    '<div><p class="text">Contacts</p></div>' 
];

let newelems = [];

for (let i = 0; i < elems.length; i++) {
    let text = elems[i].split('>')[2].split('<')[0];
    newelems.push(text);
}

console.log(newelems);


//2.Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 

function initCap(array) {
    let capitalizedArray = [];
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedArray.push(capitalizedWord);
    }
    return capitalizedArray;
}

let words = ['стакан','молоко','табуретка','вода'];
let result = initCap(words);
console.log(result);


// 3. Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 



let names = [
    'Steven King',
    'Jonh Snow',
    'Oliver',
    'Neena Stich',
    'Grant Laster',
    'Persius Master',
    'Lest'
];

let full_names = [];

for (let i = 0; i < names.length; i++) {
    let nameParts = names[i].split(' ');
    let fullName = [];
if (nameParts[1]) {
    fullName.push(nameParts[0], nameParts[1]);
} else {
    fullName.push(nameParts[0], undefined);
}
    full_names.push(fullName);
}

console.log(full_names);