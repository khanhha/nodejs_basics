const yargs = require('yargs')
const notelib = require('./notelib.js')

yargs.version('1.1.0')

yargs.command({
        command: 'add',
        describe : 'add a new note',
        builder : {
            title: {
                describe: 'the new note title',
                type : 'string',
                demandOption : true
            },
            body: {
                describe : 'the body of the new note',
                type : 'string',
                demandOption : false
            }
        },
        handler : function (argv) {
            //console.log('adding a new note:', argv)
            notelib.addNote(argv.title, argv.body)
        }
})

yargs.command({
    command : 'remove',
    describe : 'remove a note',
    builder : {
        title : {
            describe : 'title to remove',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        //console.log('removing a note')
        notelib.removeNote(argv.title)
    }
})


yargs.command({
    command : 'list',
    describe : 'list all nodes',
    handler : function() {
        //console.log('listing all the notes')
        notelib.listNotes()
    }
})

yargs.command({
    command : 'read',
    describe : 'read a note',
    builder : {
        title : {
            describe: 'note title to read',
            type : 'string',
            demandOption : true
        }
    },
    handler : function(argv) {
        //console.log('read a note')
        notelib.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)