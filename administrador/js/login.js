  //aqui van las credenciales
fechaActual=""
  jornadas = [];
  turnos = []
  var config = {
    apiKey: "AIzaSyC4zznl3cBEZzQtEqPeNnjZyAYC8QKkjBo",
    authDomain: "enfermos-99cdf.firebaseapp.com",
    databaseURL: "https://enfermos-99cdf.firebaseio.com",
    projectId: "enfermos-99cdf",
    storageBucket: "enfermos-99cdf.appspot.com",
    messagingSenderId: "571495473661"
  };
  sessionStorage.localactual="coyhaique"
  firebase.initializeApp(config);
  var db = firebase.database();
  //aqui van las credenciales
  var rutacuentas = "sistema/cuentas/";
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          datosLocales = [];
          cargarBarra("barraNavegacion", "barraNavegacion", "barraNavegacion");
          cargadorModulo('app', 'locales', 'localSeleccionado');
          db.ref(rutacuentas).orderByKey().equalTo(firebase.auth().currentUser.uid).once('value', function(datosuser) {
              datosuser.forEach(function(itemuser) {
                  sessionStorage.tipocredencial = itemuser.val().tipo;
                  sessionStorage.nombreusuario = itemuser.val().nombre;
              })
              if (sessionStorage.tipocredencial == "admin") {
                  // lo tira al panel de admin
              } else {
                  if (sessionStorage.tipocredencial == "trabajador") {
                      // lo tira al panel de caja
                      firebase.auth().signOut();
                      // An error happened.
                  } else {
                      // no lo tira a ningun lado y lo desconecta
                  }
              }
          })
      } else {
          location.href = "../index.html"
      }
  });




  function cerrarsession() {
      alertify.confirm('Cerrar Session', 'Esta seguro que desea cerrar session?', function() {
          firebase.auth().signOut();
      }, function() {})
  }