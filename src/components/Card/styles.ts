import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const CardContainer = styled.div`
  ${({ theme: { colors, radius } }) => `
    background-color: ${colors.white};
    box-shadow: 0px 0px 8px 0px ${colors.shadow};
    border-radius: ${radius.lg};
  `}
  width: 65%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 20px 12px;
  margin: 8px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 35px;
  cursor: pointer;
  width: 0;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Checkbox = styled.span`
  ${({ theme: { colors, radius } }) => `
    background-color: ${colors.white};
    border: 2px solid ${colors.purple};
    border-radius: ${radius.md};
  `}
  position: absolute;
  height: 25px;
  width: 25px;
`;

export const Checkmark = styled.button<{ checked: boolean }>`
  ${({ theme: { colors, radius }, checked }) => `
    display: ${checked ? "block" : "none"};
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
  background-color: unset;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  ${({ theme: { colors, font } }) => `
    color: ${colors.purple};
    font-size: ${font.md};
    margin-right: 20px;
  `}

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const DueToDateTag = styled.label`
  ${({ theme: { colors, font, radius } }) => `
    background-color: ${colors.ice};
    border-radius: ${radius.md};
    font-size: ${font.sm};
    color: ${colors.purple};
    font-weight: bold;
    padding: 16px 8px;
    margin-right: 12px;
    height: 24px;
    display: flex;
    align-items: center;
    
  `}
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrashIcon = styled(FaTrashAlt)`
  ${({ theme: { colors } }) => `
    color: ${colors.purple};
  `}
  height:30px;
  cursor: pointer;
`;
