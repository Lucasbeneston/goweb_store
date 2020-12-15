import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Item from "../../../data/item";

import "./CarouselImages.scss";

export default function CarrouselImages() {
  // By default, the selected image is the first element of the array
  const [selectedImage, setSelectedImage] = useState({
    src: `assets/${Item.images[0]}`,
    index: 0,
  });

  return (
    <>
      <HashLink to="/#">
        <div className="carouselImages_return">
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Retour</span>
        </div>
      </HashLink>
      <div className="carouselImages_illustration">
        <img
          src={`${process.env.PUBLIC_URL}/${selectedImage.src}`}
          alt="Illustration du vêtement selectionné"
        />
      </div>
      <div className="carouselImages_miniatures">
        {Item.images
          .map((image, index) => (
            <div
              className={`carouselImages_miniatures_img ${
                index === selectedImage.index ? "selected" : null
              }`}
              key={image}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                setSelectedImage({
                  src: e.target.src.substring(e.target.baseURI.length),
                  index,
                });
              }}
              onClick={(e) => {
                setSelectedImage({
                  src: e.target.src.substring(e.target.baseURI.length),
                  index,
                });
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/${image}`}
                alt="Illustration du vêtement"
              />
            </div>
          ))
          .slice(0, 4)}
      </div>
    </>
  );
}
