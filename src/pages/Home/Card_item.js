import React from "react";

function CardItem(props) {
  return (
    <li className="cards__item">
      <div className="cards__item__link">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <a href={props.href}><img className="cards__item__img" alt="Member" src={props.src}/></a>
        </figure>
        <div className="cards__item__info">
          <p className="cards__item__text">{props.text}</p>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
