import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./InputSelect.scss";

export default function InputSelect({
  id,
  label,
  onClickEvent,
  isOpen,
  defaultOption,
  array,
}) {
  return (
    <div className="inputSelect">
      <h3 className="inputSelect_label" htmlFor={id}>
        {label}
      </h3>
      <div
        className="inputSelect_select"
        tabIndex={0}
        role="button"
        onClick={onClickEvent}
        onKeyDown={onClickEvent}
        type="select"
        id={id}
      >
        {defaultOption}
        <div className="inputSelect_select_arrow">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <div className={`inputSelect_optionsContainer ${isOpen}`}>
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

InputSelect.defaultProps = {
  isOpen: "",
};

InputSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func.isRequired,
  isOpen: PropTypes.string,
  defaultOption: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};
