import React from 'react';
import Card from "./Card.jsx";
import naranja1 from "../assets/naranja 1.jpg";
import naranja2 from "../assets/naranja 2.jpg";
import naranja3 from "../assets/naranja 3.jpg";
import "./Cards.css";

function Cards() {

  const arrCard = [
    {
      id:1,
      title:"Leo Web",
      image: naranja1,
      url:"https://www.freecodecamp.org", 
      text:"This is a website created to show some information about Leo. And this text is used to prove some validations."
    },
    {
      id:2,
      title:"Leo Blog",
      image:naranja2,
      url:"https://www.freecodecamp.org"
    },
    {
      id:3,
      title:"Leo email",
      image:naranja3,
      url:"https://www.freecodecamp.org"
    }
  ]

  return (
    <div className="container d-flex justify-content-center align-items-center mt-2  mb-2 pt-2 pb-2" style={{width:"75vw"}}>
      <div className="row">
        {arrCard.map((cardItem)=>(
          <div className="col-md-4" key={cardItem.id}>
            <Card url={cardItem.url} image={cardItem.image} title={cardItem.title} text={cardItem.text}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
