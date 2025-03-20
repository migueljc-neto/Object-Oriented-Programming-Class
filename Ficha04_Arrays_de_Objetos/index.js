// Importa modulo data.js
import * as data from "./data.js";

let listUsers = [];
listUsers = data.init();

console.log(listUsers);

const listarNivel = function (nivelUser) {
  listUsers
    .filter((user) => user.nivel == nivelUser)
    .forEach((user) => console.log(user.nome, user.nivel, user.pontos));
};

const somarPontos = function (nivelUser) {
  let some = listUsers
    .filter((user) => user.nivel == nivelUser)
    .reduce((acc, cur) => acc + cur.pontos, 0);

  return some;
};

const verificarnivel = function (nivelUser) {
  return listUsers.some((user) => user.nivel == nivelUser);
};

const pesquisarColecionaveis = function (colecionavelProp) {
  return listUsers
    .flatMap((user) => user.colecionaveis)
    .some((colect) => colect == colecionavelProp);
};

const mostrarJogadores = function (colecionavelProp) {
  return listUsers
    .filter((user) => user.colecionaveis.includes(colecionavelProp))
    .forEach((user) => console.log(user.nome));
};

const listTabClass = function () {
  return listUsers
    .toSorted((a, b) => b.pontos - a.pontos)
    .forEach((user) => console.log(user.pontos, user.nome));
};

const giveReward = function (userLevel) {
  listUsers
    .filter((user) => user.nivel == userLevel)
    .forEach((user) => (user.pontos += 100));

  console.log(listUsers);
};

const sumPontos = function () {
  return listUsers.reduce((acc, user) => acc + user.pontos, 0);
};

listarNivel(2);
console.log(somarPontos(2));
console.log(verificarnivel(10));
console.log(pesquisarColecionaveis("badge 1"));
console.log(pesquisarColecionaveis("badge 5"));
mostrarJogadores("badge 1");
listTabClass();
// giveReward(2);
console.log(sumPontos());
