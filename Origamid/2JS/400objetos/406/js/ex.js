//
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array


// const firstItem = comidas.slice(0,1);
// const lastItem = comidas.slice(comidas.length - 1 );
const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();


comidas.unshift('Peixe', 'Batata');
comidas.push('Arroz')

console.log(comidas);

//
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort();
estudantes.reverse();
estudantes.includes('Joana');
estudantes.includes('Juliana');

console.log(estudantes);

//
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
 html = html.split('section');
 html = html.join('ul');
 html = html.split('div')
 html = html.join('li');

console.log(html)

//
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCars = carros.slice();
carros.splice(carros.length - 1, 1)

console.log(cloneCars);
console.log(carros);