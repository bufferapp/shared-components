import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';
import ChevronDown from '../Icon/Icons/ChevronDown';
import Select from '../Select/Select';

export const ButtonStyled = style.button`
  ${Styles.ButtonBase};
  ${props => Styles[props.size]};
  ${props => Styles[props.disabled ? 'disabled' : props.type]};
  ${props => Styles[props.fullWidth ? 'fullWidth' : '']}
`;

const Loading = style.img`
  width: 24px;
  margin-left: 10px;
`;

const VisuallyHiddenLabel = style.span`
  position: absolute; 
  overflow: hidden; 
  clip: rect(0 0 0 0); 
  height: 1px; width: 1px; 
  margin: -1px; padding: 0; border: 0; nom 
`;

/** All buttons, including text, link and split-buttons, follow the same core principles in dimensions, padding, and font sizes.
 * Combined with simple modifiers, they can be changed in size and appearance.  */
const Button = ({
  disabled,
  onClick,
  type,
  size,
  label,
  isSplit,
  loading,
  icon,
  hasIconOnly,
  isSelect,
  items,
  selectPosition,
  onSelectClick,
  fullWidth,
}) => (
  <ButtonStyled
    onClick={!disabled ? onClick : undefined}
    disabled={disabled}
    size={size}
    type={type}
    isSplit={isSplit}
    icon={icon}
    hasIconOnly={hasIconOnly}
    fullWidth={fullWidth}
  >
    {icon}
    {hasIconOnly && <VisuallyHiddenLabel>{label}</VisuallyHiddenLabel>}
    {!hasIconOnly && <Styles.ButtonLabel hasIcon={!!icon}>{label}</Styles.ButtonLabel>}

    {isSelect && (type === 'primary' || type === 'secondary') && (
      <Styles.ButtonArrow>
        <ChevronDown color={type === 'primary' ? 'white' : 'grayDark'} size={size} isChevron />
      </Styles.ButtonArrow>
    )}

    {loading && <Loading src="./images/loading-gray.svg" alt="loading" />}

    {isSplit && (type === 'primary' || type === 'secondary') && (
      <Select onSelectClick={onSelectClick} items={items} type={type} isSplit position={selectPosition} disabled={disabled} />
    )}
  </ButtonStyled>
);

Button.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,

  /** Size of the Button */
  size: PropTypes.oneOf(['small', 'large', 'medium']),

  /** OnClick handler */
  onClick: PropTypes.func.isRequired,

  /** Button label */
  label: PropTypes.string,

  /** Type of button */
  type: PropTypes.oneOf(['link', 'primary', 'secondary', 'text']),

  /** Is the Button Split  */
  isSplit: PropTypes.bool,

  /** Is this the Select button with chevron */
  isSelect: PropTypes.bool,

  /** Is the Button Loading  */
  loading: PropTypes.bool,

  /** Does the button have only an icon and no label */
  hasIconOnly: PropTypes.bool,

  /** Icon to show with the label */
  icon: PropTypes.node,

  /** Items to display in the Split Button popup */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),

  /** Position of the Select popup */
  selectPosition: PropTypes.oneOf(['top', 'bottom']),

  /** Function to call on Split Button selected item click */
  onSelectClick: PropTypes.func,

  /** Is the button the full width of the parent container */
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  isSplit: undefined,
  loading: false,
  size: 'medium',
  type: 'secondary',
  label: undefined,
  hasIconOnly: false,
  icon: undefined,
  isSelect: undefined,
  items: undefined,
  selectPosition: 'bottom',
  onSelectClick: undefined,
  fullWidth: false,
};

export default Button;
