import React, { useState } from "react";
import Items from "../../../data/items";
import InputSelect from "../../atoms/Inputs/InputSelect/InputSelect";
import InputNumber from "../../atoms/Inputs/InputNumber/InputNumber";

import "./ItemForm.scss";

export default function ItemForm() {
  const [isOpen, setIsOpen] = useState({ color: false, size: false });
  const [quantity, setQuantity] = useState(0);
  // Créer un state qui récupère l'information sur la selection ou non des différents inputs color, size et number.
  // Mettre "quantity" dans ce state sous forme d'objet

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
        <InputNumber
          id="selectQuantity"
          label="Quantité"
          onClickIncrease={() => {
            if (quantity < 100) {
              setQuantity(quantity + 1);
            }
          }}
          onClickDecrease={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
          defaultOption={quantity}
        />
      </div>
    </div>
  );
}
