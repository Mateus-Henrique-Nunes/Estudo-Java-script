/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalDeCategorias= booksByCategory.length


console.log(totalDeCategorias)
for(let i of booksByCategory){
    console.log('Total de livros da categoria ',i.category)
    console.log(i.books.length)
   
}

function countAuthors(){
    let authors=[]

    for(let i of booksByCategory){
        for(let book of i.books){
            if(authors.indexOf(book.author)== -1){
                authors.push(book.author)
            }

        }
    }
    console.log('total de autores é: ',authors.length)
}


function BooksAuthors(author){
    let livros=[]

    for(let i of booksByCategory){
        for(let book of i.books){
            if(book.author=== author){
                livros.push(book.title)
            }

        }
    }
    console.log('total livros do autor '+ author+ ' é '+livros.length+' sendo eles: ' +livros.join(', '))
}
countAuthors()
BooksAuthors('Augusto Cury')