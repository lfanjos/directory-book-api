# directory-book

## Introdução

Esta é uma API de livros que permite aos usuários criar, ler, atualizar e excluir livros. A API também fornece informações sobre gêneros de livros disponíveis. Os usuários podem criar um novo livro com o endpoint [`POST /`](#endpoint-2-post-), obter uma lista de livros com o endpoint [`GET /`](#endpoint-1-get-), obter informações sobre um livro específico com o endpoint [`GET /:id`](#endpoint-3-get-id), atualizar informações sobre um livro específico com o endpoint [`PUT /:id`](#endpoint-4-put-id) e excluir um livro específico com o endpoint [`DELETE /:id`](#endpoint-5-delete-id). Os usuários também podem obter uma lista de gêneros de livros disponíveis com o endpoint [`GET /generos/`](#endpoint-6-get-generos) e obter informações sobre um gênero específico de livros com o endpoint [`GET /generos/:genre`](#endpoint-7-get-generosgenre).

O diretório frontend incluído neste projeto é apenas um simples frontend para exemplificar o funcionamento da API de maneira visual.

## Autenticação

Nenhuma autenticação foi implementada.

## Endpoints

### Endpoint 1: `GET /`

Obtém a lista de livros.

#### Parâmetros

Nenhum.

#### Resposta

- `200 Ok`: Retorna a lista de livros.

### Endpoint 2: `POST /`

Cria um novo livro.

#### Parâmetros

Corpo da solicitação: Objeto de livro contendo as informações do livro a ser criado.

#### Resposta

- `201 Created`: Livro criado com sucesso. Retorna uma mensagem de sucesso e o documento criado.
- `400 Bad Request`: Erro ao criar o livro. Retorna uma mensagem de erro.

### Endpoint 3: `GET /:id`

Obtém informações sobre um livro específico.

#### Parâmetros

- `id`: ID do livro a ser recuperado.

#### Resposta

- `200 OK`: Livro encontrado. Retorna as informações do livro.
- `404 Not Found`: Livro não encontrado. Retorna uma mensagem de erro.

### Endpoint 4: `PUT /:id`

Atualiza informações sobre um livro específico.

#### Parâmetros

- `id`: ID do livro a ser atualizado.
- Corpo da solicitação: Objeto de livro contendo as informações atualizadas do livro.

#### Resposta

- `200 OK`: Livro atualizado com sucesso. Retorna uma mensagem de sucesso e o documento atualizado.
- `404 Not Found`: Livro não encontrado. Retorna uma mensagem de erro.

### Endpoint 5: `DELETE /:id`

Exclui um livro específico.

#### Parâmetros

- `id`: ID do livro a ser excluído.

#### Resposta

- `200 OK`: Livro excluído com sucesso. Retorna uma mensagem de sucesso e o documento excluído.
- `404 Not Found`: Livro não encontrado. Retorna uma mensagem de erro.

### Endpoint 6: `GET /generos/`

Obtém uma lista de gêneros de livros disponíveis.

#### Parâmetros

Nenhum.

#### Resposta

Retorna a lista de livros agrupados por gêneros.

### Endpoint 7: `GET /generos/:genre`

Obtém informações sobre um gênero específico de livros.

#### Parâmetros

- `genre`: Gênero a ser recuperado.

#### Resposta

Retorna apenas todos os livros de um gênero especifico.
