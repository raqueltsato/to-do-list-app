import styled from "styled-components/";
import { OwnProps } from "./types";

export const ModalContainer = styled.div<{ "data-isopen": OwnProps["isOpen"] }>`
  ${({ theme: { colors }, "data-isopen": isOpen }) => `
    display: ${isOpen ? "block" : "none"};
    background: ${colors.grayTransparent};
  `}
  position: fixed;
  inset: 0;
  z-index: 99;
`;

export const ModalContent = styled.div`
  ${({ theme: { colors, radius } }) => `
     background: ${colors.white};
     border-radius: ${radius.lg};
     box-shadow: 0px 0px 8px 0px ${colors.shadow};
 `}
  position: relative;
  width: 50%;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const CloseButton = styled.button`
  ${({ theme: { colors } }) => `
    color: ${colors.purple}
    
   
  `};
  position: absolute;
  top: 15px;
  right: 20px;
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

export const Title = styled.h2`
  ${({ theme: { colors } }) => `
    color: ${colors.purpleDark}
  `};
  margin: 20px 0;
`;

export const InputWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  ${({ theme: { colors } }) => `
    color: ${colors.gray};
     `};
  margin-bottom: 8px;
`;

export const Input = styled.input`
  ${({ theme: { colors, radius } }) => `
    border-radius: ${radius.md};
    border: 1px solid ${colors.purple};
    background-color:${colors.babyBlue};
  `};

  line-height: 170%;
  font-size: 1rem;
  padding: 0 8px;
  outline: none;
  margin-bottom: 20px;
`;

export const DateWrapper = styled.div`
  ${({ theme: { colors } }) => `
       color:${colors.gray};
     `}
  margin-bottom: 16px;

  input {
    ${({ theme: { colors, radius } }) => `
      border-radius: ${radius.md};
      border: 1px solid ${colors.purple};
      background-color:${colors.babyBlue};
    `};

    line-height: 170%;
    font-size: 1rem;
    padding: 0 8px;
    outline: none;
  }

  .react-datepicker {
    ${({ theme: { colors, radius } }) => `
      border-radius: ${radius.md};
      border: 1px solid ${colors.purple};
      color: ${colors.babyBlue}
  `};
  }
  .react-datepicker__triangle {
    ${({ theme: { colors, radius } }) => `
      border-radius: ${radius.md};
      border: 1px solid ${colors.purple};
    `};
    transform: translate3d(80px, 0px, 0px);
  }

  .react-datepicker__header {
    ${({ theme: { colors } }) => `
        background-color:${colors.babyBlue};
        border-bottom: 1px solid ${colors.purple}
     `}
  }
`;
