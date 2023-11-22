import React from 'react'
import './aboutThemes.css'
import Card from "./Card";
import contacts from "./contacts";


function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      prof={contact.linkedin}
      insta={contact.insta}
      info={contact.info}
    />
  );
}


function AboutUs() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className='c2'>
            {contacts.map(createCard)}
      </div>
      <br/>
    </div>
  )
}

export default AboutUs