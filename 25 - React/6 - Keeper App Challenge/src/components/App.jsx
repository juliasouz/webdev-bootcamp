import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
  const [notesState, setNotes] = useState(notes);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, { ...newNote, key: Date.now() }];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <main>
        <CreateArea onAdd={addNote} />
        <div className="notes-container">
          {notesState.map((noteItem, index) => (
            <Note
              key={noteItem.key || index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;