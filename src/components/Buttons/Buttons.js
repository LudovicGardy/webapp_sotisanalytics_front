import React from 'react';
import { Link } from "react-router-dom";
import "./Buttons.css";

const STYLES = ["btn_primary", "btn_secondary",  "btn_third", "btn_outline", "btn_test", "btn_reverse"];

const SIZES = ["btn_medium", "btn_large", "btn_large2",  "btn_large3"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  redirection = "about",
  href,
  target,
  rel,
  className = ""
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Détection lien externe
  const link = href || redirection;
  const isExternal = /^https?:\/\//i.test(link);

  if (isExternal) {
    return (
      <a
        href={link}
        className={`btn-mobile ${className}`}
        target={target}
        rel={rel}
      >
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </a>
    );
  }

  return (
    <Link to={link} className={`btn-mobile ${className}`}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};