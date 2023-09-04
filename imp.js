for (let i = 0; i < lista_cadastrados.length; i++) {
    
    let trabalho = lista_cadastrados[i].trabalho
    let autor = ""
    autor = lista_cadastrados[i].relator + ", "

    if (lista_cadastrados[i].autor1 != "") {
        autor += lista_cadastrados[i].autor1 + ", "        
    }
    if (lista_cadastrados[i].autor2 != "") {
        autor += lista_cadastrados[i].autor2 + ", "        
    }
    if (lista_cadastrados[i].autor3 != "") {
        autor += lista_cadastrados[i].autor3 + ", "        
    }
    if (lista_cadastrados[i].autor4 != "") {
        autor += lista_cadastrados[i].autor4 + ", "        
    }
    if (lista_cadastrados[i].orientador != "") {
        autor += lista_cadastrados[i].orientador       
    }

    modalidade = lista_cadastrados[i].modalidade

    document.querySelector('#main').innerHTML += `
        <section class="bg-cert">
            <section class="text">
                <p> Certificamos que o trabalho intitulado ${trabalho}, de autoria de ${autor} foi apresentado na categoria de ${modalidade} na V MOSTRA CIENTÍFICA - Socializando Conhecimento para uma Saúde Melhor. O evento ocorreu no dia 22 de agosto de 2023, nas instalações da Secretaria Municipal de Saúde de Caruaru.
                </p>
            </section>
        </section>`    

    console.log(trabalho)

}