# Aula 01 - Instalando o JSON Server

````markdown
## Passos para a instalação e uso:

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

````markdown
## Criando a API

Para simular uma API com dados de produtos, utilize o JSON Server e crie um arquivo chamado `server.json` no diretório do seu projeto. Adicione o seguinte conteúdo no arquivo:

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
