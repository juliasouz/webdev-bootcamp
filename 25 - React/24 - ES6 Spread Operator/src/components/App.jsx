import { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <div className="input-group">
          <input
            onChange={handleChange}
            name="fName"
            value={contact.fName}
            placeholder=" "
            required
            autoComplete="off"
            type="text"
            id="fName"
          />
          <label htmlFor="fName">First Name</label>
        </div>
        <div className="input-group">
          <input
            onChange={handleChange}
            name="lName"
            value={contact.lName}
            placeholder=" "
            required
            autoComplete="off"
            type="text"
            id="lName"
          />
          <label htmlFor="lName">Last Name</label>
        </div>
        <div className="input-group">
          <input
            onChange={handleChange}
            name="email"
            value={contact.email}
            placeholder=" "
            required
            autoComplete="off"
            type="email"
            id="email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;