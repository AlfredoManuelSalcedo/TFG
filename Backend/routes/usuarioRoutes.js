const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// Ruta para obtener todos los datos
router.get('/datos', (req, res) => {
    const query = 'SELECT * FROM usuarios'; // Ajusta esta consulta según tu necesidad
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

// Ruta para obtener un usuario específico por ID
router.get('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM usuarios WHERE user_id = ?'; // Ajusta esta consulta según tu necesidad
    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send(err);
            return;
        }
        if (results.length === 0) {
            res.status(404).send({ message: 'Usuario no encontrado' });
            return;
        }
        res.json(results[0]);
    });
});

router.get('/register/:datos', (req, res) => {
    const datos = JSON.parse(decodeURIComponent(req.params.datos));
    const mail = datos.mail;
    const name = datos.nombre;
    const passw = datos.password;
    const query = 'SELECT * FROM usuarios WHERE correo = ?';
    const queryInsert = 'INSERT INTO usuarios VALUES (?, ?, ?, ?)';
    
    connection.query(query, [mail], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).json({ success: false, message: 'Error ejecutando la consulta', error: err, status:500 });
            return;
        }
        
        if (results.length === 0) {
            connection.query(queryInsert, [null, name, mail, passw], (err, results) => {
                if (err) {
                    console.error('Error ejecutando la consulta:', err);
                    res.status(500).json({ success: false, message: 'Error ejecutando la consulta', error: err,status:500 });
                    return;
                }
                res.status(201).json({ success: true, message: 'Usuario registrado correctamente', status:201});  
            });
            return;
        }
        res.status(200).json({ success: true, message: 'Usuario encontrado', data: results[0],status:200 });
    });
});
module.exports = router;