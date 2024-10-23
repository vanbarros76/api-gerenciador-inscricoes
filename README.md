# API Gerenciador de Inscrições

Esta é uma API RESTful para gerenciamento de inscrições, desenvolvida com Node.js e Express. A API permite criar, listar, atualizar e deletar inscrições, utilizando armazenamento em memória.

## Funcionalidades

- Criar uma nova inscrição
- Listar todas as inscrições
- Atualizar uma inscrição existente
- Deletar uma inscrição

## Pré-requisitos

- Node.js (versão 12.0 ou superior)
- npm (geralmente vem com o Node.js)

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/api-gerenciador-inscricoes.git
   ```

2. Entre no diretório do projeto:
   ```
   cd api-gerenciador-inscricoes
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

1. Inicie o servidor:
   ```
   npm start
   ```

2. O servidor estará rodando em `http://localhost:3000`

## Endpoints

- `GET /subscription`: Lista todas as inscrições
- `POST /subscription`: Cria uma nova inscrição
- `PUT /subscription/:id`: Atualiza uma inscrição existente
- `DELETE /subscription/:id`: Deleta uma inscrição

## Exemplo de uso

### Criar uma nova inscrição
