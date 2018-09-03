const defaultopt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'lm',
        default: 10
    }
}
const argv = require('yargs')
                .command('listar','Este comando sirve para listar una tabla de multiplicar', defaultopt)
                .command('crear', 'Crea un archivo con la tabla indicada', defaultopt)
                .help()
                .argv;

module.exports = {
    argv
}