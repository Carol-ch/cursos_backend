const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    curso: { type: String, required: true },
    creditos: { type: Number, required: true },
    horasSemanal: { type: Number, required: true },
    ciclo: { type: String, required: true },
    nombreDocente: { type: String, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Curso', cursoSchema);
