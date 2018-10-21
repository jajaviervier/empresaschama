

class Usuario {
  
    constructor (nombre) {
    this.t="";
    this.datos=[];
        //Inicializa Firebase
        this.nombre=nombre;
        console.log(this.nombre)
 

    };

    
getNombre(){

   
    return this.nombre;
}


prueba(){
    console.log();
}

    loguear(correo,pass){
        console.log("Logeando" +correo +"Pass"+pass);
        firebase.auth().signInWithEmailAndPassword(correo, pass).catch(function(error) {
            // Manipulacion de error
            var errorCode = error.code;
            var errorMessage = error.message;
         
            console.log(error.code)
            if (error.code == "auth/user-not-found") {
                alertify.error("Usuario no encontrado");
                console.log("Hace falta mas minerales");
            } else {
                if (error.code == "auth/wrong-password") {
                    alertify.error("Pass invalida");
                    console.log("Insuficiente gas vespeno");
                } else {
                    console.log("Chrukut");
                }
            }
            // ...
        });
        }



  }

