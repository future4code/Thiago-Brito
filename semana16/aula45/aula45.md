### Exercicio aula45

1)
a)
O comando DROP vai apagar totalmente a coluna salary 

b)
 O comande CHANGE vai modificar o nome da coluna gender para sex

c)
Foi possível visualizar a estrutura referente a tabela ator

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2)

a)
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"

b)
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = " Juliana Paes"
WHERE name = "JULIANA PÃES";

c)
UPDATE Actor
SET 
name = "Zezé Motta",
birth_date = "1944-06-27",
salary = 600000,
gender = "male"
WHERE id = "005";

d)
Não deu erro, porém como nao possuia o id a ser editado, nada aconteceu.

3)
a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
	
4)
a)
SELECT MAX(salary) FROM Actor

b)
SELECT Min(salary) FROM Actor
WHERE
gender = "female"

c)
SELECT COUNT(*) FROM Actor WHERE gender = "female"

d)
SELECT SUM(salary) FROM Actor

5)
a)
A query vai selecionar a quantidade de atores agrupados de acordo com o genero.

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

d)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

6)
a)
ALTER TABLE Movie ADD playing_limit_date DATE;
b)
ALTER TABLE Filmes CHANGE evaluation evaluation FLOAT
c)
UPDATE Filmes
SET playing_limit_date = "2020-10-28"
WHERE id = "001";

UPDATE Filmes
SET playing_limit_date = "2020-10-28"
WHERE id = "002";

UPDATE Filmes
SET playing_limit_date = "2020-09-28"
WHERE id = "003";

d)O update nao funciona visto que depois de deletado o valor e null e nao pode ser editado dessa forma.

7)
a)
SELECT COUNT(*)
FROM Filmes
WHERE evaluation > 7.5;

b)
SELECT AVG (evaluation)
FROM Filmes;

c)
SELECT COUNT(*)
FROM Filmes WHERE playing_limit_date > CURDATE();

d)
SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();

e)
SELECT MAX(evaluation)
FROM Filmes;

f)
SELECT MIN(evaluation)
FROM Filmes;

8)
a)
SELECT *
FROM Filmes
ORDER BY name ASC;

b)
SELECT *
FROM Filmes
ORDER BY name DESC
LIMIT 5;

c)
SELECT *
FROM Filmes
WHERE playing_limit_date >= CURDATE() AND release_date <= CURDATE()
ORDER BY release_date DESC 
LIMIT 3;

d)
SELECT *
FROM Filmes
ORDER BY evaluation DESC
LIMIT 3;
