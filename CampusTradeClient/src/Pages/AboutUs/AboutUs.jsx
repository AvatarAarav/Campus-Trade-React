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
      <div className="container">
        <h1 className="heading">Team Members</h1>
          <div className="row justify-content-center">
            {contacts.slice(0, 3).map(createCard)} 
          </div>

          <div className="row justify-content-center">
            {contacts.slice(3, 5).map(createCard)}
          </div>
          <br/><br/><br/><br/><br/>
      </div>
    </div>
  )
}

export default AboutUs