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
            document.querySelector('#desc-cert').style.display="block"   
            document.querySelector('.detalhes-trabalho').style.display="block"
            document.querySelector('.detalhes-modalidade').style.display="block"
            document.querySelector('.detalhes-relator').style.display="block"

            cadastroEncontrado = true;
            if (cadastroEncontrado) {                
                inscricao = lista_cadastrados[i].inscricao.toLowerCase()

                document.querySelector('#baixarPDF').style.display="block"
                document.querySelector('#baixarPDF').setAttribute('href','assets/doc/'+inscricao+'.pdf')
            }

            break; // Se encontrado, não há necessidade de continuar o loop
        }
    }    

    if (!cadastroEncontrado) {
        if (input != "") {                        
            document.querySelector('#desc-cert').style.display="block"   
            document.querySelector('.detalhes-trabalho').style.display="none"
            document.querySelector('.detalhes-modalidade').style.display="none"
            document.querySelector('.detalhes-relator').style.display="none"  
            document.querySelector('#baixarPDF').style.display="none"
            document.querySelector('.trabalho').innerHTML = ""
            document.querySelector('.modalidade').innerHTML = ""
            document.querySelector('.relator').innerHTML = ""
            document.querySelector('.inscricao').innerHTML = "Inscrição não localizada."   
            
            alert(`Código da inscrição ${input} não foi localizado, favor entrar em contato através do e-mail mostracientificanep@gmail.com`)
        } else {
            alert(`Informe o código de inscrição`)
        }
    }
});