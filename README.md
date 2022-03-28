# RetoCarvajalNodejs
### Información 
Implementación del reto Carvajal 4.0 con NodeJS, Angular y PostgreSQL
### Instalacion
#### Base de datos
Para la instalación de la base de datos  debemos tener PostgreSQL
- Crear una base de datos con el nombre de RetoCarvajal
 	*` create database RetoCarvajal `*
- Utilizar la base de datos `RetoCarvajal`
- Crear tabla de prodcutos con los campos correspondientes  o ejecutar la siguente Query.
	  *`create table productos (
        	Id serial not null primary key,
        	nombre varchar(100) not null,
        	precio decimal  not null,
        	cantidadStock int not null 
   	 )`*
- Tener en cuenta las credeciales (usuario, contraseña,puerto ) de Postgres  para luego utilizarlar en la conexión del proyecto

#### Node js
Tener un editor de codigo o una consola de comandos que nos permita trabajar con los los comandos npm y nodejs.
- Ubicarse en la carpeta backend
- Ejecutar el comando *` npm i `* para instalar las librerias utilizadas por el proyecto.
- Ejecutar el comando *` npm start `* para inicialisar el servidor de nodeJS.
