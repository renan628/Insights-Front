Essa é aplicação react que implementa o frontend do insights. Ela responsável por interagir com a API no backend, para que o usuário final consiga visualizar manipular cards e tags para em mãos seus insights

## Rodando Frontend

Primeiramente é necessário ter o [Node e NMP](https://nodejs.org/en/download/)

Na pasta Frontend que foi extraida do projeto, abra um terminal e execute

```
npm install
```

Isso irá instalar todas as dependências do projeto

### Para subir em modo debug/desenvolvimento

Ainda no terminal na pasta projeto, rode:

```
npm start
```

A aplicação então, subirá na porta 3000

### Para subir em modo de uso real

Primeiramente rode
```
npm run build
```
Agora é necessário instalar um servidor simples para rodar a aplicação, mas esse isso só precisa ser feito uma única vez
```
npm install -g serve
```

E por fim, servir a aplicação, que deve iniciar na porta 5000
```
serve -s build
```

Essa é claro, uma solução simples. É possível servir a aplicação em algum servidor web conhecido, como por exemplo o [NGINX](https://www.nginx.com/)
