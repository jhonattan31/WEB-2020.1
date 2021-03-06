const DisciplinaModel = require('../models/DisciplinaModel');

class DisciplinaService{

    static register(req, res){
        DisciplinaModel.create(req.body)
        .then(
            (disciplinas) => {
                res.status(201).json(disciplinas);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }

    static list(req, res){
        DisciplinaModel.find()
        .then(
            (disciplinas) => {
                res.status(201).json(disciplinas);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }

    static update(req, res) {
        DisciplinaModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
        .then(
            (disciplinas) => {
                res.status(201).json(disciplinas);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

    //retorna o user deletado
    static delete(req, res) {
        DisciplinaModel.findByIdAndRemove(req.params.id)
        .then(
            (disciplinas) => {
                res.status(201).json(disciplinas);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

    //retorna um user
    static retrieve(req, res) {
        DisciplinaModel.findById(req.params.id)
        .then(
            (disciplinas) => {
                res.status(201).json(disciplinas);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

}
module.exports = DisciplinaService