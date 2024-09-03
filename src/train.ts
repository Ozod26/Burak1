/**G-TASK: 
Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
 */

function getHighestIndex(numbers: string | any[]) {
  let max = numbers[0];
  let maxIndex = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
const result = getHighestIndex([5, 21, 12, 21, 8]);
console.log(result);
