# Api NodeJs com TypeScript
### Para testes de Login/Register/List com autenticação JWT e upload de imagens
<hr>

### Instalação

- <code>npm install</code>
- Criar uma base em Postgres com uma tabela de usuários, conforme /models/User.ts
- Criar o arquivo <b>.env</b> a partir de <b>.env-example</b> e configurar de acordo com suas variáveis.
- <code>npm run start-dev</code>

### Rotas
    
<code>/register</code> 
- Tipo Post, x-form, parâmetros <b>email</b> e <b>password</b><br>
- Exemplo endpoint: http://localhost:4000/register 

<code>/login</code>
- Tipo Post, x-form, parâmetros <b>email</b> e <b>password</b><br>
- Exemplo endpoint: http://localhost:4000/login

<code>/list</code>
- Tipo Get, parâmetro no Header <b>Authorization</b> com o token recebido no login. No valor desse parâmetro deverá conter a string <b>Bearer</b>, seguindo de um espaço e a string do token JWT recebido na rota login.
- Exemplo endpoint: http://localhost:4000/list

<code>/upload</code>
- Tipo Post, parâmetro <b>avatar</b> em form-data, enviar um arquivo de imagem jpg/jpeg/png.
- Essa rota não exige autorização, foi criada somente para testar a lib Sharp, então não é necessário enviar o token.  
- Exemplo endpoint: http://localhost:4000/list

