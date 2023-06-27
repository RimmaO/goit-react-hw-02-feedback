import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;

  min-width: 80px;
  height: 40px;
  padding: 4px 8px;
  margin-right: 10px;

  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: white;
  &:hover {
    background-color: burlywood;
  }
`;
