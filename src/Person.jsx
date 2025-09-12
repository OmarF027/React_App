import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray", borderRadius: "8px" }}>
      <h2>Person Component</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={person.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        value={person.lastName}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />
      <h3>
        Full name: {person.firstName} {person.lastName}
      </h3>
    </div>
  );
}

export default Person;
