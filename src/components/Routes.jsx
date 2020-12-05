import React from "react";
import { Switch, Route } from "react-router-dom";

import Item from "./pages/Item/Item";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import NoMatch from "./pages/NoMatch/NoMatch";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Item} />
      <Route exact path="/cart" component={ShoppingCart} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}
