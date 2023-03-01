import React, { useState } from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  let newContacts=[];
  const[search,setSearch]=useState('');
  const handleSearch=()=>{
    if(props.contacts && search!==''){
       newContacts= props.contacts.filter((contact)=>{
       return Object.values(contact).join(' ').toLowerCase().includes(search.toLowerCase())
      })
    }
  }
  
  return (
    <>
      <div className="contact-list-card">
        <div className=" heading row">
        <h1 className="col">Contact List</h1>
        <input className="form-control me-2 col" type="search" placeholder="Search Contact" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        </div>
        {handleSearch()}
        {props.contacts &&  search==='' && props.contacts.map((contact,index) => {
        return <ContactCard contact={contact} key={index} delete={props.delete}/>;
      })}

        {props.contacts &&  search!=='' && newContacts.map((contact,index) => {
        return <ContactCard contact={contact} key={index}/>;
      })}
      </div>
    </>
  );
}

export default ContactList;
