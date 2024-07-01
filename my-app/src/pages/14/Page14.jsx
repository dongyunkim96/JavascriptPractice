import React, { useState } from 'react';
import styled from 'styled-components';

const Page14 = () => {
  const [players, setPlayers] = useState(['Wes', 'Sarah', 'Ryan', 'Poppy']);
  const [person, setPerson] = useState({
    name: 'Wes Bos',
    age: 80,
  });

  const handleArrayUpdate = () => {
    const team = [...players];
    team[3] = 'heeee hawww';
    console.log('Original players:', players);
    console.log('Updated team:', team);
  };

  const handleObjectUpdate = () => {
    const cap2 = { ...person, number: 99, age: 12 };
    console.log('Updated person:', cap2);
  };

  return (
    <Container14>
      <Title14>JS Reference VS Copy</Title14>
      <Button14 onClick={handleArrayUpdate}>Update Array</Button14>
      <Button14 onClick={handleObjectUpdate}>Update Object</Button14>
    </Container14>
  );
};

export default Page14;

const Container14 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title14 = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Button14 = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;