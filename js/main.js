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
            //navigator.notification.alert("PhoneGap is working")
			

existe_db=window.localStorage.getItem("existe_db");
db=window.openDatabase("mi_agendita","1.0","Base de dato de mi agenda", 200000);
if(existe_db == null){
	creaDB();
	
}

function creaDB(){
	
	db.transaction(creaNuevaDB,errorDB,creaSuccess);
	
	
	

}
function creaNuevaDB(tx){
	mkLog("Creando base de datos");
	
	tx.executeSql("DROP TABLE IF EXISTS mi_agendita");
	
	
	var sql ="CREATE TABLE IF NO EXISTS mi_agendita ( "+
	"id INTEGER PRIMARY KEY AUTOINCREMET, " +
	"nombre VARCHAR(50), " +
	 "apellidos VARCHAR 50), " +
	 "telefono VARCHAR(50), " +
	 "categoria VARCHAR(50), " +
	 "foto VARCHAR(200), " +
	 "mail VARCHAR(50) ) " ;
	 
	tx.executeSql(sql);
	
		tx.executeSql("INSERT INTO mi_agendita (id, nombre, apellidos, telefono, categoria, foto, mail) VALUES ('1', 'Miguelito', 'Rodriguez', '+584163981767', 'familia','', '', 'pixeladaseg@gmail.com' )");
			tx.executeSql("INSERT INTO mi_agendita (id, nombre, apellidos, telefono, categoria, foto, mail) VALUES ('2', 'Lenina', 'Rodriguez', '+584248339857', 'familia','', '', 'pixeladaseg@gmail.com' )");

}

function creaSuccess() {window.localStorage.setItem("existe_db",1);
	
	}
	function errorDB(err) {
		mkLog("error procesando SQL" + err.code);
		navigator.notification.alert("error procesando SQL" + err.code);
		
		}

			
}