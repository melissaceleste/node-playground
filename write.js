#!/usr/bin/env node

// hiermit erzeuge ich eine neue .json Datei (hier tools.json) mit dem Inhalt tools=

const fs = require('fs') //nutz das File-System
const { exit } = require('process') // um das Programm zu beenden mit 1 oder 0

const file = 'tools.json' // schreibt in die file hier // wo diese Datei liegen soll
const tool = process.argv[2] // um uns was rauszuholen // holen wir uns aus den argumenten mit dem der Prozess gestartet ist
// Beispieldaten: const data = [{ name: 'vim' }]
const scorerating = process.argv[3]

fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
  // bitte öffne Datei tools.js - ist in utf 8 formatiert..
  err && exit(1) // wenns ein Fehler gibt, rufe exit code mit 1 auf
  const tools = JSON.parse(data) // Damit wir den String verarbeiten können muss der ein Array sein -  Inhalt wandeln wir in ein array hiermit um
  tools.push({ name: tool, score: scorerating }) // füge diesem Array mit push ein weiteres Objekt hinzu

  fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
    // damit ich das in eine Datei jetzt schreiben kann, muss es wieder zurück in ein String umgewandelt werden (grad ist es ja ein Array) - das mache ich hiermit
    exit(err ? 1 : 0)
  }) // erzeugen eines Strings - hiermit speichern wir die Datei wieder
})

// weitere schreibweise Sreenshot 15:39
