const fs = require('fs') //file system

fs.readFile('arq_apoio.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    else{
        console.log("24/01/2023") 
        console.log(data)
    }
})