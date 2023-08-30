document.getElementById("form-cert").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio normal do formulário
    
    const input = document.getElementById("codigo-inscricao").value.toUpperCase(); // Obtém o valor do campo de entrada
    
    let cadastroEncontrado = false;

    for (let i = 0; i < lista_cadastrados.length; i++) {
        if (lista_cadastrados[i].inscricao === input) {

            document.querySelector('.inscricao').innerHTML = lista_cadastrados[i].inscricao
            document.querySelector('.trabalho').innerHTML = lista_cadastrados[i].trabalho
            document.querySelector('.modalidade').innerHTML = lista_cadastrados[i].modalidade
            document.querySelector('.relator').innerHTML = lista_cadastrados[i].relator
            document.querySelector('.detalhes-trabalho').style.display="block"
            document.querySelector('.detalhes-modalidade').style.display="block"
            document.querySelector('.detalhes-relator').style.display="block"

            document.querySelector('.titulo').innerHTML = lista_cadastrados[i].trabalho
            document.querySelector('.autores').innerHTML = ""

            if (lista_cadastrados[i].relator != "") {
                document.querySelector('.autores').innerHTML += lista_cadastrados[i].relator
            }

            if (lista_cadastrados[i].autor1 != "") {
                document.querySelector('.autores').innerHTML += ", "
                document.querySelector('.autores').innerHTML += lista_cadastrados[i].autor1
            }

            if (lista_cadastrados[i].autor2 != "") {
                document.querySelector('.autores').innerHTML += ", "
                document.querySelector('.autores').innerHTML += lista_cadastrados[i].autor2
            }

            if (lista_cadastrados[i].autor2 != "") {
                document.querySelector('.autores').innerHTML += ", "
                document.querySelector('.autores').innerHTML += lista_cadastrados[i].autor3
            }

            if (lista_cadastrados[i].autor2 != "") {
                document.querySelector('.autores').innerHTML += ", "
                document.querySelector('.autores').innerHTML += lista_cadastrados[i].autor4
            }

            if (lista_cadastrados[i].orientador != "") {
                document.querySelector('.autores').innerHTML += ", "
                document.querySelector('.autores').innerHTML += lista_cadastrados[i].orientador
            }

            document.querySelector('.modalidade').innerHTML = lista_cadastrados[i].modalidade

            cadastroEncontrado = true;

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
        
        alert(`Código da inscrição ${input} não foi localizado`)
    }
});