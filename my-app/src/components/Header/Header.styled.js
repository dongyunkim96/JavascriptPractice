import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Nav = styled.nav``;

export const NavLink = styled(Link)`
  font-size: 4rem;
  border-color: white;
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 5rem;

  &:hover {
    text-decoration: underline;
  }
`;