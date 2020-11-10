# Introdução a Autenticação

## Exercícios

- ## Ex 1

  - a) Não, pois usar números só nos permite o uso de números, já com string, podemos usar tanto números quanto letras e símbolos.
  - b) Criado.

- ## Ex 2

  - a) É uma função para criar usuário. Recebe como parâmetro, id, email ,password, ambos do tipo string.
    dentro há uma lógica de código em SQL, esse trexo será o contato com o banco de dados. Nele é inserido os parâmetros receidos na função e colocados na tabela de usuários.
  - b) Criado.

  ```sql
  CREATE TABLE to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
  );
  ```

  - c) Criado.

  ```ts
  export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string
  ) {
    await connection
      .insert({
        id,
        name,
        nickname,
        email,
        password,
      })
      .into("to_do_list_users");
  }
  ```

- ## Ex 3

  - a) Ela diz que todo o valor/conteúdo do `JWT_KEY` é uma string, assim evita erro de tipagem incorreta.

  - b) Criado.

  ```ts
  export type AuthenticationData = {
    id: string;
  };

  export function generateToken(payload: AuthenticationData): string {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "24min",
    });
  }
  ```

- ## Ex 4

  - a) Criado
  - b) Alterado
  - c) Alterado

- ## Ex 5

  - a) Criado.

- ## Ex 6

  - a) Criado.
  - b) Feito.
  
- ## Ex 7

  - a) Ela diz que tudo dentro da constante `payload` é laguma coisa, não definindo uma tipagem exata mas sim incerta dos tipos de dados que a constante receberá. Usamos ela ali pois, nessa constante recebemos mais de um tipo de dado.
  - b) Criado.

- ## Ex 8
  - a) Criado.
  - b) Criado.
