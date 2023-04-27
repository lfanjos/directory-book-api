const errorHandler = (err, req, res, next) => {
    switch (res.statusCode) {
        case 400:
            res.json(buildError('Bad Request', err.message));
            break;
        case 404:
            res.json(buildError('Not Found', err.message));
        default:
            break;
    }
};

function buildError(title, message) {
    return { error: title, message };
}

module.exports = errorHandler;
