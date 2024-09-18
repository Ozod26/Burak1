/*
TASK K:
Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1

Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
bo'lganligi uchun '1'ni qaytarmoqda
 */
function countVowels(input: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of input) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("string"));

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

/* Projcet Standards:
  - Logging standards
  - Naming standards
      function: method, weriable =>  CAMEL  => goHome
      class => PASCAL                       => MemberService
      folder => KEBAB                   
      css    => SNACE                       => button_style 

  - ERROR handling 
*/

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
