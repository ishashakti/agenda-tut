// JavaScript Document
/* 
* sistema de logs 
*/
var i_log = 0;
function mkLog(text){
	var date = new Date();
	var txt = i_log + " - " + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds() + ": " + text;
	i_log++;
	console.log(txt);
	//$("#log").append(txt  + "<br>");
}
var existe_db
var db


 function onBodyLoad(){       
            document.addEventListener("deviceready", onDeviceReady, false);
 }

 function onDeviceReady()
 {
mkLog("Aplicacion cargada");
            

existe_db=window.localStorage.getItem("existe_db");
db=window.openDatabase("agenda_curso","1.0","Base de dato de mi agenda", 200000);
if(existe_db == null){
	creaDB();
	
}

function creaDB(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
	
}
function creaNuevaDB(tx){
	mkLog("Creando base de datos");
	
	tx.executeSql("DROP TABLE IF EXISTS agenda_curso");
	
var sql = "CREATE TABLE IF NOT EXISTS agenda_curso ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"nombre VARCHAR(50), " +
		"apellidos VARCHAR(50), " +
		"telefono VARCHAR(30), " +
		"categoria VARCHAR(30), " +
		"foto VARCHAR(200), " + 
		"email VARCHAR(30) )";
	 
	tx.executeSql(sql);
		tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (2,'Siro','González','+34555434567','familia','','siro@test.com')");
	tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (3,'Julio','Rodríguez','+34756222666','trabajo','','julio@test.com')");
}

function creaSuccess() {
	window.localStorage.setItem("existe_db",1);
	
	}
function errorDB(err){
	mkLog("Error procesando SQL " + err.code);
	navigator.notification.alert("Error procesando SQL " + err.code);
}

			
}