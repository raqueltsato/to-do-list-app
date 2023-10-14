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
