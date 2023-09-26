var http = require('http'),
    fs = require('fs')
var parametros = [],
    valores = []
http.createServer( function(req, res){
    fs.readFile('./views/form.html', function(err, html){
        var html_string = html.toString();
        if (req.url.indexOf('?') > 0) {
            var url_data = req.url.split('?');
            if (url_data.length > 1) { 
                arreglo_parametros = url_data[1].split('&');
            } else {
                arreglo_parametros = [];
            }
        } else {
            arreglo_parametros = [];
        }
        for(var i=0; i<arreglo_parametros.length; i++){
            var parametro = arreglo_parametros[i];
            var param_data = parametro.split('=');
            parametros[i] = param_data[0];
            valores[i] = param_data[1];
        }
        for(var i = 0; i<parametros.length;i++){
            html_string = html_string.replace('{'+parametros[i]+'}', valores[i]);
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(html_string);
        console.log(arreglo_parametros)
        console.log(parametros)
        console.log(valores)
        res.end();
    });
}).listen(8080);