const express = require('express'); 
const router = express.Router();
const ctrl = require('../controllers/curso.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Curso:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         curso:
 *           type: string
 *         creditos:
 *           type: number
 *         horasSemanal:
 *           type: number
 *         ciclo:
 *           type: string
 *         nombreDocente:
 *           type: string
 *     CursoInput:
 *       type: object
 *       required:
 *         - curso
 *         - creditos
 *         - horasSemanal
 *         - ciclo
 *         - nombreDocente
 *       properties:
 *         curso:
 *           type: string
 *         creditos:
 *           type: number
 *         horasSemanal:
 *           type: number
 *         ciclo:
 *           type: string
 *         nombreDocente:
 *           type: string
 */

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Listar todos los cursos
 *     responses:
 *       200:
 *         description: Lista de cursos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 */
router.get('/', ctrl.getAll);

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Obtener un curso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Curso encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       404:
 *         description: No encontrado
 */
router.get('/:id', ctrl.getById);

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Crear un nuevo curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoInput'
 *     responses:
 *       201:
 *         description: Curso creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 */
router.post('/', ctrl.create);

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Actualizar un curso
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoInput'
 *     responses:
 *       200:
 *         description: Curso actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *       404:
 *         description: No encontrado
 */
router.put('/:id', ctrl.update);

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Eliminar un curso
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Curso eliminado correctamente
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', ctrl.remove);

module.exports = router;

