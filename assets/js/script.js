document.getElementById("form_certificado").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio normal do formulário
    
    const cadastrado = document.getElementById("cadastrado").value; // Obtém o valor do campo de entrada
    
    let cadastroEncontrado = false;

    for (let i = 0; i < lista_cadastrados.length; i++) {
        if (lista_cadastrados[i].nome === cadastrado) {
            nome = document.querySelector('.nome')
            nome.innerHTML = cadastrado
            nomeCandidado = document.querySelector('.nomeCandidado')
            nomeCandidado.innerHTML = cadastrado
            cadastroEncontrado = true;
            if (cadastroEncontrado) {
                window.print()
            }
            break; // Se encontrado, não há necessidade de continuar o loop
        }
    }

    if (!cadastroEncontrado) {
        nome = document.querySelector('.nome')
        nome.innerHTML = "Candidato não localizado."
    }
});