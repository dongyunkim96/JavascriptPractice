import styled from "styled-components";

export const FooterFrame = styled.div`
  background-color: skyblue;
  color: #fff;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const StyledLinkFooter = styled.a`
  text-decoration: none;
  color: #007bff;
  font-size: 3rem;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;