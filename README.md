# API_TESTE

API REST desenvolvida com Node.js, Express e Prisma ORM, com foco em uma arquitetura simples e escalável. Esta aplicação tem como objetivo servir de base para testes, estudos e desenvolvimento de funcionalidades backend conectadas a um banco de dados não relacional.

---

## 📦 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** – Ambiente de execução JavaScript server-side
- **[Express](https://expressjs.com/)** – Framework web minimalista para Node.js
- **[Prisma](https://www.prisma.io/)** – ORM para banco de dados com suporte a TypeScript e migrations
- **[dotenv](https://www.npmjs.com/package/dotenv)** – Carregamento de variáveis de ambiente via `.env`
- **[MongoDB](https://www.mongodb.com/)** – Para armazenamento de todos os dados da API

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/cMendoncaaa/API_TESTE.git
cd API_TESTE
```
### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto com a seguinte estrutura (ajuste conforme seu banco):

```env
DATABASE_URL="mongodb+srv://caua:2kt6cmJyDYWmvHiY@users.sunwzwl.mongodb.net/Users?retryWrites=true&w=majority&appName=Users
```
> Obs.: O Prisma usará a variável `DATABASE_URL` para conectar ao banco.

### 4. Gere o client Prisma

```bash
npx prisma generate
```

### 5. Execute as migrations (opcional, se já houver schema definido)

```bash
npx prisma migrate dev --name init
```

### 6. Inicie o servidor

```bash
node --watch server.js
```
---

## 📁 Estrutura do Projeto

```bash
API_TESTE/
│
├── .env                 # Variáveis de ambiente (não versionado)
├── .gitignore           # Arquivos e pastas ignoradas pelo Git
├── node_modules/        # Dependências instaladas
├── package.json         # Informações do projeto e dependências
├── package-lock.json    # Lockfile das dependências
├── schema.prisma        # Modelo do banco de dados (Prisma)
├── server.js            # Arquivo principal da aplicação
```
---

## 🧪 Endpoints (exemplo)

> Abaixo, um exemplo genérico de como os endpoints podem ser documentados. Atualize conforme implementar:

### GET `/usuarios`

Retorna todos os usuários cadastrados.

### POST `/usuarios`

Cria um novo usuário.

**Body:**
```json
{
  "name": "Cauã Mendonça",
  "age": "21"
  "email": "caua@example.com"
}
```

---

## 🛠️ Comandos Úteis

| Comando                      | Ação                                               |
|-----------------------------|----------------------------------------------------|
| `node --watch server.js`    | Inicia o servidor                                 |
| `npx prisma generate`       | Gera o cliente do Prisma                          |
| `npx prisma migrate dev`    | Executa migrations locais                         |
| `npx prisma studio`         | Abre uma interface gráfica para o banco de dados  |

---

## 🧑‍💻 Autor

Desenvolvido por **Cauã Mendonça**  
🔗 [github.com/cMendoncaaa](https://github.com/cMendoncaaa)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.  
Sinta-se livre para usar, modificar e distribuir este código.
