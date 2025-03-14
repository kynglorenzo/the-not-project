import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa6';

export const StoriesSearchContainer = styled.div`
  margin-top: 30px;

  hr {
    margin: 30px 10px 20px 10px;
    opacity: 0.5;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px gray;
  border-radius: 7px;
  padding-left: 7px;
  gap: 5px;

  svg {
      color: gray;
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 40px;
  background: transparent;
  outline: none;
  border: none;
  text-indent: 5px;
  font-size: 1.1rem;
`;

export const SearchTitle = styled.h3`
  font-weight: normal;
  font-size: 1.3rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const SecondaryTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #454c42;
  }
`;

export const ArrowIcon = styled(FaAngleDown)`
  margin-right: 3px;
  font-size: 1.2rem;
  transition: rotate 0.2s;
  padding: 3px;
  border-radius: 20px;

  &.rotated {
    rotate: -180deg;
  }
`;
export const FilterOptionsContainer = styled.div`
  margin-block: 5px 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  height: 0;
  overflow: hidden;
  transition: height 0.2s;

  &.visible {
    height: max-content;
  }
`;

export const FilterLabel = styled.label`
  position: relative;
  font-size: 1.1em;
  padding-left: 1.8em;
  padding-right: 1em;
  line-height: 2;
  cursor: pointer;
  display: inline-flex;
  transition: 0.25s all ease;

  &:before {
    box-sizing: border-box;
    content: ' ';
    position: absolute;
    top: 0.3em;
    left: 0;
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 2px solid #9098a9;
    border-radius: 6px;
    z-index: -1;
    transition: 0.25s all ease;
  }
`;

export const FilterCheckbox = styled.input`
  display: none;
  visibility: hidden;

  &:checked + label {
    padding-left: 1em;
    color: hsl(35, 20%, 10%);

    &:before {
      top: 0;
      width: 100%;
      height: 2em;
      background: hsl(35, 45%, 88%);
      border-color: hsl(35, 45%, 80%);
    }
  }
`;

export const ApplyFiltersButton = styled.button`
  width: 100%;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition: 0.2s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  color: #57595c;
  box-shadow: inset 0 0 0 2px #57595c;
  background-color: transparent;
  height: 48px;
  &:hover {
    color: #fff;
    background-color: #57595c;
  }
`;
