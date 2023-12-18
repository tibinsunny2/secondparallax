import React from "react";
import { pictures } from "../../Services/Services";
import "./Cards.css";
function Card() {
  return (
    <div className="cardBody">
      <div className="cardwrapper">
        {pictures.images.map((items) => {
          return (
            <div className="cardimages" key={items.id}>
              <img className="image" src={items.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
