import { useState, useEffect } from "react";

const { log } = console;

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5288/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  return (
    <div>
      {notes.map(note => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
}
