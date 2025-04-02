# Aula 01 - Instalando o JSON Server

## Passos para a instalação e uso:

````markdown
1. **Instale o JSON Server**
   Execute o seguinte comando no terminal:
   ```bash
   npm install json-server
   ```
````

1. **Configuração do script no `package.json`**

   Adicione o seguinte trecho no arquivo `package.json` na seção `scripts`:

   ```json
   "scripts": {
       "server": "json-server server.json"
   }

   ```

2. **Rodando o servidor**

   Execute o comando abaixo no terminal para iniciar o servidor:

   ```bash
   npm run server

   ```

3. **Trocando a porta padrão**

   Caso queira rodar o servidor em outra porta, como `3333`, altere o script para:

   ```json
   "scripts": {
       "server": "json-server server.json --port=3333"
   }

   ```

   E rode novamente:

   ```bash
   npm run server

   ```

# Aula 02 - Criando uma API e testando no JSON Server

## Criando a API

Para simular uma API com dados de produtos, utilize o JSON Server e crie um arquivo chamado `server.json` no diretório do seu projeto. Adicione o seguinte conteúdo no arquivo:

````markdown
```json
{
  "products": [
    { "id": "1", "name": "Mouse", "price": 150.5 },
    { "id": "2", "name": "Teclado", "price": 90 },
    { "id": "3", "name": "Monitor", "price": 500 }
  ]
}
```
````

## Testando a API com o JSON Server

1. **Inicie o servidor**

   Utilize o script configurado no `package.json` (conforme configurado na aula anterior) e execute o seguinte comando no terminal:

   ```bash
   npm run server

   ```

2. **Acessando os dados**

   Após iniciar o servidor, você pode acessar os dados através da seguinte URL padrão:

   ```
   <http://localhost:3333/products>

   ```

3. **Testando endpoints**

   Use ferramentas como o navegador, Postman ou cURL para testar os endpoints. Exemplos:

   - **GET**: Lista todos os produtos.
     URL: `http://localhost:3333/products`
   - **POST**: Adiciona um novo produto.
     Endpoint: `http://localhost:3333/products`
   - **PUT/PATCH**: Atualiza um produto existente.
   - **DELETE**: Remove um produto.

## Dica Extra

Certifique-se de que o JSON Server esteja configurado corretamente no `package.json` para rodar sem problemas. Se precisar trocar a porta, adicione a opção `--port=<número_da_porta>` no script.

# Aula 03 - Utilizando o `fetch`

## Introdução

Nesta aula, vamos aprender a utilizar o método `fetch()` para realizar requisições a uma API. O exemplo abaixo demonstra como buscar dados do endpoint de produtos criado nas aulas anteriores.

---

## Código de Exemplo

````markdown
```javascript
fetch('<http://localhost:3333/products>')
  .then((response) => response.json())
  .then((data) => console.log(data));
```
````

---

## Explicação do Código

1. **`fetch('<http://localhost:3333/products>')`:**

   Inicia uma requisição HTTP GET para o endpoint da API de produtos (`http://localhost:3333/products`).

2. **`then((response) => response.json())`:**

   Quando a resposta é recebida, o método `.json()` converte os dados da resposta em um objeto JavaScript.

3. **`then((data) => console.log(data))`:**

   Exibe os dados recebidos no console, permitindo verificar o conteúdo retornado pela API.

---

## Como Testar o Código

1. Certifique-se de que o JSON Server está rodando e acessível em `http://localhost:3333/products`.
2. Copie o código para um arquivo `.js` ou diretamente em uma aplicação front-end.
3. Abra o console do navegador (tecla F12) para visualizar os dados no terminal após a execução.

# **Aula 04 - Utilizando `async/await`**

````markdown
### Código de Exemplo

```javascript
async function fetchProducts() {
  const response = await fetch('<http://localhost:3333/products>');
  const data = await response.json();
  console.log(data);
}
```
````

### Explicação

1. **`async function fetchProducts()`**: Define a função como assíncrona, permitindo o uso do `await`.
2. **`await fetch('<http://localhost:3333/products>')`**: Faz a requisição para o endpoint da API e aguarda a resposta.
3. **`response.json()`**: Converte a resposta em formato JSON para um objeto JavaScript.
4. **`console.log(data)`**: Exibe os dados retornados no console.

# **Aula 05 - Passando parâmetros na requisição**

### Código de Exemplo

```jsx
async function fetchProductsById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

fetchProductsById('3');
```

### Explicação

1.  **`async function fetchProductsById(id)`**: Cria uma função assíncrona que recebe um parâmetro `id`.
2.  **Interpolação de URL com Template String**:
    Constrói a URL dinamicamente com base no `id` fornecido.
    ```
    `http://localhost:3333/products/${id}`

        ```

3.  **`response.json()`**: Transforma a resposta em um objeto JavaScript.
4.  **`fetchProductsById('3')`**: Chama a função e passa o parâmetro `'3'`, buscando os dados do produto com o ID 3.
5.  **`console.log(data)`**: Exibe o resultado no console.

---

### Testando os Códigos

1. Certifique-se de que o servidor JSON Server está rodando na porta `3333`.
2. Copie os códigos para arquivos `.js` ou diretamente em um aplicativo front-end.
3. Abra o console do navegador para visualizar os resultados.

---
