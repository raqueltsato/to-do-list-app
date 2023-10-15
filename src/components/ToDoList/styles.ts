import styled from "styled-components/";

export const ListContainer = styled.div`
  ${({ theme: { space } }) => `
  padding: ${space.lg} 0;
`}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 15%;
  right: 0;
  left: 0;

  img {
    max-width: 350px;
  }

  p {
    ${({ theme: { colors, space } }) => `
      color: ${colors.purple};
      margin-top: ${space.sm};
    `}
  }
`;
