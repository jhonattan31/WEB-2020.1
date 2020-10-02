var mongoose = require('mongoose');

var DisciplinaScheema = mongoose.Schema(
    {
        Nome: {type: String, required: true, max: 100},
        Curso: {type: String, required: true, max: 100},
        Capaciadade: {type: Number, required: true}
    }
);

var DisciplinaModel = mongoose.model('disciplinas', DisciplinaScheema);

module.exports = DisciplinaModel;