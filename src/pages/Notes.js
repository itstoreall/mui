import { useState, useEffect } from "react";
import { Container, Grid, Paper } from "@material-ui/core";

const { log } = console;

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5288/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  return (
    <Container>
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
