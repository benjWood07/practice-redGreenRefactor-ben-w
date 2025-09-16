const vowels = require('../vowels.js');

describe("The countVowels() function", function(){
    test("should count only the vowels in provided word", function(){
        expect(vowels.countVowels("apple")).toBe(2);
    });

    test("should ignore word casing and count the vowels in provided word", function(){
        expect(vowels.countVowels("BANANA")).toBe(3);
    });

    test("should ignore additional whitespace and process string to count only the vowels", function(){
        expect(vowels.countVowels("    hello     ")).toBe(2);
    });
});