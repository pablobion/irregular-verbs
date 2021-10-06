//array de vogais
const vowels = ["a", "e", "i", "o", "u", "y"];

//random vogal
const newVowel = () => {
    const random = Math.floor(Math.random() * 5);
    return vowels[random];
};

export const createSimilarWords = (option) => {
    option = option.replace("a", newVowel());
    option = option.replace("e", newVowel());
    option = option.replace("i", newVowel());
    option = option.replace("o", newVowel());
    option = option.replace("u", newVowel());
    return option;
};
