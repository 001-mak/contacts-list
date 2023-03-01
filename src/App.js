import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
function App() {
  const LS_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const handleAddContact = (contact) => {
    const id = contacts.length;
    setContacts([...contacts, { id, ...contact }]);
  };

  const deleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <div className="main-section">
        <Header />
        <AddContact handleAddContact={handleAddContact} />
        <ContactList contacts={contacts} delete={deleteContact} />
      </div>
    </>
  );
}
export default App;
