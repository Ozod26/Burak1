// TASK W
/*
Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
*/
function chunkArray(arr: number[], size: number) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  console.log(result);
}

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

// TASK P:
/*
Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/
// function objectToArray(input: any) {
//   let newArray = [];
//   for (let key in input) {
//     newArray.push(key, input[key]);
//   }
//   console.log(newArray);
// }

// objectToArray({ a: 10, b: 20 });

// TASK O:
/*

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.

*/
// function calculateSumOfNumbers(input: (number | object | boolean | string)[]) {
//   let allNumbers: number = 0;
//   const onlyNumber = input.forEach((ele) => {
//     if (typeof ele === "number") {
//       allNumbers += ele;
//     }
//   });
//   console.log(allNumbers);
// }

// calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
/**TASK L:

So'zlarni ketma - ketligini buzmasdan har bir so'zni
alohida teskarisiga o'girib beradigan fucntion tuzing.
Funtion yagona string qabul qilsin

MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda */

// function reverseSentence(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding!"));

/*
TASK K:
Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1

Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
bo'lganligi uchun '1'ni qaytarmoqda
 */
// function countVowels(input: string): number {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let char of input) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("string"));

/*************************************/

/** TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda */

// function findLongestWord(sentence: string): string {
//   const words = sentence.match(/\b\w+\b/g) || [];

//   let longestWord = words.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
//   }, "");

//   return longestWord;
// }

// const result = findLongestWord("I came from Uzbekistan!");
// console.log(result);

/*************************************/
/*************************************/

/** TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida
4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda. */

// function majorityElement(arr: number[]): number | null {
//   const countMap: { [key: number]: number } = {};
//   let majorityElem: number | null = null;
//   let maxCount = 0;

//   for (const num of arr) {
//     if (countMap[num] === undefined) {
//       countMap[num] = 1;
//     } else {
//       countMap[num]++;
//     }

//     if (countMap[num] > maxCount) {
//       maxCount = countMap[num];
//       majorityElem = num;
//     }
//   }

//   return majorityElem;
// }

// const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log(result);

/*************************************/
/*************************************/

/** H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

*/

// function getDigits(input: string): string {
//   return input.replace(/\D/g, "");
// }

// console.log(getDigits("m14i1t"));

/** H-TASK: 
shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"
 */

// function getPositive(arr: number[]): string {
//   const positiveNumbers = arr
//     .filter((num) => num > 0)
//     .map((num) => num.toString());

//   return positiveNumbers.join("");
// }

// const result = getPositive([1, -4, 2]);
// console.log(result);

/*************************************/
/*************************************/

/**G-TASK: 
Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
 */

// function getHighestIndex(numbers: string | any[]) {
//   let max = numbers[0];
//   let maxIndex = 0;

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }
// const result = getHighestIndex([5, 21, 12, 21, 8]);
// console.log(result);

/*************************************/
/*************************************/
/*************************************/
/*************************************/

/* Projcet Standards:
  - Logging standards
  - Naming standards
      function: method, weriable =>  CAMEL  => goHome
      class => PASCAL                       => MemberService
      folder => KEBAB                   
      css    => SNACE                       => button_style 

- ERROR handling 
*/

/*************************************/
/*************************************/

/*
REQUEST:
Traditional API
Rest API
GraphQL API


******************************************
******************************************

Frontend Development:
Traditional FD => BSSR (Admin)  => EJS
Modern FD   => SPA (User's aplication) => REACT  


******************************************
******************************************

Cookies:
request join
self destroy


******************************************
****************************************** 


Validation:

Frontend validation = Malumotlarni togri kirtishni tekshiradi
Pipe validation??   = 
Backend validation
Database validation


*/
