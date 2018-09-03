const argv = require('./config/yargs').argv
const { createTable, createFile } = require('./src/multiplicar');
const colors = require('colors')
let argument = argv._[0];

switch (argument) {
    case 'listar':
        createTable(argv.base, argv.limite)
        .then(msg => console.log(msg))
        .catch(err => console.log(err));
        break;

    case 'crear':
        createFile(argv.base, argv.limite)
        .then(msg => console.log(msg))
        .catch(err => console.log(err +` y por ende no se ha creado el archivo`));
        break;

    default:
        console.log(`No se reconoce el comando '${argument}'`);
        break;
}
