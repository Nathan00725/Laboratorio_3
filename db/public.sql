-- Active: 1705366816117@@localhost@5432@api_zoologico@public

create table tbl_tipo_pokemon
(
    id SERIAL PRIMARY KEY, 
    nombre varchar(200),
    creado TIMESTAMP DEFAULT current_timestamp 
);

create table tbl_entrenador
(
    id SERIAL PRIMARY KEY, 
    nombre varchar(200),
    creado TIMESTAMP DEFAULT current_timestamp 
);

SELECT tbl_entrenador

create table tbl_pokemones
(
    id serial primary key,
    nombre varchar (500),
    sonido varchar (10),
    id_tipo int REFERENCES tbl_tipo_pokemon(id),
    id_nombre int REFERENCES tbl_entrenador(id),
    creado TIMESTAMP DEFAULT current_timestamp
 );




DROP TABLE tbl_tipo_pokemon

delete FROM  tbl_entrenador 


select  a.id, 
                 a.nombre as nombre_pokemones, 
                 a.sonido, 
                 b.nombre as nombre_tipo
            from tbl_pokemones a
            inner join tbl_tipo_pokemon b 
            on a.id_tipo = b.id
            


select  a.id, 
                 a.nombre as nombre_pokemones, 
                 a.sonido, 
                 d.nombre as nombre_entrenador  
            from tbl_pokemones a
            inner join tbl_entrenador d 
            on a.id_nombre = d.id

         
 select  a.id, 
                 a.nombre as nombre_pokemones, 
                 a.sonido, 
                 b.nombre as nombre_tipo
            from tbl_pokemones a
            inner join tbl_tipo_pokemon b 
            on a.id_tipo = b.id

 SELECT a.id, 
       a.nombre as nombre_pokemon, 
       a.sonido, 
       b.nombre as nombre_tipo,
       d.nombre as nombre_entrenador
from tbl_pokemones a
 inner join tbl_tipo_pokemon b on a.id_tipo = b.id
  inner join tbl_entrenador d 
            on a.id_nombre = d.id



SELECT a.id,
       a.nombre AS nombre_pokemones,
       a.sonido,
       b.nombre AS nombre_tipo,
       d.nombre AS nombre_entrenador
FROM tbl_pokemones a
LEFT JOIN tbl_tipo_pokemon b ON a.id_tipo = b.id
LEFT JOIN tbl_entrenador d ON a.id_nombre = d.id;


   