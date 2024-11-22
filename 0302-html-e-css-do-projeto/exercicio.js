// Retorne no console todas as imagens do site
const todasImagens = document.getElementsByTagName('img')
console.log(todasImagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const nomeImagem = document.querySelectorAll('.animais-lista img');
console.log(nomeImagem);
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelectorAll('.animais-descricao h2');
console.log(primeiroH2);
// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);
