import styled, { css } from "styled-components/";
import { FaPlus } from "react-icons/fa";

export const Button = styled.button`
  ${({ theme: { colors, radius } }) => css`
    border: none;
    border-radius: ${radius.circle};
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
