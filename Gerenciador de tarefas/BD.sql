create database tarefas;

CREATE TABLE tarefa (
  id_tarefa INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  tarefa VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  vencimento date NOT NULL,
  prioridade VARCHAR (200) NOT NULL,
  PRIMARY KEY(id_tarefa)
);