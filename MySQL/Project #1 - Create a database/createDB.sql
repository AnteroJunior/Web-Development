CREATE DATABASE blog;
USE blog;

CREATE TABLE usuario(
    id_usuario int auto_increment primary key,
    email varchar(100) not null,
    senha varchar(12) not null,
    p_nome varchar(30) not null,
    s_nome varchar(50) not null,
    sexo char not null
);

CREATE TABLE postagem(
    id_postagem int auto_increment primary key,
    titulo varchar(120) NOT NULL,
    conteudo text not null,
    autor int,
    foreign key (autor) references usuario(id_usuario)
);

create table comentario(
    id_comentario int auto_increment primary key,
    corpo text not null,
    postagem int,
    foreign key (postagem) references postagem(id_postagem)
);
