import React, { useState } from "react";
import Items from "../../../data/items";

import LikeBorder from "../../atoms/SVG/LikeSVG/LikeBorder";
import LikeFull from "../../atoms/SVG/LikeSVG/LikeFull";

import "./InformationsItem.scss";

export default function InformationsItem() {
  const [isFavorite, setIsFavorite] = useState(false);

  const switchFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section className="informationsItem">
      <div className="informationsItem_title">
        <h2>{Items.title}</h2>
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

      <h3 className="informationsItem_price">{Items.price}.00€</h3>

      <div className="informationsItem_logistic">
        <h4>Disponibilité : {Items.disponibility}</h4>
        <h4>Référence : {Items.reference}</h4>
        <h4>Tags : {Items.tags.map((tag) => tag).join(", ")}</h4>
      </div>

      <p className="informationsItem_description">{Items.description}</p>

      <ul className="informationsItem_details">
        <li>{Items.disponibilityColors}</li>
        <li>{Items.style}</li>
        <li>{Items.composition}</li>
        <li>{Items.delivery}</li>
      </ul>
    </section>
  );
}
