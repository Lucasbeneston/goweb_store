import React from "react";
import MoreItemsArray from "../../../data/moreItems";
import ItemMore from "../../molecules/ItemMore/ItemMore";

import "./MoreItems.scss";

export default function MoreItems() {
  return (
    <div className="moreItems">
      <div className="moreItems_top">
        <h3 className="moreItems_top_title">
          Ces produits pourraient compéter votre look...
        </h3>
        <div className="moreItems_top_buttons">
          <button type="button">Prix croissant</button>
          <div className="moreItems_top_buttons_line" />
          <button type="button">Prix décroissant</button>
        </div>
      </div>
      <div className="moreItems_listItems">
        {MoreItemsArray.map((item) => (
          <ItemMore
            itemPriceHT={item.priceHT}
            itemPriceTTC={item.priceTTC}
            itemImage={item.image}
            itemTitle={item.title}
          />
        ))}
      </div>
    </div>
  );
}
