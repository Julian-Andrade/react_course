// 1 - var, let, const

var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

// 1.1 - let

let a = 10;
let b = 15;

// O "let" so altera o o que está dentro do bloco (Abertura e fechamento de '{}').

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

// Outro caso com let

for (let i = 0; i < 6; i++) {
  console.log(i);
}

// 1.2 - const

// o "const" funciona da mesma maneira que o let, alterando o que está dentro do bloco
// a diferença do const para o let é que os valores em const são constantes, não podem ser alterados!

function logName() {
  const name = "Matheus";
  console.log(name);
}

const name = "Pedro";
logName();
console.log(name);

// 2 - Arrow Function

// Função Normal

const sum = function sum(a, b) {
  return a + b;
};

// 2.1 - Arrow Function

const arrowSum = (a, b) => {
  return a + b;
};

// 2.2 - Pode-se escrever a Arrow Function da seguinte maneira quando temos apenas uma linha de código
// Retiramos as chaves "{}" e o "return"

const arrowSumResum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));
console.log(arrowSumResum(5, 5));

// 2.3 - Arrow Function com Argumentos

const greeting = (name) => {
  if (name) {
    return `Olá ${name}!`;
  } else {
    return `Olá`;
  }
};

console.log(greeting(`Julian`));
console.log(greeting());

// 2.4 - Arrow Function sem Argumentos

const greetingWithoutArgument = () => console.log(`Julian Andrade`);
greetingWithoutArgument();

// 2.5 - Arrow Function com "this"

const user = {
  name: `Theo`,
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log(`Username: ${self.name}`);
    }, 500);
  },
  arrowSayUserName() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 700);
  },
};

// user.sayUserName();
// user.arrowSayUserName();

// 3 - Filter
// Método de array para filtrar dados, baseado em alguma condição estabelecida

const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Julian", available: true },
  { name: "Andrade", available: false },
  { name: "Lucas", available: false },
  { name: "Barcellos", available: true },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);

// 4 - Map
// Método de array para mapear os dados percorrendo todos os elementos
// Utilizado quando queremos modificar os elementos

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletrodomésticos" },
  { name: "Fogão", price: 400.0, category: "Eletrodomésticos" },
  { name: "Calça Jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// 5 - Template Literals
// Forma de concatenação mais simples no JavaScript

const userName = "Matheus";
const age = 30;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);

// 6 - Destructuring
// Recurso que pode ser utilizado em arrays e objetos
// Ideia de transformar os itens desses dados em variáveis

// 6.1 - Destructuring com Arrays

const fruits = ["Maça", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);

// 6.2 - Destructuring com Objetos

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName} custa R$${price}, pertence a categoria ${productCategory} e tem cor ${color}.`
);

// 7 - Spread Operator
// Pode ser utilizado em Arrays e Objetos
// Utilizamos para construir novos valores destes dados em outros arrays e objetos.

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "Volkswagen" };
const carInfos = { km: 100000, price: 49000 };

const cars = { ...carName, ...carBrand, ...carInfos, wheels: 4 };

console.log(cars);

// 8 - Classes
// Classes são recursos fundamentais para programas com orientação a objetos
// Possuimos acesso a: constructor, propriedades e métodos.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa Gola V", 20);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis Nike", 100);

console.log(tenis.name);

console.log(tenis.productWithDiscount(50));

// 9 - Herança
// Podemos criar herança de classes com ES6
// Utilizamos a palavra "extends" para referir a classe herdada
// As propriedades que utilizamos dela, devem ser enviadas via função "super"

class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price); // Coleta as proprieadades da outra Class
    this.colors = colors; // Nova propriedade adicionada
  }

  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, [
  "Preto",
  "Azul",
  "Verde",
]);

console.log(hat);
console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();
