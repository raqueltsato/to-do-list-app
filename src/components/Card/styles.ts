import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const CardContainer = styled.div`
  ${({ theme: { colors, radius, space } }) => `
    background-color: ${colors.white};
    box-shadow: 0px 0px ${space.xs2} 0px ${colors.shadow};
    border-radius: ${radius.lg};
    padding: ${space.md} ${space.xs};
    margin: ${space.xs2};
  `}
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CheckboxContainer = styled.div`
  ${({ theme: { space } }) => `
  padding-left: ${space.xl2};
`}
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 0;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Checkbox = styled.span`
  ${({ theme: { colors, radius, space } }) => `
    background-color: ${colors.white};
    border: 2px solid ${colors.purple};
    border-radius: ${radius.md};
    position: absolute;
    height: 25px;
    width: 25px;
    
    @media (max-width: 768px) {
      margin-left: ${space.xs2};
    }
    `}
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
  ${({ theme: { colors, font, space } }) => `
    color: ${colors.purple};
    font-size: ${font.md};
    margin-right: ${space.md};
    
    @media (max-width: 768px) {
      margin-bottom: ${space.xs2};
    }
    `}
`;

export const DueToDateTag = styled.label`
  ${({ theme: { colors, font, radius, space } }) => `
    background-color: ${colors.ice};
    border-radius: ${radius.md};
    font-size: ${font.sm};
    color: ${colors.purple};
    font-weight: bold;
    padding: ${space.sm} ${space.xs2};
    margin-right:  ${space.xs};
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
