create table mascotas
(
    id     int AUTO_INCREMENT PRIMARY KEY,
    tipo   ENUM ('perro', 'gato') NOT NULL,
    nombre VARCHAR(30)            NOT NULL,
    color  VARCHAR(30)            not null,
    peso   DECIMAL(5, 2)          NOT NULL COMMENT '999.99'
);

INSERT into mascotas (tipo, nombre, color, peso)
VALUES ('perro',
        'Firulais',
        'blanco',
        7),
       ('gato', 'Tony', 'negro', 7);

SELECT *
from mascotas;