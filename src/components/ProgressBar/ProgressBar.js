/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--padding': '4px',
    '--border-radius': '8px',
    '--inner-border-radius': '4px',
    '--height': '24px',
  },
  small: {
    '--height': '8px',
  },
}

const BarContainer = styled.div`
  --height: 12px;
  --border-radius: 4px;
  --padding: 0;
  --inner-border-radius: inherit;

  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray35};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding: var(--padding);
`;

const BarTrack = styled.div`
  border-radius: var(--inner-border-radius);
  height: 100%;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${p => p.$width}%;
`;

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size];
  return <BarContainer style={style} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
    <BarTrack>
      <Bar $width={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Bar>
    </BarTrack>
  </BarContainer>;
};

export default ProgressBar;
