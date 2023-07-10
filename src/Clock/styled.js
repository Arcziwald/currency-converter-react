import styled from "styled-components";

export const StyledClock = styled.div`
  text-align: right;
  font-family: "Courier New";
  font-size: 13px;
  margin: 5px 5px 10px;
  color: ${({ theme }) => theme.color.stratos};
`;
