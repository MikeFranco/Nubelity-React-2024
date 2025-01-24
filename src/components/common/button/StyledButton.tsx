import styled from 'styled-components';

export const MainButton = styled.button<{
  $fontSize?: string;
  $margin?: string;
  $padding?: string;
  $width?: string;
}>`
  border: 0px;
  padding: 10px;
  width: ${props => props.$width ?? '50%'};
  align-self: center;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-weight: bold;
  font-size: ${props => props.$fontSize ?? '18px'};
  margin: ${props => props.$margin ?? '0px'};
  padding: ${props => props.$padding ?? '0px'};
`;
