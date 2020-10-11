var express = require('express');
var router = express.Router();

const disciplinasDB = require('../data/disciplinas.json');

/* GET requeriments listing. */
router.get('/', function(req, res, next) {
  res.render('faltas', { title: 'Aluno Online', disciplinas: disciplinasDB.data });
});


module.exports = router;
