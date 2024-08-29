# API Produto

Este projeto é uma solução completa para o gerenciamento de produtos, com uma API desenvolvida em **ASP.NET** e um banco de dados **SQL Server** para o backend e uma interface de usuário feita com HTML, CSS e Javascript no frontend. Este projeto serve como uma base sólida para qualquer aplicação que exija operações de CRUD (Create, Read, Update, Delete) em uma base de dados de produtos.

## Pré-requisitos

- **.NET** (versão 6.0.33)

## Como Rodar o Projeto

### Backend (API)

1. Navegue até o diretório da API:
   ```bash
   cd api/apip
   ```
2. Restaure as dependências:
   ```bash
   dotnet restore
   ```

3. Baixe o dotnet-ef:
    ```bash
   dotnet tool install --global dotnet-ef --version 6.*
   ```

4. Configue o appsettings.json:
    - mude o objeto `conexao` de acordo com suas necessidades (como a string de conexão ao banco de dados).

5. Crie uma nova migration
   ```bash
   dotnet ef migrations add NomeDaMigration
   ```

6. Aplique a nova migration:
   ```bash
   dotnet ef database update
   ```

7. Inicie o servidor:
   ```bash
   dotnet run
   ```

## Endpoints da api
- **GET /api/produtos:** Retorna todos os produtos.
- **GET /api/produtos/{id}:** Retorna os detalhes de um produto específico.
- **POST /api/produtos:** Cria um novo produto.
- **PUT /api/produtos/{id}:** Atualiza as informações de um produto existente.
- **DELETE /api/produtos/{id}:** Exclui um produto.