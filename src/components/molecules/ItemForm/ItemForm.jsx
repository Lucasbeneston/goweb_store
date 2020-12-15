import React, { useState, useEffect } from "react";
import ItemFormMobile from "./ItemFormMobile/ItemFormMobile";
import ItemFormDesktop from "./ItemFormDesktop/ItemFormDesktop";

import "./ItemForm.scss";

export default function ItemForm() {
  // If the window width is less than 769px, the device "is a mobile"
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  // Change the value of "isMobile" to "true" when the window width is less than 769px
  const updateMedia = () => {
    setIsMobile(window.innerWidth < 769);
  };

  // Call the updateMedia function when the user resize the screen / change the device
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="itemForm">
      {isMobile ? <ItemFormMobile /> : <ItemFormDesktop />}
    </div>
  );
}
