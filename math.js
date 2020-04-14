//para exportar crear objeto

const Math = {};

function add(x1, x2) {
    return x1 + x2;
};

function substract(x1, x2) {
    return x1 - x2;
};

function multiply(x1, x2) {
    return x1 * x2;
};

function divide(x1, x2) {
    if (x2 == 0) {
        console.log('no se puede dividir por 0')
    } else {
        return x1 / x2;
    }
};
/*exports.add = add;
exports.substract = substract;
exports.divide = divide;
exports.multiply = multiply;*/

//agregando funciones al objeto
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//exportar objeto
module.exports = Math;