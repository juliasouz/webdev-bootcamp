import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      props.onAdd(note);
      setNote({
        title: "",
        content: "" 
    });
    }
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} title="Add">+</button>
      </form>
    </div>
  );
}

export default CreateArea;