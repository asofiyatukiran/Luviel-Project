import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--danger', 'btn--signup', 'btn--menu'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to,
  disabled,
  icon, // Icon class (FontAwesome or others)
  iconPosition = 'left' // NEW: Default icon position
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={to || '#'} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {/* Icon before text if 'iconPosition' is 'left' */}
        {icon && iconPosition === 'left' && <i className={icon} style={{ marginRight: '8px' }}></i>}
        
        {children}

        {/* Icon after text if 'iconPosition' is 'right' */}
        {icon && iconPosition === 'right' && <i className={icon} style={{ marginLeft: '8px' }}></i>}
      </button>
    </Link>
  );
};
