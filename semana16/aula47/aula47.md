### Exercicio aula47

1)
a)
A chave estrangeira é oque permite a relação entre tabelas.
b)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito bom!",
    9,
		"003"
);

c)
Erro 1452 não da pra adicionar ou dar update ja que o id nao existe

d)
ALTER TABLE Movie DROP COLUMN rating;

e)Não permite deletar uma linha "pai" devido a foreign key

2)
a)
Essa tabela permite a relação da tabela movieCast com a Movie.
b)
Criado
c)
erro 1452, não e possivel dar update.
d)
erro 1451 não pode deletar ou dar update em uma linha "pai"

3)
a)
É o operador que junto do join realiza a junção de tabelas.

b)
SELECT m.name, r.id, r.rate
FROM Movies m
JOIN Rating r ON r.id = m.id;

4)
a)
SELECT m.id
b)
SELECT m.id as movie_id, m.name as movie_name, mc.actor_id
FROM Movies m
RIGHT JOIN MovieCast mc ON  mc.actor_id = m.id;
c)
SELECT AVG(Rating.rate), Movies.id, Movies.name FROM Movies
    LEFT JOIN Rating ON Movies.id = Rating.id
    GROUP BY (Movies.id);
5)
a)
São necessarios dois joins por que eh necessario fazer a junção de 3 tabelas em uma só.
b)
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
c)
Da erro devido a uma virgula  em "m,title", deveria ser ponto.

6)
a)
É uma relação M:N
b)
CREATE TABLE Oscar_Awards
(Movie_id VARCHAR(255),
Oscar_id VARCHAR(255),
Award_year INT,
FOREIGN KEY (Movie_id) REFERENCES Movies(id),
FOREIGN KEY (Oscar_id) REFERENCES Oscar(id),
PRIMARY KEY (Movie_id, Oscar_id, Award_year)
);
c)
Exemplo de criação ( se repetiu para ids de filmes diferentes e ids de oscars diferentes)
INSERT INTO Oscar_Awards(Movie_id, Oscar_id, Award_year)
VALUES(
"005",
"001",
2013
);
d)
SELECT m.id, m.name,o.id, o.name
FROM Movies m
LEFT JOIN Oscar_Awards oa ON m.id = oa.Movie_id
JOIN Oscar o ON o.id = oa.Oscar_id;