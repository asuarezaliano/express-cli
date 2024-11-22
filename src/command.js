import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { createNote, getAllNotes, findNotes, removeNote, removeAllNotes } from './note.js';

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    yargs => {
      return yargs.positional('note', {
        describe: 'The content of the note you want to create',
        type: 'string',
      });
    },
    async argv => {
      const tags = argv.tags ? argv.tags.split(',') : [];
      const note = await createNote(argv.note, tags);
      console.log(`Note created with id ${note.id}`);
    }
  )
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note',
  })
  .command(
    'all',
    'get all notes',
    () => {},
    async argv => {
      return await getAllNotes();
    }
  )
  .command(
    'find <filter>',
    'get matching notes',
    yargs => {
      return yargs.positional('filter', {
        describe: 'The search term to filter notes by, will be applied to note.content',
        type: 'string',
      });
    },
    async argv => {
      await findNotes(argv.filter);
    }
  )
  .command(
    'remove <id>',
    'remove a note by id',
    yargs => {
      return yargs.positional('id', {
        type: 'number',
        description: 'The id of the note you want to remove',
      });
    },
    async argv => {
      await removeNote(argv.id);
      console.log(`Note with id ${argv.id} removed`);
    }
  )
  .command(
    'web [port]',
    'launch website to see notes',
    yargs => {
      return yargs.positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number',
      });
    },
    async argv => {
      const notes = await getAllNotes();
      start(notes, argv.port);
    }
  )
  .command(
    'clean',
    'remove all notes',
    () => {},
    async argv => {
      await removeAllNotes();
      console.log('All notes removed');
    }
  )
  .demandCommand(1)
  .parse();
