function parseVars(req) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const parametros = Array.from(url.searchParams.keys());
    const valores = Array.from(url.searchParams.values());
    return {
        parametros,
        valores
    };
}

const batman = {
    identidad: 'Bruce Wayne',
    poder: 'Dinero'
};

module.exports = {
    parseVars,
    batman
};
