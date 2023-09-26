var http = require('http'),
    fs = require('fs'),
    parser = require('./parser_vars'),
    p = parser.parseVars;
    datos = parser.batman
http.createServer(function(req,res){
    fs.readFile('./views/form.html', function(err, html){
        var html_string = html.toString();
        var resp = p(req),
        parametros = resp['parametros'],
        valores = resp['valores'];
        for(var i = 0; i < parametros.length; i++){
            var html_string = html_string.replace('{'+parametros[i]+'}', valores[i])
        }
        html_string = html_string.replace('{identidad}', datos['identidad'])
        console.log(datos)
        html_string = html_string.replace('{poder}', datos['poder'])
        res.writeHead(200,{'Content-Type':'text'});
        res.write(html_string);
        res.end();
    });
}).listen(8080);