import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./InputSelect.scss";

export default function InputSelect({ id, label, defaultOption, array }) {
  return (
    <div className="inputSelect">
      <h3 className="inputSelect_label" htmlFor={id}>
        {label}
      </h3>
      <div className="inputSelect_select" type="select" id={id}>
        {defaultOption}
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div className="inputSelect_optionsContainer">
        <button type="button" value={null}>
          -- {defaultOption} --
        </button>
        {array.map((option) => (
          <button type="button" value={option} key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

InputSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};
