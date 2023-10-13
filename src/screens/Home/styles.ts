import styled, { css } from "styled-components/";

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    background: linear-gradient(45deg, ${colors.pink}, ${colors.lavander});
  `};
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
