const Curso = require('../models/curso.model');

const getAll = () => Curso.find();

const getById = (id) => Curso.findById(id);

const create = (data) => Curso.create(data);

const update = (id, data) => Curso.findByIdAndUpdate(id, data, { new: true });

const remove = (id) => Curso.findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, remove };
