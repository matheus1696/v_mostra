document.getElementById("form-cert").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio normal do formulário
    
    const cadastrado = document.getElementById("codigo-inscricao").value.toUpperCase(); // Obtém o valor do campo de entrada
    
    let cadastroEncontrado = false;

    for (let i = 0; i < lista_cadastrados.length; i++) {
        if (lista_cadastrados[i].inscricao === cadastrado) {

            document.querySelector('.inscricao').innerHTML = lista_cadastrados[i].inscricao
            document.querySelector('.trabalho').innerHTML = lista_cadastrados[i].trabalho
            document.querySelector('.modalidade').innerHTML = lista_cadastrados[i].modalidade
            document.querySelector('.relator').innerHTML = lista_cadastrados[i].relator

            document.querySelector('.detalhes-trabalho').style.display="block"
            document.querySelector('.detalhes-modalidade').style.display="block"
            document.querySelector('.detalhes-relator').style.display="block"


            document.querySelector('.titulo').innerHTML = lista_cadastrados[i].trabalho
            
            cadastroEncontrado = true;
            if (cadastroEncontrado) {
                window.print()
            }
            break; // Se encontrado, não há necessidade de continuar o loop
        }
    }

    if (!cadastroEncontrado) {        
        document.querySelector('.detalhes-trabalho').style.display="none"
        document.querySelector('.detalhes-modalidade').style.display="none"
        document.querySelector('.detalhes-relator').style.display="none"
        document.querySelector('.trabalho').innerHTML = ""
        document.querySelector('.modalidade').innerHTML = ""
        document.querySelector('.relator').innerHTML = ""
        document.querySelector('.inscricao').innerHTML = "Inscrição não localizada."        
    }
});