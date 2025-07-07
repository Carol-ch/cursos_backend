const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cursosRoutes = require('./routes/curso.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect( process.env.MONGODB_URI)
    .then(() => console.log('✅ Conectado a MongoDB correctamente'))
    .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Rutas API
app.use('/api/cursos', cursosRoutes);

// 📘 Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Servidor Express
const PORT = process.env.PORT ||3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
