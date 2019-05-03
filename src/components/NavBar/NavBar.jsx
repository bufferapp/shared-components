import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Info as InfoIcon } from '../Icon';

import { grayDarker, gray } from '../style/colors';
import { fontWeightMedium } from '../style/fonts';
import Select from '../Select';

import BufferLogo from './BufferLogo';
import NavBarMenu from './NavBarMenu/NavBarMenu';
import NavBarProducts from './NavBarProducts/NavBarProducts';


const NavBarStyled = styled.nav`
  height: 64px;
  width: 100vw;
  background: ${grayDarker};
  display: flex;
  justify-content: space-between;
`;

const NavBarLeft = styled.div`
  display: flex;
`;
const NavBarRight = styled.div`
  display: flex;
`;

const NavBarHelp = styled.a`
  height: 64px;
  display: flex;
  color: #fff;
  padding: 0 24px;
  font-size: 16px;
  font-weight: ${fontWeightMedium};
  text-decoration: none;
  align-items: center;
  color: ${props => (props.active ? '#fff' : gray)};
  &:hover {
    color: #fff;
  }
  cursor: pointer;
`;

const NavBarHelpText = styled.span`
  margin-left: 8px;
`;


/**
 * The NavBar is not consumed alone, but instead is used by the AppShell component. Go check out the AppShell component to learn more.
 */
const NavBar = ({ activeProduct, user, helpMenuItems }) => (
  <NavBarStyled>
    <NavBarLeft>
      <BufferLogo />
      <NavBarProducts activeProduct={activeProduct} />
    </NavBarLeft>
    <NavBarRight>
      {helpMenuItems && (
        <Select
          hideSearch
          customButton={handleClick => (
            <NavBarHelp onClick={handleClick}>
              <InfoIcon />
              <NavBarHelpText>Help</NavBarHelpText>
            </NavBarHelp>
          )}
          items={helpMenuItems}
          horizontalOffset="-16px"
          xPosition="right"
        />)}
      <Select
        hideSearch
        customButton={handleClick => (<NavBarMenu user={user} onClick={handleClick} />)}
        items={user.menuItems}
        horizontalOffset="16px"
      />
    </NavBarRight>
  </NavBarStyled>
);

NavBar.propTypes = {
  /** The currently active (highlighted) product in the `NavBar`, one of `'publish', 'reply', 'analyze'` */
  activeProduct: PropTypes.oneOf(['publish', 'reply', 'analyze']),

  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      component: PropTypes.node,
      hasDivider: PropTypes.bool,
      onItemClick: PropTypes.func,
    })).isRequired,
  }).isRequired,
  helpMenuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    component: PropTypes.node,
    hasDivider: PropTypes.bool,
    onItemClick: PropTypes.func,
  })),
};

NavBar.defaultProps = {
  activeProduct: undefined,
  helpMenuItems: null,
}

export default NavBar;
