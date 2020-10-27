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