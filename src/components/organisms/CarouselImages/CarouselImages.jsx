import React, { useState } from "react";
import Items from "../../../data/items";

import "./CarouselImages.scss";

export default function CarrouselImages() {
  // Default image is the first image of the array "images"
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useState(Items.images[0]);

  return (
    <>
      <div className="carouselImages_illustration">
        <img
          src={`${process.env.PUBLIC_URL}/assets/${selectedImage}`}
          alt="Illustration du manteau"
        />
      </div>
      <div className="carouselImages_miniatures">
        {Items.images
          .map((image) => (
            <div className="carouselImages_miniatures_img" key={image}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                alt="Illustration du manteau"
              />
            </div>
          ))
          .slice(0, 4)}
      </div>
    </>
  );
}
