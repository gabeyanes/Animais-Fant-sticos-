// ID

// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID

const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

// CLASSE E TAG

// getElementByClassName e getElementsByTagName

// Selecionam e retorna uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos foram adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection

const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

// Seletor Geral Único

// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
const contato2 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child')
const linkCSS = document.querySelector('[href^="#"]');
const primeiroUL = document.querySelector('ul');

// Busca dentro do UL apenas

const navItem = primeiroUL.querySelector('li');

// SELETOR GERAL LISTA

// querySelectorALL retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection2 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titutlos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorn o segundo elemento

console.log(gridSection2[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiroUL.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

// Array-Like

// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection4 = document.querySelectorAll('.grid-section');

gridSection4.forEach(function(gridItem, index, array){
  gridItem.classList.add('azul');
  console.log(index); // index do item no array
  console.log(array); // a array completa
});

const arrayGrid = Array.from(gridSectionHTML);
// É possível transformar array-like em uma array real, utilizado o método
// Array.from(gridSection)