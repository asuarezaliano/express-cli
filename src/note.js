import { getDB, saveDB, insert } from './db.js';

export const createNote = async (note, tags) => {
  const data = {
    id: Date.now(),
    content: note,
    tags,
  };
  return insert(data);
};

export const getAllNotes = async () => {
  const db = await getDB();
  return db.notes;
};

export const findNotes = async filter => {
  const { notes } = await getDB();

  return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()));
};

export const removeNote = async id => {
  const db = await getDB();
  const match = db.notes.find(note => note.id === id);

  if (match) {
    const newNotes = db.notes.filter(note => note.id !== id);
    await saveDB({ notes: newNotes });
    return id;
  }
};

export const removeAllNotes = async () => saveDB({ notes: [] });
