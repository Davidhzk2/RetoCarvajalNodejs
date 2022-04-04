# RetoCarvajalNodejs
### Información 
Implementación del reto Carvajal 4.0 con NodeJS, Angular y PostgreSQL
### Instalacion
Se debe tener el proyecto en la maquina ya sea clonado o descargado del repositorio, tambien se debe contar con nodejs y Angular instalado 
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
- Tener en cuenta las credenciales (usuario, contraseña, puerto) de Postgres  para luego utilizarlas en la conexión con la base de datos del proyecto.

#### Node js
Tener un editor de codigo o una consola de comandos que nos permita trabajar con los los comandos npm y nodejs.
- Aseguarse de tener el repositorio o el proyecto descargado o clonado en la maquina.
- Ubicarse en la carpeta backend
- Ejecutar el comando *` npm i `* en la terminal de comandos  para instalar las librerias utilizadas por el proyecto.
- Ejecutar el comando *` npm start `* en la terminal de comandos para inicializar el servidor de nodeJS.

#### Angular 
- Ubicarse en la carpeta Frontend
- Ejecutar el comando *`ng serve`* en la terminal de comandos para inicializar el servidor de nodeJS.
