const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/estado', (req, res) => {
    res.json({
        funcionando: true,
        mensaje: 'Servidor de control de asistencias funcionando'
    });
});

app.post('/api/estado', (req, res) => {
    const { empleado, tipo, hora } = req.body;

    if (!empleado || !tipo || !hora){
        return res.status(400).json({
            error: 'Faltan datos: empleado, tipo u hora'
        });
    }
    res.status(200).json({
        mensaje: 'Datos recibidos correctamente',
        asistencia: {
            empleado,
            tipo,
            hora
        }
    });
});
app.listen(PORT, '127.0.0.1', () => {
    console.log('Servidor activo en http://127.0.0.1:${PORT}');
});