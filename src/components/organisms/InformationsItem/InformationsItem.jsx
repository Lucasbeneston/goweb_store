import React from "react";
import Items from "../../../data/items";

import "./InformationsItem.scss";

export default function InformationsItem() {
  return (
    <section className="informationsItem">
      <h2 className="informationsItem_title">{Items.title}</h2>

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
