import { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import NoteCard from '../components/NoteCard';

// const { log } = console;

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5288/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const handleDelete = async id => {
    await fetch('http://localhost:5288/notes/' + id, {
      method: 'DELETE',
    });

    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
