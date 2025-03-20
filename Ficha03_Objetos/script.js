let compra = {
  nomeProduto: "",
  catProduto: " ",
  calcPreçoFinal() {
    return this.precoBase * this.taxaIva;
  },
  dadosEncomenda: {
    dataEncomenda: "(2023-03-27)",
    prazoEntrega: "(7) dias",
    localEntrega: "Avenida do Mar, 74, 4460-810 Matosinhos",
  },

  removeProp(prop) {
    delete this[prop];
  },
};

compra.nomeProduto = prompt("Indique o nome do prouto: ");
compra.catProduto = prompt("Indique a categoria do prouto: ");
compra.precoBase = +prompt("Indique o preço do prouto: ");
compra.taxaIva = 23;
console.log(compra);

// compra.precoBase = 2.5;
// console.log(compra);

compra.precoFinal = compra.calcPreçoFinal();
console.log(compra);

const showLength = function (objectPar) {
  return Object.keys(objectPar).length;
};

const showProp = function (objectPar) {
  return Object.keys(objectPar);
};

console.log(showLength(compra));
console.log(showProp(compra));

compra.removeProp("nomeProduto");
console.log(compra);
