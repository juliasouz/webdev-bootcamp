import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

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

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note" autoComplete="off" onSubmit={submitNote}>
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}
                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab
                        type="submit"
                        color="primary"
                        aria-label="add"
                        size="small"
                        style={{ boxShadow: "0 2px 8px rgba(245,186,19,0.25)" }}
                    >
                        <AddIcon fontSize="medium" />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;