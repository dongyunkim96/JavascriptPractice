import React, { useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Background1 from "./background.jpg";
import clapSound from "./sounds/clap.wav";
import hihatSound from "./sounds/hihat.wav";
import kickSound from "./sounds/kick.wav";
import openhatSound from "./sounds/openhat.wav";
import boomSound from "./sounds/boom.wav";
import rideSound from "./sounds/ride.wav";
import snareSound from "./sounds/snare.wav";
import tomSound from "./sounds/tom.wav";
import tinkSound from "./sounds/tink.wav";

const keys = [
    { key: 'A', sound: 'clap', keyCode: 65, src: clapSound },
    { key: 'S', sound: 'hihat', keyCode: 83, src: hihatSound },
    { key: 'D', sound: 'kick', keyCode: 68, src: kickSound },
    { key: 'F', sound: 'openhat', keyCode: 70, src: openhatSound },
    { key: 'G', sound: 'boom', keyCode: 71, src: boomSound },
    { key: 'H', sound: 'ride', keyCode: 72, src: rideSound },
    { key: 'J', sound: 'snare', keyCode: 74, src: snareSound },
    { key: 'K', sound: 'tom', keyCode: 75, src: tomSound },
    { key: 'L', sound: 'tink', keyCode: 76, src: tinkSound },
];

const Page1 = () => {
    const audioRefs = useRef([]);

    const playSound = (keyCode) => {
        const audio = audioRefs.current.find((audio) => audio.dataset.key == keyCode);
            const key = document.querySelector(`div[data-key="${keyCode}"]`);
            if (!audio) return;

            key.classList.add('playing');
            audio.currentTime = 0;
            audio.play();
        };
    
    useEffect(() => {
        const handleKeyDown = (e) => playSound(e.keyCode);

        const handleTransitionEnd = (e) => {
            if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
        };

        window.addEventListener('keydown', handleKeyDown);
        const keyElements = document.querySelectorAll('.key');
        keyElements.forEach((key) => key.removeEventListener('transitionend', handleTransitionEnd));

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            keyElements.forEach((key) => key.removeEventListener('transitionend', handleTransitionEnd));
        };
    }, []);

    return (
        <>
          <GlobalStyle />
          <KeysContainer>
            {keys.map((key, index) => (
                <Key 
                  key={key.keyCode} 
                  data-key={key.keyCode} 
                  className="key"
                  onClick={() => playSound(key.keyCode)}  
                >
                    <Kbd>{key.key}</Kbd>
                    <Sound>{key.sound}</Sound>
                    <audio
                      data-key={key.keyCode}
                      ref={(el) => (audioRefs.current[index] = el)}
                      src={key.src}
                    ></audio>
                </Key>
            ))}
          </KeysContainer>
        </>
    );
};

export default Page1;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    background: url(${Background1}) bottom center;
    background-size: cover;
  }

  body, html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const KeysContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Key = styled.div`
  border: 0.4rem solid black;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  transition: all 0.07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 0.5rem black;

  &.playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }
`;

const Kbd = styled.kbd`
  display: block;
  font-size: 4rem;
`;

const Sound = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #ffc600;
`;