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
