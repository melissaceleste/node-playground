// statt export default function jetzt:
module.exports = function random(max = 10) {
  return Math.floor(Math.random() * Math.floor(max + 1))
}
