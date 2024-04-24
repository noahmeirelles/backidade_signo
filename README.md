# Inicialização do Projeto backaulatds2

Este é um guia passo a passo para iniciar o projeto `backaulatds2`.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [Node.js website](https://nodejs.org/).

## Passo a Passo

1. **Crie uma nova pasta**: Crie uma nova pasta para o seu projeto em qualquer local desejado em sua máquina.

2. **Navegue até a pasta do projeto**: Abra o terminal e navegue até a pasta do projeto usando o comando `cd caminho/para/a/pasta/do/projeto`.

3. **Crie o arquivo `package.json`**: Crie um arquivo `package.json` dentro da pasta do projeto. Você pode criar e editar o arquivo usando qualquer editor de texto. Copie e cole o seguinte conteúdo no arquivo `package.json`:

```json
{
  "name": "backaulatds2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2",
    "nodemon": "^3.1.0",
    "pg": "^8.11.5"
  }
}
## Instalação

Clone este repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/atividadeaulaback-3tds2.git
   ```

### Navegue até o diretório
`cd atividadeaulaback-3tds2`

### Instale as dependências do projeto utilizando o npm
`npm install`

## Configuração do Banco de Dados

Certifique-se de ter o PostgreSQL instalado e em execução em seu sistema.

Crie um banco de dados PostgreSQL para este projeto.

Atualize as configurações do banco de dados no arquivo `index.js` com as suas credenciais:

```javascript
const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'seu_banco_de_dados',
  password: 'sua_senha',
  port: 5432,
});

```
### Inicialização do Projeto
`npm run dev`