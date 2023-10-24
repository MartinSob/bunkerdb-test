# NodeJS + TypeScript coding exercise

### Introduction

Se requiere desarrollar una api REST en Node JS en versión 20 con Typescript ES6.
El motor de base de datos es MySql
Si se necesita generar algún cambio en base de datos, se debe realizar con algún sistema de migraciones o algún ORM que permita lo mismo.
Se deja totalmente libre la elección de framework o metodología para poder resolverlo.

Se requiere realizar los siguiente endpoints:
- Listar todas las compañías con sus empleados
- Listar una compañía con sus empleados
- Poder agregar una nueva compañía 

También se requiere mejorar la BD para tener una estructura más correcta. La data perteneciente a la BD debe ser la misa que se entregó.

### Usage

This project was developed using [NodeJs](https://nodejs.org/en) and to use it is necessary to:
 - Install dependencies using `npm install`
 - Build the project using `npm run build`
 - Start the project using `npm run start`

This project also uses [MySQL](https://www.mysql.com/). The credentials for the configuration are in the `config/env` files. The username and password should not be there, but for the test purposes I left them in the files.

> It is important to have the MySQL database server started or the server won't be able to connect to the database and fail.

### Endpoints

The documentation for the endpoints can be found in the swagger file and also in the `postman_collection` file.
