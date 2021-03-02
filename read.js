const fs = require('fs') // file sytem, Modul/Objekt was von node mitgeliefert wird

// Variante mit Callbacks (alt)
// module.exports = function read(path) {
//   //log out text from file
//   fs.readFile('hello.js', { encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//       console.log('ERROR', err)
//     } else {
//       console.log(data)
//       /* zeigt mir die Anzahl der Zeilen in der Datei an: console.log(data.split('\n').length) */
//     }
//   })
// }

//funktion bekommt einen Dateipfad übergeben
// mit der Funktion können wir uns den Text einer Datei anzeigen (siehe > node index.js)

// Variante mit promise (moderner)
module.exports = function read(path) {
  fs.promises
    .readFile(path, { encoding: 'utf-8' })
    .then(data => console.log(data.split('\n').length))
    .catch(err => console.log('ERROR', err))
}
