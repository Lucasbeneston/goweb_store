import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "./InputSelect.scss";

export default function InputSelect({
  id,
  label,
  onClickEvent,
  isOpen,
  selectedOption,
  defaultOption,
  onClickOption,
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
        {selectedOption}
        <div className="inputSelect_select_arrow">
          {isOpen === "show" ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </div>
      </div>
      <div className={`inputSelect_optionsContainer ${isOpen}`}>
        <button
          className="inputSelect_optionsContainer_option"
          onClick={onClickOption}
          type="button"
          value={null}
        >
          -- {defaultOption} --
        </button>
        {array.map((option) => (
          <button
            className="inputSelect_optionsContainer_option"
            onClick={onClickOption}
            type="button"
            value={option}
            key={option}
          >
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
  selectedOption: PropTypes.string.isRequired,
  onClickOption: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};
