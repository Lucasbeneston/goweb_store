import React, { useState } from "react";
import Items from "../../../data/items";

import "./Item.scss";

export default function Item() {
  // Default image is the first of the array
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useState(Items.images[0]);

  return (
    <main className="item" role="main">
      <div className="item_illustration">
        <img
          src={`${process.env.PUBLIC_URL}/assets/${selectedImage}`}
          alt="Illustration du manteau"
        />
      </div>
      <div className="item_miniatures">
        {Items.images
          .map((image) => (
            <div className="item_miniatures_img">
              <img
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                alt="Illustration du manteau"
              />
            </div>
          ))
          .slice(0, 4)}
      </div>
    </main>
  );
}
