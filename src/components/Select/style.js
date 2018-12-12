/* eslint-disable no-nested-ternary */
import style from 'styled-components';
import {
  grayShadow, grayLighter,
} from '../style/colors';

export const Wrapper = style.div`
  outline: 0;
  :focus {
    outline: 0
  }
  width: ${props => (props.isSplit ? '100%' : 'auto')};
  height: 38px;
  max-height: ${props => (props.isSplit ? '100%' : '40px')};
  position: relative;
  right: -15px;
`;


export const SelectStyled = style.div`
    right: 0;
    position: absolute;
    z-index: 1000;
    box-sizing: content-box;
    border: 1px solid ${grayLighter};
    box-shadow: 0 4px 30px 0 ${grayShadow};
    display: ${props => (props.isOpen ? 'initial' : 'none')};
    min-width: 150px;
    width: auto;
    background-color: #ffffff;
    bottom: ${props => (props.position === 'top' ? '100%' : 'initial')};
    top: ${props => (props.position === 'bottom' ? '100%' : 'initial')};
    margin-bottom: ${props => (props.position === 'top' ? '10px' : '0')};
    margin-top: ${props => (props.position === 'bottom' ? '10px' : '0')};
`;

export const SelectItems = style.ul`
    max-height: 235px;
    overflow-y: auto;
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    margin-block-start: 5px;
    margin-block-end: 5px;
    padding-inline-start: 0px;
`;


export const Arrow = style.div`
    background-color: #fff;
    border-left: 1px solid #e6e8e9f;
    border-radius: 2px 0 0 0;
    border-top: 1px solid #e6e8e9;
    display: ${props => (props.isOpen ? 'inline-block' : 'none')};
    height: 10px;
    right: 16px;
    position: absolute;
    width: 10px;
    z-index: 1;
    transform: ${props => (props.position === 'top' ? 'rotate(225deg)' : 'rotate(45deg)')};
    bottom: ${props => (props.position === 'top' ? '100%' : '-15px')};
    top: ${props => (props.position === 'top' ? '-15px' : 'initial')};
    z-index: 9999;
`;
