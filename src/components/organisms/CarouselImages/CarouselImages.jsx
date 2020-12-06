import React, { useState } from "react";
import Items from "../../../data/items";

import "./CarouselImages.scss";

export default function CarrouselImages() {
  const [selectedImage, setSelectedImage] = useState(
    `assets/${Items.images[0]}`
  );

  return (
    <>
      <div className="carouselImages_illustration">
        <img
          src={`${process.env.PUBLIC_URL}/${selectedImage}`}
          alt="Illustration du manteau"
        />
      </div>
      <div className="carouselImages_miniatures">
        {Items.images
          .map((image) => (
            <div
              className="carouselImages_miniatures_img"
              key={image}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                setSelectedImage(
                  e.target.src.substring(e.target.baseURI.length)
                );
              }}
              onClick={(e) => {
                setSelectedImage(
                  e.target.src.substring(e.target.baseURI.length)
                );
              }}
            >
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
