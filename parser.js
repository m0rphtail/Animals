const fs = require('fs')
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}
jsonReader('./vitals.json', (err, animal) => {
    if (err) {
        console.log('Error reading file:',err)
        return
    }
    let O = animal.order_count;
    exports.order = O;
fs.writeFile('./vitals.json', JSON.stringify(animal, null, 2), (err) => {
        if (err) console.log('Error writing file:', err)
    })
})