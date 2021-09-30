import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectContainer = styled.div`
  position: relative;
  width: fit-content;
  border-radius: 8px;
  z-index: 0;
  color: ${COLORS.gray700};
  line-height: 1.2;

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectCurrVal = styled.div`
  border-radius: inherit;
  padding: 12px 16px;
  pointer-events: none;
  position: relative;
  z-index: 1;
  background-color: ${COLORS.transparentGray15};
  padding-right: 60px;


`;

const SelectChevronDown = styled(Icon).attrs({size: 36, id: 'chevron-down'})`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
`;

const SelectEl = styled.select`
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  border-radius: inherit;
  margin: 0;
  z-index: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  color: rgba(0, 0, 0, 0);
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectContainer>
      <SelectEl value={value} onChange={onChange}>
        {children}
      </SelectEl>
      <SelectCurrVal>
        {displayedValue}  
        <SelectChevronDown />
      </SelectCurrVal>
    </SelectContainer>
  );
};

export default Select;
