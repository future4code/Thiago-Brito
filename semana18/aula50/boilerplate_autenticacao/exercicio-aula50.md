

### Exercicios aula50

1)
a)
Concordo que string é melhor que numeros somente, visto que permite uma maior aleatoriedade.
b)
import {v4} from "uuid"
export function generateId(): string {
    return v4();
  }

2)
a)
Cria-se a conexão com o mysql onde é setado a tabela user e posteriormente e criado oque se espera das variaveis que seram criadas para essa tabela.
b)
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
c)
import knex from "knex";
  const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  });

	const userTableName = "User";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};
