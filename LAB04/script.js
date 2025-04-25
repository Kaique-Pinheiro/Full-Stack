
const randomNumber = Math.floor(Math.random() * 100);
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');
    
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 99) {
        messageElement.textContent = "Por favor, insira um número válido entre 0 e 99";
        return;
    }
    
    attempts++;
    
    if (userGuess === randomNumber) {
        messageElement.textContent = `Parabéns! Você acertou em ${attempts} tentativas!`;
        document.body.style.setProperty("background-color", "green");
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Tente um número maior!";
        document.body.style.setProperty("background-color", "red");
    } else {
        messageElement.textContent = "Tente um número menor!";
        document.body.style.setProperty("background-color", "red");
    }
});