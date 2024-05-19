const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está en otro lugar
    user: 'root', // Tu usuario de MySQL
    password: 'root', // Tu contraseña de MySQL
    database: 'atenea' // El nombre de tu base de datos
  });

  connection.connect(err => {
    if (err) {
      console.error('Error conectando a la base de datos:', err);
      return;
    }
    console.log('Conectado a la base de datos MySQL.');
  });

  module.exports=connection