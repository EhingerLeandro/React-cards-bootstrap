import React from "react"; 
import PropTypes from "prop-types";
import "./Card.css";  

// eslint-disable-next-line react/prop-types
export default function Card ({image, title, url, text}){
    return(
        <div className="card text-center mt-2 mb-2 bg-dark" >
            <div className="overflow">
                <img className="img-fluid card-img-top" src={image} alt="" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary " style={{fontSize:"3vh"}}>
                    { text ? text :
                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corporis nemo, fugit sequi praesentium voluptate."
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary " target="blank">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes={
    title:PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.string
}