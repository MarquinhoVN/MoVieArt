# MoVieArt - Recomendação de Filmes com a Estrutura MERN

**MoVieArt** é um site que utiliza a estrutura **MERN** (MongoDB, Express, React, Node.js) para fornecer recomendações de filmes e outras informações relacionadas a filmes. O projeto integra a API do **TMDb (The Movie Database)** para buscar dados atualizados sobre filmes, atores e muito mais.

Este projeto tem como objetivo oferecer uma experiência completa de recomendação de filmes, baseada nas preferências dos usuários e nas últimas tendências de Hollywood.

---

## 📋 Funcionalidades

- **Recomendações de Filmes:** Receba recomendações baseadas em filmes populares, mais assistidos e recomendados pelo TMDb.
- **Busca de Filmes:** Pesquise filmes, obtenha detalhes como sinopse, elenco, avaliações e mais.
- **Interface Intuitiva:** Interface amigável desenvolvida com React.
- **API Backend:** Backend eficiente e escalável utilizando Node.js e Express.
- **Armazenamento de Dados:** Uso do MongoDB para armazenar dados relacionados aos usuários e suas preferências.

---

## 🔧 Tecnologias Usadas

- **MongoDB:** Banco de dados NoSQL para armazenar informações dos usuários e filmes.
- **Express:** Framework Node.js para criar a API backend.
- **React:** Biblioteca JavaScript para a construção da interface de usuário.
- **Node.js:** Ambiente de execução JavaScript no backend.
- **TMDb API:** Para obter informações sobre filmes, como detalhes, avaliações, elenco, etc.

---

## 🚀 Como Rodar o Projeto

### 1. Clone o Repositório:

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/MarquinhoVN/MoVieArt
```

### 2. Instale as Dependências
instale as dependências tanto do servidor quanto do cliente:

No diretório do projeto:
```bash
cd server
npm install
```

Novamente no diretório do projeto:
```bash
cd client
npm install
```
### 3. Configure o Arquivo .env no Servidor
```env
MONGODB_URL=mongodb://localhost:27017/movieart
PORT=5000
TOKEN_SECRET=seu_token_secret
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_KEY=sua_api_key_tmdb
```

### 4. Inicie o Servidor e o Cliente

No diretório do projeto:
```bash
cd server
npm start
```

Novamente no diretório do projeto:
```bash
cd client
npm start
```
