# 💈 Barber Shop App

Bem-vindo ao **Barber Shop App**, um sistema completo para gestão de clientes e agendamentos de uma barbearia. Este projeto faz parte do **Desafio Decola Tech 2025** e foi desenvolvido utilizando **Angular** no frontend e **Spring Boot** no backend, com banco de dados **SQLite**.

---

## 📌 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
barber-shop-app/
│-- barber-shop-api/    # Backend (Spring Boot + SQLite)
│-- barber-shop-ui/     # Frontend (Angular)
```

---

## 🛠️ Tecnologias Utilizadas

### Backend:
- **Spring Boot**
- **Spring Data JPA**
- **SQLite** (Banco de dados embutido, já incluído no projeto)
- **MapStruct**
- **JDK 17+**

### Frontend:
- **Angular**
- **Bootstrap**
- **TypeScript**
- **Node.js**

---

## 💾 Requisitos para Execução

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- **JDK 17+**: [Download](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- **Node.js** (versão recomendada 16+): [Download](https://nodejs.org/)
- **Angular CLI**: Instale com o comando:
  ```bash
  npm install -g @angular/cli
  ```
- **Maven** (já incluso no projeto, mas pode ser instalado separadamente se desejar): [Download](https://maven.apache.org/download.cgi)

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o Repositório

```bash
 git clone https://github.com/seu-usuario/barber-shop-app.git
 cd barber-shop-app
```

### 2️⃣ Iniciar o Backend (Spring Boot)

```bash
 cd barber-shop-api
 ./mvnw spring-boot:run   # Para Linux/macOS
 mvnw.cmd spring-boot:run # Para Windows
```

O backend será iniciado na porta **8080**.

### 3️⃣ Iniciar o Frontend (Angular)

```bash
 cd ../barber-shop-ui
 npm install   # Instalar dependências
 ng serve      # Iniciar o Angular
```

O frontend será iniciado na porta **4200**. Acesse em:

```
http://localhost:4200
```

---

## 🖥️ Screenshots

### 📸 Tela Inicial
![Home](https://i.imgur.com/qOSO0HO.png)

### 📸 Tela de Clientes
![Clientes](https://i.imgur.com/tzo6VP0.png)

### 📸 Tela de Agendamentos
![Agendamentos](https://i.imgur.com/y7v1gEz.png)

---

## 📌 Observações

- O banco de dados **SQLite** já está incluído no projeto, não sendo necessário instalar ou configurar.
- Certifique-se de ter o **Node.js** e o **Angular CLI** instalados para rodar o frontend corretamente.
- Para o backend, é necessário ter o **JDK 17+** instalado.

