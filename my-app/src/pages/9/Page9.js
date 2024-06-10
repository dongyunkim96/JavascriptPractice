/*import React, { useEffect } from 'react';
import styled from 'styled-components';

const Page9Styled = styled.div`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const StyledParagraph = styled.p`
  cursor: pointer;
`;

const Page9 = () => {
  useEffect(() => {
    const dogs = [
      { name: 'Snickers', age: 2 },
      { name: 'Hugo', age: 8 }
    ];

    const p = document.querySelector('p');

    const makeGreen = () => {
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    };

    p.addEventListener('click', makeGreen);

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', '💩');

    // Styled
    // console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

    // Warning
    console.warn('OH NOOO');

    // Error
    console.error('Shit!');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // Clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    // Counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // Timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);

    // Cleanup event listener on component unmount
    return () => {
      p.removeEventListener('click', makeGreen);
    };
  }, []);

  return (
    <>
      <Page9Styled />
      <StyledParagraph>×BREAK×DOWN×</StyledParagraph>
    </>
  );
};

export default Page9;*/