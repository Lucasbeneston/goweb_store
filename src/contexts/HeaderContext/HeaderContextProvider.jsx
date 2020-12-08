import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderContext from "./HeaderContext";

export default function HeaderContextProvider({ children }) {
  const [headerHeight, setHeaderHeight] = useState();

  useEffect(() => {
    setHeaderHeight(document.querySelector(".header").offsetHeight);
  }, []);

  const contextHeader = {
    headerHeight,
    setHeaderHeight,
  };

  return (
    <HeaderContext.Provider value={contextHeader}>
      {children}
    </HeaderContext.Provider>
  );
}

HeaderContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
