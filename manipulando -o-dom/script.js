// Selecionando os elementos
const texto = document.getElementById("texto");
const inputTexto = document.getElementById("inputTexto");
const container = document.getElementById("container");

const seletorCorTexto = document.getElementById("seletorCorTexto");
const seletorCorFundo = document.getElementById("seletorCorFundo");

// 1. Trocar o texto APENAS ao clicar no botão
document.getElementById("btnTrocarTexto").addEventListener("click", () => {
    texto.textContent = inputTexto.value;
});

// 2. Mudar a cor do texto para a cor selecionada
document.getElementById("btnMudarCor").addEventListener("click", () => {
    texto.style.color = seletorCorTexto.value;
});

// 3. Mudar o fundo da página para a cor selecionada
document.getElementById("btnMudarFundo").addEventListener("click", () => {
    document.body.style.backgroundColor = seletorCorFundo.value;
});

// 4. Esconder ou Mostrar o parágrafo
document.getElementById("btnToggle").addEventListener("click", () => {
    texto.classList.toggle("oculto");
});

// 5. Criar elementos e apagar o que for clicado
document.getElementById("btnAdicionar").addEventListener("click", () => {
    let novoParagrafo = document.createElement("p");
    
    // O novo item usa o texto do input ou um padrão
    novoParagrafo.textContent = inputTexto.value || "Novo Item (Clique para apagar)";
    novoParagrafo.style.cursor = "pointer";
    novoParagrafo.className = "item-lista";

    // Função para remover o item específico ao clicar nele
    novoParagrafo.addEventListener("click", () => {
        novoParagrafo.remove();
    });

    container.appendChild(novoParagrafo);
});