const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const booksArchive = (product) => {
  const archive = product.map((book) => `${book.name} ${book.genre} ${book.author.name}`);
  return archive;
}

const authorDetails = (details) => {
  return details.map((element) => (
    {
      author: element.author.name,
      age: element.releaseYear - element.author.birthYear
    }
  ))
  .sort((a, b) => b.age - a.age);
}


const ficScience = (array) => {
  return array.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
}

const bookAge = (array) => {
  const currentYear = new Date().getFullYear();
  return array.filter((element) => currentYear - element.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear).map((book) => book.name);
}

const bookSort = (array) => {
  return array.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica').map((element) => element.author.name).sort();
}

const moreThan60 = (array) => {
  const currentYear = new Date().getFullYear();
  return array.filter((element) => currentYear - element.releaseYear > 60).map((element) => element.name);
}

// const author3Dots = (array) => {
//   return array.find((element) => (element.author.name.endsWith('.').length === 3))
// }

// console.loh(author3Dots(books));

// idk the reason this not working