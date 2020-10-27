### Exercício 1

a) 
* VARCHAR - retorna uma string
* DATE - number que retorna uma data em forma de string

b) 
* O SHOW DATABASE retorna os bancos de dados presentes
* SHOW TABLES retorna as tabelas dentro do banco de dados

c) Foi possível visualizar a estrutura referente à tabela Actor

### Exercício 2
a)
 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
 1200000,
  "1963-08-23", 
  "female"
);


b) A primary key não permite criar mais de um dado com a mesma informação.
c) A quantidade de colunas não corresponde à quantidade de linhas declaradas.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);


d) Falta a linha 'name' criada inicialmente

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);


e) Estão faltando as aspas

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Mel Lisboa",
  300000,
  "1982-11-01", 
  "female"
);



INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "José Mayer",
  300000,
  "1949-10-03", 
  "female"
);


### Exercício 3
a) 

SELECT * FROM Actor WHERE gender = "female"

b) 
 
SELECT salary FROM Actor WHERE name = "Tony Ramos"

c) 

SELECT * FROM Actor WHERE gender = "invalid"

* Retorna todas as informações como null. O valor digitado não bate com os generos feitos ate entao.

d) 

SELECT id, name, salary FROM Actor WHERE salary <= 500000

e) Um typo na informação "name", está como "nome".

SELECT id, name from Actor WHERE id = "002"


### Exercício 4
a) A query verifica se o nome do(a) ator/atriz inicia com A ou J e com o AND para verificar se esses recebem mais de 300000 reais.
b) 

SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000

c) 

SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%")

d) 

SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000