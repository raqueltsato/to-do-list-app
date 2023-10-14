import styled, { css } from "styled-components/";
import { FaPlus } from "react-icons/fa";

export const Button = styled.button<{ "data-isround": boolean }>`
  ${({ theme: { colors, radius }, "data-isround": isRound }) => css`
    border: none;
    border-radius: ${isRound ? radius.circle : radius.md};
    background-color: ${colors.purple};
    padding: 12px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.purpleDark};
    }
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled(FaPlus)`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
  height: 40px;
  width: 40px;
`;

export const Title = styled.p`
  ${({ theme: { colors, font } }) => css`
    color: ${colors.white};
    font-size: ${font.md};
  `}
`;
