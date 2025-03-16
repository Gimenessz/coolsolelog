# 👽 CoolSoleLog - Console Log Estiloso  

CoolSoleLog é um módulo simples para exibir mensagens estilizadas no console usando cores e formatação personalizada. Ideal para melhorar a legibilidade dos logs no terminal.  

## 🚀 Tecnologias Utilizadas  
- JavaScript  
- Node.js  
- npm  

---

## 📦 Instalação  

### 1️⃣ **Clone o Repositório**  - Caso queira, faça o download e jogue no seu codificador.
Abra o terminal e digite:  
```sh
git clone https://github.com/seu-usuario/coolsolelog.git (https://github.com/Gimenessz/coolsolelog.git)
```
Depois, entre na pasta do projeto:  
```sh
cd coolsolelog
```

### 2️⃣ **Instale as Dependências (Se Houver)**  
```sh
npm install
```

---

## ▶️ Como Usar  

Se o módulo foi publicado no npm, você pode instalá-lo diretamente:  
```sh
npm install @seu-usuario/coolsolelog
```

Se estiver rodando localmente:  
```js
const coolsolelog = require('./index'); 

coolsolelog('Olá, mundo!', 'green', 'bold'); // Mensagem verde em negrito
```

Se estiver utilizando **ES Modules (ESM)**, importe assim:  
```js
import coolsolelog from './index.js';

coolsolelog('Olá, mundo!', 'blue', 'underline'); // Mensagem azul sublinhada
```

---

## 🛠 Como Testar o Módulo Após Publicação  

Caso tenha publicado no **npm**, você pode testar seu pacote criando um novo projeto:  

```sh
mkdir teste-coolsolelog && cd teste-coolsolelog
npm init -y
npm install @seu-usuario/coolsolelog
```

Depois, crie um arquivo `test.js` e adicione:  

```js
const coolsolelog = require('@seu-usuario/coolsolelog');

coolsolelog('Testando CoolSoleLog!', 'cyan', 'italic');
```

Execute:  
```sh
node test.js
```

RM99799 - Felipe Gimenes
RM559444 - Musashi Mabuti

---
