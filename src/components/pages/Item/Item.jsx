import React from "react";
import Items from "../../../data/items";
import CarrouselImages from "../../organisms/CarouselImages/CarouselImages";
import InformationsItem from "../../organisms/InformationsItem/InformationsItem";
import InputSelect from "../../atoms/Inputs/InputSelect/InputSelect";

import "./Item.scss";

export default function Item() {
  return (
    <main className="item" role="main">
      <CarrouselImages />
      <InformationsItem />

      <div className="item_form">
        <InputSelect
          id="selectColor"
          label="Couleur"
          defaultOption="Choix couleur"
          array={Items.colors}
        />

        <InputSelect
          id="selectSize"
          label="Taille"
          defaultOption="Choix taille"
          array={Items.sizes}
        />
      </div>
    </main>
  );
}
