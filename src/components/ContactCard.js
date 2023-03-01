import React from "react";
import { MdDelete } from "react-icons/md";

function ContactCard(props) {
  const { name, email,id } = props.contact;
  return (
    <div className="contact-list">
        <div className="contact-img">
          <h1>{name[0]}</h1>
        </div>
        <div className="name-email">
          <h5>{name}</h5>
          <p>{email}</p>
        </div>
        <div className="actions">
          <MdDelete onClick={()=>props.delete(id)}/>
      </div>
    </div>
  );
}

export default ContactCard;
