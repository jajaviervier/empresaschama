  //aqui van las credenciales
  var rutas = {};
  var maquinas = [];
  var llaveMaquinas = [];
  var estadoMaquinas = [];
  var config = {
    apiKey: "AIzaSyC4zznl3cBEZzQtEqPeNnjZyAYC8QKkjBo",
    authDomain: "enfermos-99cdf.firebaseapp.com",
    databaseURL: "https://enfermos-99cdf.firebaseio.com",
    projectId: "enfermos-99cdf",
    storageBucket: "enfermos-99cdf.appspot.com",
    messagingSenderId: "571495473661"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  //aqui van las credenciales
  var rutacuentas = "sistema/cuentas/";
  firebase.auth().onAuthStateChanged(function(user) {
      console.log(user)
      if (user) {
          cargarBarra("barraNavegacion", "barraNavegacion", "barraNavegacion");
          // cargadorModulo('app', 'locales', 'todosLosLocales');
          db.ref(rutacuentas).orderByKey().equalTo(firebase.auth().currentUser.uid).once('value', function(datosuser) {
              datosuser.forEach(function(itemuser) {
                  sessionStorage.tipocredencial = itemuser.val().tipo;
                  sessionStorage.nombreusuario = itemuser.val().nombre;
                  sessionStorage.localcredencial = itemuser.val().local;
                  rutas.admin = firebase.auth().currentUser.uid;
                  rutas.jornadas = 'sistema/jornadas/' + sessionStorage.localcredencial + '/';
                  validarJornada();
                  cargarmaquinas();
              })
              if (sessionStorage.tipocredencial == "admin") {
                  // lo tira al panel de admin  
                  firebase.auth().signOut();
              } else {
                  if (sessionStorage.tipocredencial == "trabajador") {
                      // lo tira al panel de caja
                      // An error happened.
                  } else {
                      // no lo tira a ningun lado y lo desconecta
                  }
              }
          })
      } else {
          location.href = "../index.html"
          console.log("no logeado")
      }
  });


  cajaBaseReferenciall=0;
  cajaBasePorRecuperar=0;
    db.ref('sistema/locales/' +"coyhaique").once('value', function(datCo) {
        console.log(cajaBaseReferenciall+"Caja base "+datCo.val().cajaBase)
        cajaBaseReferenciall=datCo.val().cajaBase;
        
    })


  function cargarmaquinas() {

      db.ref('sistema/maquinas/' + sessionStorage.localcredencial).once('value', function(datmaq) {
          datmaq.forEach(function(itemMaq) {
              console.log(itemMaq.val());
              llaveMaquinas.push(itemMaq.key);
              maquinas.push(itemMaq.val().numMaquina);
              estadoMaquinas.push(false)
          })
      })
  }

  function cerrarsession() {
      alertify.confirm('Cerrar Session', 'Esta seguro que desea cerrar sesion?', function() {
          firebase.auth().signOut();
      }, function() {})
  }