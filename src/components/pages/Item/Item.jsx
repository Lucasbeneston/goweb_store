import React, { useState } from "react";
import Items from "../../../data/items";
import CarrouselImages from "../../organisms/CarouselImages/CarouselImages";
import InformationsItem from "../../organisms/InformationsItem/InformationsItem";
import InputSelect from "../../atoms/Inputs/InputSelect/InputSelect";
import InputNumber from "../../atoms/Inputs/InputNumber/InputNumber";

import "./Item.scss";

export default function Item() {
  const [isOpen, setIsOpen] = useState({ color: false, size: false });
  // console.log("isOpen : ", isOpen);
  // console.log("Color : ", isOpen.color);
  // console.log("Size : ", isOpen.color);

  return (
    <main className="item" role="main">
      <CarrouselImages />
      <InformationsItem />

      <div className="item_form">
        <InputSelect
          onClickEvent={() => {
            setIsOpen({ ...isOpen, color: !isOpen.color });
          }}
          isOpen={isOpen.color ? "show" : ""}
          id="selectColor"
          label="Couleur"
          defaultOption="Choix couleur"
          array={Items.colors}
        />

        <InputSelect
          onClickEvent={() => {
            setIsOpen({ ...isOpen, size: !isOpen.size });
          }}
          isOpen={isOpen.size ? "show" : ""}
          id="selectSize"
          label="Taille"
          defaultOption="Choix taille"
          array={Items.sizes}
        />

        <div className="item_form_bottom">
          <button className="item_form_bottom_buttonAdd" type="button">
            Ajouter au panier
          </button>
          <InputNumber id="selectQuantity" label="Quantité" defaultOption="0" />
        </div>
      </div>
    </main>
  );
}
