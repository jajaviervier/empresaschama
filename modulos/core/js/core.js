
class Quark {


    constructor () {
        this.rutaActual = "";

          console.log("Quark atomico iniado")
    };

    cambiarRuta(objeto,modulo,archivo){
    $("#" + objeto).load("modulos/" + modulo + "/" + archivo + ".html");
    }

  }

