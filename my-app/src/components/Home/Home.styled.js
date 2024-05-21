import { styled } from "styled-components";

export const HomeContainer = styled.div`
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

export const NumberButton = styled.div`
  padding: .5rem 1rem;
  font-size: 1rem;
  border: 1px solid #333;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ddd;
  }
`;