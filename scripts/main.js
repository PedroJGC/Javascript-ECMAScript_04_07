/* 
    Aula 05 - Passando parâmetros na requisição
*/

async function fetchProducts() {
  const response = await fetch('http://localhost:3333/products');
  const data = await response.json();
  console.log(data);
}

async function fetchProductsById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

// fetchProducts();
fetchProductsById('3');

/*
Exemplo utilizando o fetch com then.
fetch('http://localhost:3333/products')
  .then((response) => response.json())
  .then((data) => console.log(data));
*/
