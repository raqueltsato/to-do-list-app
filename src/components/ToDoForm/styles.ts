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
  ${({ theme: { colors, radius, space } }) => `
     background: ${colors.white};
     border-radius: ${radius.lg};
     box-shadow: 0px 0px 8px 0px ${colors.shadow};
     padding: ${space.xl};
 `}
  position: relative;
  width: 50%;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  ${({ theme: { colors, space } }) => `
    color: ${colors.purpleDark};
    margin: ${space.md} 0;
  `};
`;

export const InputWrapperContainer = styled.div`
  ${({ theme: { space } }) => `
  margin-bottom: ${space.md};
`}
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${({ theme: { colors, space } }) => `
    color: ${colors.gray};
    margin-bottom: ${space.xs2};
     `};
`;

export const Input = styled.input`
  ${({ theme: { colors, radius, space } }) => `
    border-radius: ${radius.md};
    border: 1px solid ${colors.purple};
    background-color:${colors.babyBlue};
    padding: 0 ${space.xs2};
    margin-bottom: ${space.md};
  `};

  line-height: 170%;
  font-size: 1rem;
  outline: none;
`;

export const DateWrapper = styled.div`
  ${({ theme: { colors } }) => `
       color:${colors.gray};
     `}
  margin-bottom: 16px;

  input {
    ${({ theme: { colors, radius, space } }) => `
      border-radius: ${radius.md};
      border: 1px solid ${colors.purple};
      background-color:${colors.babyBlue};
      padding: 0 ${space.xs2};
    `};

    line-height: 170%;
    font-size: 1rem;
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
