CREATE DATABASE apiemployees;
CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    idEmployee TEXT,
    fullname TEXT,
    occupation TEXT,
    idBoss TEXT
);
-- ALTER TABLE employees DROP COLUMN boss;
-- ALTER TABLE employees CHANGE boss idBoss;
-- ALTER TABLE employees ADD boss TEXT;
-- ALTER TABLE nombre_tabla RENAME nombre_nuevo_tabla;
-- DELETE FROM employees WHERE id=1;
-- UPDATE books SET title=$1 WHERE section=$2;
-- INSERT INTO books(section, title, autor) VALUES($1, $2, $3);
-- SELECT * FROM books;
-- INSERT INTO employees(idEmployee, fullname, occupation, idBoss) VALUES
-- ('1234', 'Carlos Medina', 'lider recursos humanos', '2345');