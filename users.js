var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Esto solo realiza el proceso de autenticación(para el ejemplo),
//pero no tiene elementos de SEGURIDAD
router.post('/login', ( req , res , next )=>{
  //console.log( req.body.email, req.body.passwd );
  usuario.login(req.body.email,req.body.passwd,( e , d )=>{
    if(d) {
      res.send('Login correcto');
      ses=req.session;
      console.log(ses.id);

      //crear la sesion
      /*
      1.-Reutilizar la sesion original del chrome
      2.-hacer una nueva, desecgabdi la de web browser
      */

    } else {
      res.json(e);
    }

  });

});


module.exports = router;
