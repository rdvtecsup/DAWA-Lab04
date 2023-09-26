function calcularDias(fechaObj){
    const fechaHoy = new Date();
    const diferencia = fechaObj - fechaHoy;
    const diasFaltantes = Math.ceil(diferencia / (1000*60*60*24))
    return diasFaltantes;
}
module.exports = {
    calcularDias
}