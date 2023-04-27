const debugRequest = (req) => {
    console.log(`Requisição recebida.
    METHOD: ${req.method}
    ENDPOINT: ${req.url}`);
};

module.exports = debugRequest;
