const palavras = ["teste", "simular", "computador", "desenvolvimento", "tecnologia"];
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 6;
let palavraExibida = Array(palavraSecreta.length).fill("_");
let letrasErradas = [];

document.addEventListener("DOMContentLoaded", () => {
    atualizarTela();

    document.getElementById("enviar").addEventListener("click", () => {
        const letra = document.getElementById("letra").value.toLowerCase();
        document.getElementById("letra").value = "";
        if (letra && letra.length === 1 && /^[a-zA-Z]$/.test(letra)) {
            verificarLetra(letra);
        }
    });
});

function verificarLetra(letra) {
    if (palavraSecreta.includes(letra)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                palavraExibida[i] = letra;
            }
        }
    } else if (!letrasErradas.includes(letra)) {
        letrasErradas.push(letra);
        tentativas--;
    }
    atualizarTela();
}

function atualizarTela() {
    document.getElementById("palavra").textContent = palavraExibida.join(" ");
    document.getElementById("erros").textContent = "Letras erradas: " + letrasErradas.join(", ");
    document.getElementById("tentativas").textContent = "Tentativas restantes: " + tentativas;
    verificarFimDeJogo();
}

function verificarFimDeJogo() {
    if (!palavraExibida.includes("_")) {
        alert("Parabéns! Você acertou a palavra: " + palavraSecreta);
        location.reload();
    } else if (tentativas <= 0) {
        alert("Game Over! A palavra era: " + palavraSecreta);
        location.reload();
    }
}

// HTML para o jogo:
document.body.innerHTML = `
    <h1>Jogo da Forca</h1>
    <p id="palavra"></p>
    <p id="erros"></p>
    <p id="tentativas"></p>
    <input type="text" id="letra" maxlength="1" />
    <button id="enviar">Tentar</button>
`;
