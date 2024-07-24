// Generar un número aleatorio entre 1 y 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    // Obtener el número ingresado por el usuario
    let userGuess = parseInt(document.getElementById('userGuess').value);

    // Verificar si el número es correcto
    if (userGuess === secretNumber) {
        document.getElementById('message').innerHTML = `¡Felicidades! ¡Has adivinado el número ${secretNumber} en ${attempts} intentos!`;
    } else if (userGuess < secretNumber) {
        document.getElementById('message').innerHTML = 'El número es mayor. Intenta de nuevo.';
        attempts++;
    } else {
        document.getElementById('message').innerHTML = 'El número es menor. Intenta de nuevo.';
        attempts++;
    }
}