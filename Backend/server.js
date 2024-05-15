const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está en otro lugar
    user: 'root', // Tu usuario de MySQL
    password: 'root', // Tu contraseña de MySQL
    database: 'atenea' // El nombre de tu base de datos
  });
  
  // Conectar a la base de datos
  connection.connect(err => {
    if (err) {
      console.error('Error conectando a la base de datos:', err);
      return;
    }
    console.log('Conectado a la base de datos MySQL.');
  });

  app.get('/api/atenea', (req, res) => {
    const query = 'SELECT * from usuarios'; // Ajusta esta consulta según tu necesidad
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error ejecutando la consulta:', err);
        res.status(500).send(err);
        return;
      }
      res.json(results);
    });
  });


  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});