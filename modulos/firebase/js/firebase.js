
  console.log("Validndo el estado de la sonda");
  class FB {
      constructor () {
          //Inicializa Firebase
 
          firebase.initializeApp({
            apiKey: "AIzaSyC4zznl3cBEZzQtEqPeNnjZyAYC8QKkjBo",
            authDomain: "enfermos-99cdf.firebaseapp.com",
            databaseURL: "https://enfermos-99cdf.firebaseio.com",
            projectId: "enfermos-99cdf",
            storageBucket: "enfermos-99cdf.appspot.com",
            messagingSenderId: "571495473661"
          });
          this.conexion = firebase.firestore(); 
          console.log("Base de datos sincronizada!");  
             
      };
  

      db(){
          return this.conexion;
      }

    }