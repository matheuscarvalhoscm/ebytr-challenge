# 📑️ Too Doo 

## 💻️ Sobre o projeto

Too Doo é um projeto Full-Stack desenvolvido durante a Blitz de Carreira da [Trybe](https://www.betrybe.com/) - Evento realizado com o intuíto de acelerar a aprovação de pessoas estudantes nas etapas técnicas dos processos seletivos na área de Desenvolvimento Web.

O projeto consiste em uma lista de tarefas seguindo os conceitos [CRUD](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD) e [MERN](https://www.mongodb.com/mern-stack).

---

## 🚀️ Executando a aplicação

O projeto é divído em duas partes:

1. Servidor (pasta backend)
2. Interface (pasta frontend)
   
💡️ O Front-End precisa que o Back-End esteja sendo executado para funcionar.

## **Pré Requisitos**

Para executar o projeto é importante que você tenha instalado as seguintes ferramentas em sua máquina:

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/pt-br/1)

### **🎲️ Rodando o servidor**

~~~
# clone o repositório
git clone https://github.com/matheuscarvalhoscm/ebytr-challenge.git

# acesse a pasta do servidor
cd backend

# instale as dependências
npm install

# execute a aplicação
npm start

# O servidor inciará na porta:3001 - acesse http://localhost:3001
~~~

### **🎲️ Rodando a interface**
~~~
# volte para a pasta raiz do projeto
cd ..

# acesse a pasta da interface
cd frontend

# instale as dependências
npm install

# execute a aplicação
npm start

# A interface inciará na porta:3000 - acesse http://localhost:3000
~~~
---
## 🛠️ Tecnologias
As seguintes tecnologias foram utilizadas na construção desse projeto:

**Back-End**
* [Node.js](https://nodejs.org/en/) + [Javascript](https://www.javascript.com/)
  * [Express](https://expressjs.com/pt-br/)
  * [MongoDB](https://www.mongodb.com/)
  * [ESlint](https://eslint.org/)
  * [Nodemon](https://nodemon.io/)
  * [Joi](https://joi.dev/)
  * [body-parser](https://www.npmjs.com/package/body-parser)
  * [CORS](https://www.npmjs.com/package/cors)

**Front-End**
* [React.js](https://pt-br.reactjs.org/) + [Javascript](https://www.javascript.com/)
  * [Axios](https://axios-http.com/docs/intro)
  * [ESlint](https://eslint.org/)
  * [Material UI](https://mui.com/pt/)
  * [prop-types](https://www.npmjs.com/package/prop-types)

---
## 👨🏾‍💻️ Desenvolvimento

O projeto foi iniciado com o desenvolvimento do Back-End, uma [API RESTful](https://becode.com.br/o-que-e-api-rest-e-restful/) que seguiu a arquitetura [MSC](https://www.devmedia.com.br/arquitetura-de-software-desenvolvimento-orientado-para-arquitetura/8033) em sua estruturação. Através da API é possível criar, editar, deletar e buscar tarefas no banco de dados.

Em seguida foi desenvolvido o Front-End, utilizando componentes React e a [Context API](https://pt-br.reactjs.org/docs/context.html) para gerencimento de estado, além da Material UI que deu estilo a aplicação.

Algumas funcionalidades do Front-End ainda serão desenvolvidas sendo elas: editar e ordenar as tarefas.

### 🚶🏾‍♂️️ Próximos passos

* Implementar funcionalidades do Fron-End
* Implementar testes (mínimo 30% de cobertura)
* Deploy da aplicação
* Dockerização

---

## ✍🏾️ Autor

[Matheus Carvalho](https://www.linkedin.com/in/matheuscarvalhoscm/)
