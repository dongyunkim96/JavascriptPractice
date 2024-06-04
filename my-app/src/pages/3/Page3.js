import React, { useState } from 'react';
import styled from 'styled-components';

const StyledPage3 = styled.div`
  :root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
  }

  body {
    text-align: center;
    background: #193549;
    color: white;
    font-family: 'helvetica neue', sans-serif;
    font-weight: 100;
    font-size: 50px;
  }

  .h1 {
    color: var(--base);
  }
`;

const Controls = styled.div`
  margin-bottom: 50px;

  labe {
    margin-right: 10px;
  }

  input {
    width: 100px;
    margin-right: 10px;
  }
`;

const StyledImg = styled.img`
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
`;

const Page3 = () => {
    const [spacing, setSpacing] = useState(10);
    const [blur, setBlur] = useState(10);
    const [baseColor, setBaseColor] = useState('#ffc600');

    const handleSpacingChange = (e) => {
        setSpacing(e.target.value);
        document.documentElement.style.setProperty('--spacing', `${e.target.value}px`);
    };

    const handleBlurChange = (e) => {
        setBlur(e.target.value);
        document.documentElement.style.setProperty('--blur', `${e.target.value}px`);
    };

    const handleBaseColorChange = (e) => {
        setBaseColor(e.target.value);
        document.documentElement.style.setProperty('--base', e.target.value);
    }

    return (
        <>
          <StyledPage3 />
          <h2>Update CSS Variables with <span className='h1'>JS</span></h2>
          <Controls className='controls'>
            <label htmlFor='spacing'>Spacing</label>
            <input
              id='spacing'
              type='range'
              name='spacing'
              min='10'
              max='200'
              value={spacing}
              onChange={handleSpacingChange}
              data-sizing="px"
            />

            <label htmlFor='blur'>Blur</label>
            <input
              id='blur'
              type='range'
              name='blur'
              min='0'
              max='25'
              value={blur}
              onChange={handleBlurChange}
              data-sizing='px'
            />

            <label htmlFor='base'>Base Color</label>
            <input
              id='base'
              type='color'
              name='base'
              value={baseColor}
              onChange={handleBaseColorChange}
            />
          </Controls>

          <StyledImg src='https://source.unsplash.com/7bwQXzbf6KE/800x500' alt='Unsplash' />
        </>
    );
};

export default Page3;