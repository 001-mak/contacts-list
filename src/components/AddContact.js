import React, { useState } from "react";

function AddContact(props) {
  const [hide, setHide] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All Fields Required");
    } else {
      const contact = { name, email };
      props.handleAddContact(contact);
      setName("");
      setEmail("");
      setHide(true)
    }
  };

  return (
    <>
      <button type="submit" className="btn btn-primary" onClick={()=>setHide(!hide)}>
        Add Contact
      </button>
      {
        hide? null : 
        <div className="contact-list-card">
        <h2>Add Contact</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
          <button type="submit" className="btn btn-danger" onClick={()=>setHide(true)}>Cancel</button>
        </form>
      </div>
        
      }
      
    </>
  );
}

export default AddContact;
