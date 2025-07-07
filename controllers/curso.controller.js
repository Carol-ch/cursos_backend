const service = require('../services/curso.service');

exports.getAll = async (req, res) => {
    res.json(await service.getAll());
};

exports.getById = async (req, res) => {
    const curso = await service.getById(req.params.id);
    if (!curso) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(curso);
};

exports.create = async (req, res) => {
    const curso = await service.create(req.body);
    res.status(201).json(curso);
};

exports.update = async (req, res) => {
    const curso = await service.update(req.params.id, req.body);
    if (!curso) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(curso);
};

exports.remove = async (req, res) => {
    const curso = await service.remove(req.params.id);
    if (!curso) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json({ mensaje: 'Curso eliminado' });
};
