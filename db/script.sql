CREATE DATABASE aulabacktds2;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    datadenascimento DATE,
    email VARCHAR(100) NOT NULL,
    idade INTEGER,
    signo VARCHAR(100) NOT NULL

);

INSERT INTO usuarios (nome,sobrenome, datadenascimento, email, idade, signo) VALUES ('noah', 'Meirelles','20-02-2007', 'noah@gmail.com',17, 'peixes');