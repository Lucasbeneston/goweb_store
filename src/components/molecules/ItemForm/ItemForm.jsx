import React, { useState } from "react";
import Items from "../../../data/items";
import InputSelect from "../../atoms/Inputs/InputSelect/InputSelect";
import InputNumber from "../../atoms/Inputs/InputNumber/InputNumber";

import "./ItemForm.scss";

export default function ItemForm() {
  const [isOpen, setIsOpen] = useState({ color: false, size: false });

  return (
    <div className="itemForm">
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

      <div className="itemForm_bottom">
        <button className="itemForm_bottom_buttonAdd" type="button">
          Ajouter au panier
        </button>
        <InputNumber id="selectQuantity" label="Quantité" defaultOption="0" />
      </div>
    </div>
  );
}
