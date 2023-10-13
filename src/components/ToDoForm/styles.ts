import styled from "styled-components/";
import { OwnProps } from "./types";

export const ModalContainer = styled.div<{ isOpen: OwnProps["isOpen"] }>`
  ${({ theme: { colors }, isOpen }) => `
    display: ${isOpen ? "block" : "none"};
    background: ${colors.gray};
  `}
  position: fixed;
  inset: 0;
  z-index: 99;
`;

export const ModalContent = styled.div`
  ${({ theme: { colors, radius } }) => `
     background: ${colors.white};
     border-radius: ${radius.md};
     box-shadow: 0px 0px 8px 0px ${colors.shadow};
 `}
  position: relative;
  width: 50%;
  margin: 100px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  ${({ theme: { colors } }) => `
    color: ${colors.purple}
    
   
  `};
  position: absolute;
  top: 15px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &: hover {
    ${({ theme: { colors } }) => `
    color: ${colors.purpleDark}
    
   
  `};
  }
`;
