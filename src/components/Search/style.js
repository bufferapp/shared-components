import styled from 'styled-components';

export const SearchWrapper = styled.div`
  height:  auto;
`;

export const SearchInput = styled.input`
    && {
      border: 0;
      border-bottom:  1px solid #ecf0f3;
      border-radius: 4px;
      box-shadow: none;
      width: 100%;
      padding: 0 7px;
      box-sizing: border-box;
      resize: none;
      font-size: 14px;
      height: 35px;
      &:focus {
        outline: none;
        border-color: transparent;
        box-shadow: none;
        border-bottom: 1px solid #b8b8b8;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
    }
`;
