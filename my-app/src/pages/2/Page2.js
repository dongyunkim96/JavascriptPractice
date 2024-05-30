import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  background: #018DED url('https://unsplash.it/1500/1000?image=881&blur=5');
  background-size: cover;
  font-family: 'helvetica neue';
  text-align: center;
  font-size: 10px;
}

body {
    margin: 0;
    font-size: 2rem;
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
}
`;

const Clock = styled.div`
  width: 30rem;
  height: 30rem;
  border: 20px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef, inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ClockFace = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);
`;

const MinuteHand = styled.div`
  width: 50%;
  height: 6px;
  background: blue;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`;

const SecondHand = styled.div`
  width: 50%;
  height: 6px;
  background: red;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`;

const HourHand = styled.div`
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`;

const Page2 = () => {
    const secondHandRef = useRef(null);
    const minsHandRef = useRef(null);
    const hourHandRef = useRef(null);

    const setDate = () => {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        if (secondHandRef.current) {
            secondHandRef.current.style.transform = `rotate(${secondsDegrees}deg)`;
        }

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
        if (minsHandRef.current) {
            minsHandRef.current.style.transform = `rotate(${minsDegrees}deg)`
        }

        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
        if (hourHandRef.current) {
            hourHandRef.current.style.transform = `rotate(${hourDegrees}deg)`;
        }
    };

    useEffect(() => {
        setDate();
        const intervalId = setInterval(setDate, 1000);
        return () => clearInterval(intervalId);
    }, []);

  return (
      <>
        <GlobalStyle />
        <Clock>
          <ClockFace>
            <HourHand ref={hourHandRef} classname="hand hour-hand" />
            <MinuteHand ref={minsHandRef} classname="hand min-hand" />
            <SecondHand ref={secondHandRef} classname="hand second-hand" />
          </ClockFace>
        </Clock>
      </>
    );
};

export default Page2;