const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNode = notes.find((note)=> note.title === title)
    if (!duplicateNode){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('added a new note'))
    } else {
        console.log(chalk.red.inverse('note title exists!!'))
    }
}

const removeNote = (title) =>  {
    const notes = loadNotes()
    const leftNotes = notes.filter((note) => note.title !== title)
    if (notes.length > leftNotes.length) {
        console.log(chalk.green.inverse('removed note'))
        saveNotes(leftNotes)
    } else {
        console.log(chalk.red.inverse('no note found to remove'))
    }
}

const listNotes = () =>  {
    const notes = loadNotes()
    console.log(chalk.inverse('list your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) =>  {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)
    if (foundNote){
        console.log(chalk.inverse(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.red.inverse('the note does not exist in the database'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports =  {
    listNotes : listNotes,
    addNote : addNote,
    removeNote : removeNote,
    readNote : readNote
}