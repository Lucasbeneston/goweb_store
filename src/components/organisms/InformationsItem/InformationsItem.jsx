import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Item from "../../../data/item";
import LikeBorder from "../../atoms/SVG/LikeSVG/LikeBorder";
import LikeFull from "../../atoms/SVG/LikeSVG/LikeFull";

import "./InformationsItem.scss";

export default function InformationsItem() {
  const [isFavorite, setIsFavorite] = useState(false);

  // Change the state of "isFavorite" when the user click on the button
  const switchFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section className="informationsItem">
      <HashLink to="/#">
        <div className="informationsItem_return">
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Retour</span>
        </div>
      </HashLink>
      <div className="informationsItem_title">
        <h2>{Item.title}</h2>
        <div
          className="informationsItem_title_favoriteButton"
          tabIndex={0}
          role="button"
          onKeyDown={switchFavorite}
          onClick={switchFavorite}
        >
          {!isFavorite ? <LikeBorder /> : <LikeFull />}
        </div>
      </div>

      <h3 className="informationsItem_price">{Item.price}.00€</h3>

      <div className="informationsItem_logistic">
        <h4>
          Disponibilité :{" "}
          <span
            className={`informationsItem_logistic_${
              Item.disponibility === "En stock" ? "inStock" : "soldOut"
            }`}
          >
            {Item.disponibility} &#9679;
          </span>
        </h4>
        <h4>Référence : {Item.reference}</h4>
        <h4>Tags : {Item.tags.map((tag) => tag).join(", ")}</h4>
      </div>

      <p className="informationsItem_description">{Item.description}</p>

      <ul className="informationsItem_details">
        <li>{Item.disponibilityColors}</li>
        <li>{Item.style}</li>
        <li>{Item.composition}</li>
        <li>{Item.delivery}</li>
      </ul>
    </section>
  );
}
