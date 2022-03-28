# RetoCarvajalNodejs
### Información 
Implementación del reto Carvajal 4.0 con NodeJS, Angular y PostgreSQL
<h3>Instalacion</h3>
<h5>Base de datos</h5>
Para la instalación de la base de datos  debemos tener PostgreSQL
<li>Crear una base de datos con el nombre de RetoCarvajal</li>
 ` create database RetoCarvajal `
 
<li>Utilizar la base de datos RetoCarbajal.</li>
<li>Crear tabla de prodcutos con los campos correspondientes  o ejecutar la siguente Query.</li>
` create table productos (
	Id serial not null primary key,
	nombre varchar(100) not null,
	precio decimal  not null,
	cantidadStock int not null)
` 

<h5>Node js </h5>
Tener un editor de codigo o una consola de comandos que nos permita trabajar con los los comandos de npm y nodejs.
<li>ubicarse en la carpeta backend</li>
<li>Ejecutar el comando ` npm i ` para instalar las librerias utilizadas por el proyecto.<li>
