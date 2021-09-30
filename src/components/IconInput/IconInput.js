import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--underline-size': '1px',
    '--font-size': '14px',
    '--padding': '2px 2px 2px 20px',
    iconSize: 14,
  },
}

const Container = styled.label`
  --underline-size: 2px;
  --font-size: 18px;
  --padding: 5px 5px 5px 30px;

  line-height: 1.17;
  position: relative;
  display: block;
  font-size: var(--font-size);
  font-family: 'Roboto', sans-serif;
  border-bottom: var(--underline-size) solid;
  width: ${p => p.$width}px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: 0;
  margin: 0;
  padding: var(--padding);
  width: 100%;
  font-weight: 700;
  font-family: inherit;
  line-height: inherit;
  font-size: inherit;
  color: inherit;

  &:focus {
    outline-offset: 1px;
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500}
  }
`;

const FieldIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const { iconSize = 22, ...style } = SIZES[size] || {};
  return <Container $width={width} style={style}>
    <VisuallyHidden>{label}</VisuallyHidden>
    {icon ? <FieldIcon id={icon} size={iconSize} /> : null }
    <Input placeholder={placeholder}/>
  </Container>;
};

export default IconInput;
