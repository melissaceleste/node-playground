// normalerweise nach ES6 module Syntax(ESM Syntax): import hello from './hello'

// jetzt aber so: require/commonjs syntax
const hello = require('./hello')

hello()

// das gleiche wie:
// require('./hello')() --> sprich direkt ausführen  und nicht erst in einer Konstante speichern

const random = require('./random')
const max = Number(process.argv[2])
console.log(random(max))
