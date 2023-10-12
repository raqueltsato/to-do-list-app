import styled, { css } from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const CardContainer = styled.div`
  ${({ theme: { colors, radius } }) => css`
    background-color: ${colors.white};
    box-shadow: 0px 0px 8px 0px ${colors.shadow};
    border-radius: ${radius.lg};
  `}
  width: 700px;
  display: flex;
  padding: 12px;
  justify-content: space-between;
  margin: 8px;
`;

export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
`;

export const Checkbox = styled.span`
  ${({ theme: { colors, radius } }) => css`
    background-color: ${colors.white};
    border: 2px solid ${colors.purple};
    border-radius: ${radius.md};
  `}
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 25px;
  width: 25px;
`;

export const Checkmark = styled.div`
  ${({ theme: { colors, radius }, disabled }) => css`
    display: ${disabled ? "none" : "block"};
    border: solid ${colors.purple};
    border-radius: ${radius.sm};
  `}
  position: absolute;
  top: 2px;
  left: 6px;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 14px;

  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
`;

export const Title = styled.h2`
  ${({ theme: { colors, font } }) => css`
    color: ${colors.purple};
    font-size: ${font.md};
  `}
  padding-right: 8px;
`;

export const DueToDateTag = styled.div`
  ${({ theme: { colors, font, radius } }) => css`
    background-color: ${colors.ice};
    border-radius: ${radius.md};
    padding: 4px;
    font-size: ${font.sm};
    color: ${colors.purple};
    font-weight: bold;
  `}
`;

export const TrashIcon = styled(FaTrashAlt)`
  ${({ theme: { colors } }) => css`
    color: ${colors.purple};
  `}
  height:25px;
`;
