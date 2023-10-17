import styled, { css } from "styled-components/";
import { FaPlus } from "react-icons/fa";
import { OwnProps } from "./types";

export const Button = styled.button<{
  "data-isround": boolean;
  disabled: OwnProps["disabled"];
}>`
  ${({
    theme: { colors, radius, space },
    "data-isround": isRound,
    disabled,
  }) => css`
    border: none;
    border-radius: ${isRound ? radius.circle : radius.md};
    background-color: ${disabled ? colors.ice : colors.purple};
    padding: ${space.xs};
    cursor: pointer;

    &:hover {
      background-color: ${disabled ? colors.ice : colors.purpleDark};
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
