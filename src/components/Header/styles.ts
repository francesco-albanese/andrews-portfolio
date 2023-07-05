import styled from "styled-components";

const StyledHeader = styled.header`
  height: 38px;
  border-bottom: 1px solid #e5e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
`;

const IconsContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export { StyledHeader, IconsContainer };
