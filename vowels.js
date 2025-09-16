// You are tasked with implementing a countVowels function that takes a string and
// returns the number of vowels (a, e, i, o, u) in the string.
// ● Red Phase:
//  ○ Write a failing test case for the countVowels function. Describe what
// behavior you want to test and why the test is expected to fail initially.
//  ○ Document what you believe the expected output should be for various
// inputs (e.g., "hello", "world", "").
//   ○ Write down why starting with a failing test case clarifies the function's
// requirements.
// ● Green Phase:
//   ○ Brainstorm the simplest code that could make the test pass.
// Document your implementation ideas, focusing only on meeting the
// test's expectations.
// 1.
// ○ Reflect on why it's important to prioritize functionality over
// optimization in this step.
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// function countVowels(string){
//     let count = 0;
//     for(letter of string){
//         if(vowels.includes(letter)){
//             count += 1;
//         }
//     };
//     return count;
// };
// console.log(countVowels("apple"));

// ● Refactor Phase:
//  Once the test passes, identify ways to improve the code's readability,
// efficiency, or maintainability. Propose specific refactoring steps and
// explain how they improve the implementation.
// ○ Reflect on why this step is critical for long-term project success.
function countVowels(string){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;
    let normalizedWord = string.toLowerCase().trim()
    for(letter of normalizedWord){
        if(vowels.includes(letter)){
            count += 1;
        }
    };
    return count;
};
console.log(countVowels("apple"));
console.log(countVowels("BanAna"));
console.log(countVowels(".     HaNnAH m  OntAna"));
module.exports = {countVowels};