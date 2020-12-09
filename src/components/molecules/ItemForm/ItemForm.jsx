import React, { useContext, useState, useEffect } from "react";
import Items from "../../../data/items";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import InputSelect from "../../atoms/Inputs/InputSelect/InputSelect";
import InputNumber from "../../atoms/Inputs/InputNumber/InputNumber";

import "./ItemForm.scss";

export default function ItemForm() {
  const { addItem } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState({ openColor: false, openSize: false });
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedValues, setSelectedValues] = useState({
    id: null,
    title: Items.title,
    price: Items.price,
    color: null,
    size: null,
    quantity: 0,
    image: Items.images[0],
    reference: Items.reference,
  });

  const { color, size, quantity } = selectedValues;

  const disabled = () => {
    if (
      color !== null &&
      color !== "" &&
      size !== null &&
      size !== "" &&
      quantity !== 0
    ) {
      setIsDisabled(false);
      setSelectedValues({
        ...selectedValues,
        id: `${selectedValues.size}${selectedValues.quantity}${selectedValues.color}`
          .replace(" ", "")
          .toLocaleLowerCase(),
      });
    } else {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    disabled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, size, quantity]);

  return (
    <div className="itemForm">
      <InputSelect
        onClickEvent={() => {
          setIsOpen({ ...isOpen, openColor: !isOpen.openColor });
        }}
        isOpen={isOpen.openColor ? "show" : ""}
        onClickOption={(e) => {
          setSelectedValues({
            ...selectedValues,
            color: e.target.value,
          });
        }}
        id="selectColor"
        label="Couleur"
        selectedOption={color || "Choix couleur"}
        defaultOption="Choix couleur"
        array={Items.colors}
      />

      <InputSelect
        onClickEvent={() => {
          setIsOpen({ ...isOpen, openSize: !isOpen.openSize });
        }}
        isOpen={isOpen.openSize ? "show" : ""}
        onClickOption={(e) => {
          setSelectedValues({
            ...selectedValues,
            size: e.target.value,
          });
        }}
        id="selectSize"
        label="Taille"
        selectedOption={size || "Choix taille"}
        defaultOption="Choix taille"
        array={Items.sizes}
      />

      <div className="itemForm_bottom">
        <button
          onClick={() => {
            addItem(selectedValues);
          }}
          className={`itemForm_bottom_buttonAdd ${
            isDisabled ? "disabled" : null
          }`}
          type="button"
          disabled={isDisabled}
        >
          Ajouter au panier
        </button>
        <InputNumber
          id="selectQuantity"
          label="Quantité"
          onClickIncrease={() => {
            if (quantity < 100) {
              setSelectedValues({
                ...selectedValues,
                quantity: quantity + 1,
              });
            }
          }}
          onClickDecrease={() => {
            if (quantity > 0) {
              setSelectedValues({
                ...selectedValues,
                quantity: quantity - 1,
              });
            }
          }}
          defaultOption={quantity}
        />
      </div>
    </div>
  );
}
