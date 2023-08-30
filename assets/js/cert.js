const btnCert = document.querySelector('#geraPDF');

btnCert.addEventListener("click", () => {
    const content = document.querySelector('.print').outerHTML;

    // Cria um elemento temporário para gerar o PDF
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    document.body.appendChild(tempDiv);

    const options = {
        margin: [0],
        filename: "certificado.pdf",
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" }
    };

    // Gera o PDF a partir do elemento temporário
    html2pdf().set(options).from(tempDiv).save();

    // Remove o elemento temporário do DOM
    document.body.removeChild(tempDiv);
});
