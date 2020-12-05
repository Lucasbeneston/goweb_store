import React from "react";
import CarrouselImages from "../../organisms/CarouselImages/CarouselImages";
import InformationsItem from "../../organisms/InformationsItem/InformationsItem";

import "./Item.scss";

export default function Item() {
  return (
    <main className="item" role="main">
      <CarrouselImages />
      <InformationsItem />
    </main>
  );
}
