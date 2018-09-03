const fs = require('fs'); 

let createTable = async(num, lim = 10) =>{

    if (!Number(num)) {
        throw new Error(`"${num}" no es un numero`)
    }
    let data = '';
    for (let index = 1; index <= lim; index++) {
        data += `${num} * ${index} = ${num * index} \n`;
    }
    return data; 
}

let createFile = async(data, data1 = 10) =>{
    let gravar = await createTable(data, data1);
    fs.writeFile(`tabla-del-${data}.txt`, gravar, (err) => {
        if (err) throw err;
        console.log(`La tabla del ${data} fue creada satisfactoriamente.`);
    });
}

module.exports = {
    createTable,
    createFile
}
