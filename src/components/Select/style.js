/* eslint-disable no-nested-ternary */
import style from 'styled-components';
import {
  grayShadow, grayLighter, white, gray,
} from '../style/colors';

export const Wrapper = style.div`
  outline: 0;
  :focus {
    outline: 0
  }
  width: ${props => (props.isSplit ? '100%' : 'auto')};
  height: ${props => (props.isSplit ? '100%' : 'auto')};
  max-height: ${props => (props.isSplit ? '100%' : '40px')};
  position: ${props => (props.isSplit ? 'initial' : 'relative')};
  display: inline-block;
`;

export const SelectStyled = style.div`
    right: 0;
    position: absolute;
    z-index: 1000;
    border: 1px solid ${gray};
    box-sizing: border-box;
    box-shadow: ${grayShadow};
    border-radius: 4px;
    display: ${props => (props.isOpen ? 'initial' : 'none')};
    min-width: 200px;
    width: auto;
    background-color: #ffffff;
    bottom: ${props => (props.position === 'top' ? '100%' : 'initial')};
    top: ${props => (props.position === 'bottom' ? '100%' : 'initial')};
    margin-bottom: ${props => (props.position === 'top' ? '10px' : '0')};
    margin-top: ${props => (props.isMenu ? '35px' : props.position === 'bottom' ? '10px' : '0')};
`;

export const SelectItems = style.ul`
    max-height: 235px;
    overflow-y: auto;
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
    z-index: 2;
    display: flex;
    background: ${white};
    flex-direction: column;
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-inline-start: 0px;
    border-radius: 4px;
`;

export const Arrow = style.div`
    background-color: #fff;
    border-left: 1px solid ${gray};
    border-radius: 2px 0 0 0;
    border-top: 1px solid ${gray};
    display: ${props => (props.isOpen ? 'inline-block' : 'none')};
    height: 10px;
    right: 13px;
    position: absolute;
    width: 10px;
    z-index: 1;
    transform: ${props => (props.position === 'top' ? 'rotate(225deg)' : 'rotate(45deg)')};
    bottom: ${props => (props.position === 'top' ? '100%' : '-15px')};
    top: ${props => (props.position === 'top' ? '-15px' : 'initial')};
    z-index: 9999;
`;

export const SelectItemDivider = style.li`
    background-color: ${grayLighter};
    height: 1px;
    margin-bottom: 4px;
    margin-top: 4px;
    padding: 0;
    pointer-events: none;
    width: 100%;
`;
