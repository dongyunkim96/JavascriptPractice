import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { cornify_add } from './cornify.js'; // Ensure you have the cornify.js in the same directory and properly exported

const Container11 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Page12 = () => {
  const [pressed, setPressed] = useState([]);
  const secretCode = 'wesbos';

  useEffect(() => {
    const handleKeyUp = (e) => {
      setPressed((prevPressed) => {
        const updatedPressed = [...prevPressed, e.key];
        if (updatedPressed.join('').includes(secretCode)) {
          console.log('DING DING!');
          cornify_add();
        }
        return updatedPressed.slice(-secretCode.length);
      });
    };

    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <Container11>
      <h1>Press the secret code!</h1>
    </Container11>
  );
};

export default Page12;