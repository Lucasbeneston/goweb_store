import React, { useContext, useState, useEffect } from "react";
import Item from "../../../../data/item";
import { CartContext } from "../../../../contexts/CartContext/CartContext";
import InputSelect from "../../../atoms/Inputs/InputSelect/InputSelect";
import InputNumber from "../../../atoms/Inputs/InputNumber/InputNumber";

import "./ItemFormMobile.scss";

export default function ItemFormMobile() {
  // Recover and storage the action "addItem" from the context in "addItem" constant
  const { addItem } = useContext(CartContext);

  // By default the inputs color and size menu is close
  const [isOpen, setIsOpen] = useState({ openColor: false, openSize: false });

  // By default the button is disabled
  const [isDisabled, setIsDisabled] = useState(true);

  // The new item values with default values "null" for id, color, size and "1" for quantity
  const [selectedValues, setSelectedValues] = useState({
    id: null,
    title: Item.title,
    price: Item.price,
    color: { name: null, image: null },
    size: null,
    quantity: 1,
    reference: Item.reference,
  });

  const { color, size, quantity } = selectedValues;

  // The button is enabled if color and size are selected
  const disabled = () => {
    if (
      color.name !== null &&
      color.name !== "" &&
      size !== null &&
      size !== ""
    ) {
      setIsDisabled(false);
      // Creation of id with the size, quantity and color
      setSelectedValues({
        ...selectedValues,
        id: `${selectedValues.size}${selectedValues.quantity}${selectedValues.color.name}`
          .replace(" ", "")
          .toLocaleLowerCase(),
      });
    } else {
      setIsDisabled(true);
    }
  };

  // Call the disabled function when the color, size or quantity change
  useEffect(() => {
    disabled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, size, quantity]);
  return (
    <>
      <InputSelect
        onClickEvent={() => {
          setIsOpen({ ...isOpen, openColor: !isOpen.openColor });
        }}
        isOpen={isOpen.openColor ? "show" : ""}
        onClickOption={(e) => {
          setSelectedValues({
            ...selectedValues,
            color: {
              name: e.target.value,
              image: `img-${e.target.value.replace(" ", "_")}.jpg`,
            },
          });
          setIsOpen({ ...isOpen, openColor: !isOpen.openColor });
        }}
        id="selectColor"
        label="Couleur"
        selectedOption={color.name || "Choix couleur"}
        defaultOption="Choix couleur"
        array={Item.colors}
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
          setIsOpen({ ...isOpen, openSize: !isOpen.openSize });
        }}
        id="selectSize"
        label="Taille"
        selectedOption={size || "Choix taille"}
        defaultOption="Choix taille"
        array={Item.sizes}
      />

      <div className="itemFormMobile_bottom">
        <button
          onClick={() => {
            addItem(selectedValues);
          }}
          className={`itemFormMobile_bottom_buttonAdd ${
            isDisabled ? "disabled" : null
          }`}
          type="button"
          aria-label="Ajouter au panier"
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
            if (quantity > 1) {
              setSelectedValues({
                ...selectedValues,
                quantity: quantity - 1,
              });
            }
          }}
          defaultOption={quantity}
        />
      </div>
    </>
  );
}
