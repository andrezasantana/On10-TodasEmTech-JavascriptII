const books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
        pages: 472,
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
        pages: 254,
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
        pages: 460,
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
        pages: 254,
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
        pages: 352,
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
        pages: 278,
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
        pages: 234,
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
        pages: 538,
    }
]
function addBook(book) {
    //pega a data do array e converte o formato
    let novaData = new Date(book.published);
    let dataFormatada = `${novaData.getDate()}/${novaData.getMonth() + 1}/${novaData.getFullYear()}`;
    // Insere os livros do array na tabela.
    document.querySelector('#table').innerHTML += (`<tr class=>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td>${dataFormatada}</td>
    <td>${book.pages}</td>
    <td>
        <span class="deletar" onclick="deletarPublicacao(event)"> X
            <span class="tooltiptext">Deletar Publicação</span>
        </span>
    </td>
    </tr>`);
}
// Função que adciona o livro na tabela quando o botão 'adcionar livro' for clicado.
document.querySelector('#adicionar').addEventListener('click', function (event) {
    event.preventDefault();
    //salva em uma variável o valor dos campos do formulário.
    let titulo = document.querySelector('#titulo').value;
    let autor = document.querySelector('#autor').value;
    let isbn = document.querySelector('#isbn').value;
    let dataPublicacao = document.querySelector('#data').value;
    let paginas = document.querySelector('#paginas').value;
//Trata os erros caso não seja preenchido os campos do formulário e salva em um objeto as informações do livro
    if (titulo === '') {
        alert('Por favor, insira o título do livro');
    } else if (autor === '') {
        alert('Por favor, insira o autor do livro');
    } else if (isbn === '') {
        alert('Por favor, insira o ISBN do livro');
    } else if (dataPublicacao === '') {
        alert('Por favor, insira a data de publicação do livro');
    } else if (paginas === '') {
        alert('Por favor, insira a quantidade de páginas do livro');
    } else {
        addBook({
            title: titulo,
            author: autor,
            isbn: isbn,
            published: dataPublicacao,
            pages: paginas
        });
    }
    limparCampos();
})
// Função que limpa os campos inputs do formulário.
function limparCampos() {
    document.querySelector('#titulo').value = '';
    document.querySelector('#autor').value = '';
    document.querySelector('#isbn').value = '';
    document.querySelector('#data').value = '';
    document.querySelector('#paginas').value = '';
}
// Função que elimina apenas a publicação selecionada.
function deletarPublicacao(event) {
    event.target.parentElement.parentElement.remove();
}
//Insere livros existentes na tabela//
books.forEach((book) => addBook(book));