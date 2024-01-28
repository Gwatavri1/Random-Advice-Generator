
const mindGuess = ['Good', 'not sure', 'Absolute Good', 'Bad', 'Think Twice', 'Strong No', 'Try it'];

function mind(){
    const gustMind = Math.floor(Math.random() * mindGuess.length)
    return mindGuess[gustMind]
}

const buttons = document.getElementById('btn');
const answers = document.getElementById('Answer');
const buttons2 = document.getElementById('btn2')

buttons.addEventListener('click', function(){
    const finalResult = mind()
    answers.textContent = finalResult
});

buttons2.addEventListener('click', function(){
    const res = ''
    answers.textContent = res
});
