const fs = require('fs');
const path = require('path');
const moduloHora = require('./mod_horas');
const moduloDiasFaltantes = require('./mod_dias');
module.exports = {
    enrutar: function(url, res) {
        let pagina;
        if (url === '/hora') {
            pagina = 'hora.html';
            const filePath = path.join(__dirname, 'public', pagina);
            fs.readFile(filePath, function(err, contenido) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('404 - Página no encontrada');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(contenido);
                }
            });
        } else if (url.startsWith('/fecha/')) {
            const fechaObj = url.substring(7); 
            const diasFaltantes = moduloDiasFaltantes.calcularDias(fechaObj);
            pagina = 'fecha.html';
            const filePath = path.join(__dirname, 'public', pagina);
            fs.readFile(filePath, function(err, contenido) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('404 - Página no encontrada');
                } else {
                    const paginaHTML = contenido.toString().replace('{fecha}', diasFaltantes);
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(paginaHTML);
                }
            });
        }
            const filePath = path.join(__dirname, 'public', pagina);
            fs.readFile(filePath, function(err, contenido) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('404 - Página no encontrada');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(contenido);
                }
            });
        }
    };
    