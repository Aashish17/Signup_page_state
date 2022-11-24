import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeField(event) {
    const name = event.target.name;
    const entry = event.target.value;

    setContact((preVal) => {
      if (name === "fName") {
        return {
          fName: entry,
          lName: preVal.lName,
          email: preVal.email
        };
      } else if (name === "lName") {
        return {
          fName: preVal.fName,
          lName: entry,
          email: preVal.email
        };
      } else if (name === "email") {
        return {
          fName: preVal.email,
          lName: preVal.lName,
          email: entry
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={changeField}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={changeField}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={changeField}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
