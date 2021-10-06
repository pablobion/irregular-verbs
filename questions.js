import { arrayOfWords } from "./scripts/words.js";
import { createSimilarWords } from "./scripts/createSimilarWord.js";

//Aplica o infinitivo
const question = document.getElementById("question");
question.innerHTML = arrayOfWords[0][0];

//Mostra o significado em portugues
const ptbr = document.getElementById("inPt-br");
ptbr.innerHTML = `(${arrayOfWords[0][3]})`;

//Aplica a resposta correta na div oculta
const wordCorrect = document.getElementById("word-correct");
wordCorrect.innerHTML = `${arrayOfWords[0][1]}`;

let options = [];

//aplica 3 palavras diferentes e a correta no array de options
options.push(arrayOfWords[0][1]);

for (let i = 0; i < 3; i++) {
    options.push(createSimilarWords(arrayOfWords[0][1]));
}

//sort options
options = options.sort(() => 0.5 - Math.random());

//create buttons
options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.innerHTML = option;
    optionButton.setAttribute("id", `selected-${index}`);
    optionButton.onclick = () => {
        send(option, index);
    };
    document.getElementById("answers").appendChild(optionButton);
});

//respose correct
const send = (option, index) => {
    const isCorrect = option === arrayOfWords[0][1] ? true : false;

    if (isCorrect) {
        document.getElementById(`selected-${index}`).style.backgroundColor = "lightgreen";
        document.getElementById(`selected-${index}`).classList.add("animation");

        setTimeout(() => {
            location.reload();
        }, 800);
    } else {
        document.getElementById(`selected-${index}`).style.backgroundColor = "tomato";
    }
};
