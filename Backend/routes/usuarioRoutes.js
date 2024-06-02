const express = require('express');
const router = express.Router();
const connection = require('../config/database');

router.get('/datos', (req, res) => {
    const query = 'SELECT user_id, nombre, correo, contraseña AS contrasena, admin FROM usuarios';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.status(200).json({ success: true, message: 'Usuarios encontrados', data: results, status: 200 });
    });
});

router.delete('/datos/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM usuarios WHERE user_id = ?';
    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.status(200).json({ success: true, message: 'Usuario borrado', data: results, status: 200 });
    });
});

router.put('/datos/:id', (req, res) => {
    const userId = req.params.id;
    const { nombre, correo, contrasena, admin } = req.body;
    const query = 'UPDATE usuarios SET nombre = ?, correo = ?, contraseña = ?, admin = ? WHERE user_id = ?';
    connection.query(query, [nombre, correo, contrasena, admin, userId], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.status(200).json({ success: true, message: 'Usuario actualizado', data: results, status: 200 });
    });
});

router.get('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM usuarios WHERE user_id = ?';
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
    const queryInsert = 'INSERT INTO usuarios VALUES (?, ?, ?, ?, ?)';
    
    connection.query(query, [mail], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).json({ success: false, message: 'Error ejecutando la consulta', error: err, status:500 });
            return;
        }
        
        if (results.length === 0) {
            connection.query(queryInsert, [null, name, mail, passw,0], (err, results) => {
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

router.get('/login/:datos', (req, res) => {
    const datos = JSON.parse(decodeURIComponent(req.params.datos));
    const mail = datos.mail;
    const passw = datos.password;
    const query = 'SELECT user_id,nombre,correo FROM usuarios WHERE correo = ? AND contraseña = ?';
    connection.query(query, [mail,passw], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).json({ success: false, message: 'Error ejecutando la consulta', error: err, status:500 });
            return;
        }
        if (results.length === 0) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).json({ success: false, message: 'Error consulta nula', error: err, status:500 });
            return;
        }
        res.status(200).json({ success: true, message: 'Usuario encontrado', data: results[0],status:200 });
    });
});

router.get('/lessonsTypes', (req, res) => {
    const query = 'select distinct tipo_curso from cursos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.status(200).json(results);
    });
});

router.get('/lessonsByType/:datos', (req, res) => {
    const datos = JSON.parse(decodeURIComponent(req.params.datos));
    const query = 'select nombre_curso,img from cursos where tipo_curso = ?';
    connection.query(query, [datos], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).json({ success: false, message: 'Error ejecutando la consulta', error: err, status:500 });
            return;
        }
        if (results.length === 0) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).json({ success: false, message: 'Error consulta nula', error: err, status:500 });
            return;
        }
        res.status(200).json(results);
    });
});

router.get('/adminLogin/:datos', (req, res) => {
    const datos = JSON.parse(decodeURIComponent(req.params.datos));
    const mail = datos.mail;
    const passw = datos.password;
    const query = 'SELECT user_id,nombre,correo FROM usuarios WHERE correo = ? AND contraseña = ? AND ADMIN=1';
    connection.query(query, [mail,passw], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).json({ success: false, message: 'Error ejecutando la consulta', error: err, status:500 });
            return;
        }
        if (results.length === 0) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).json({ success: false, message: 'Error consulta nula', error: err, status:500 });
            return;
        }
        res.status(200).json({ success: true, message: 'Usuario encontrado', data: results[0],status:200 });
    });
});
module.exports = router;