import styled, { css } from "styled-components/";

export const Background = styled.div`
  ${({ theme: { colors } }) => css`
    background: linear-gradient(45deg, ${colors.pink}, ${colors.lavander});
    position: fixed;
    inset: 0;
    z-index: -1;
  `};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  right: 60px;
  bottom: 60px;
`;
