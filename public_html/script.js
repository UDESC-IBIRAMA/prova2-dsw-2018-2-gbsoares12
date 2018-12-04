var arrayLivros = [];

function salvarLivro() {
    var isbn = document.getElementById('sIsbn').value;
    var titulo = document.getElementById('sTitulo').value;
    var autor = document.getElementById('sAutor').value;
    var editora = document.getElementById('sEditora').value;
    var ano = document.getElementById('iAno').value;
    var quantidade = document.getElementById('iQuantidade').value;


    var objLivro = new Object();
    objLivro.isbn = isbn;
    objLivro.titulo = titulo;
    objLivro.autor = autor;
    objLivro.editora = editora;
    objLivro.ano = ano;
    objLivro.quantidade = quantidade;

    console.log("Titulo: " + objLivro.titulo + " adicionado no array");
    
    arrayLivros.push(objLivro);
}

function exibirResultado(){
    debugger;
    for (var item in arrayLivros) {
        document.getElementById('resultadosCampo').appendChild('teste');
    }
}

