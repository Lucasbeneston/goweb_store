import React, { useState, useEffect } from "react";
import ItemFormMobile from "./ItemFormMobile/ItemFormMobile";
import ItemFormDesktop from "./ItemFormDesktop/ItemFormDesktop";

import "./ItemForm.scss";

export default function ItemForm() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 769);
  };

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
