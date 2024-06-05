import React, { useState } from 'react';
import styled from 'styled-components';

const Page5Styled = styled.div`
  html {
    box-sizing: border-box;
    background: #ffc600;
    font-family: 'helvetica neue';
    font-size: 20px;
    font-weight: 200;
  }

  body {
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const Panels = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
`;

const Panel = styled.div`
  background: #6B0F9C;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  font-size: 20px;
  background-size: cover;
  background-position: center;
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;

  ${({ isOpen }) => isOpen && `
    flex: 5;
    font-size: 40px;
  `}
  
  > * {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > *:first-child {
    transform: translateY(-100%);
    ${({ isActive }) => isActive && `
      transform: translateY(0);
      `}
  }

  > *:last-child {
    transform: translateY(100%);
    ${({ isActive }) => isActive && `
      transform: translateY(0);
      `}
  }
`;

const PanelText = styled.p`
  text-transform: uppercase;
  font-family: 'Amatic SC', cursive;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 2em;

  &:nth-child(2) {
    font-size: 4em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const Page5 = () => {
    const [activePanels, setActivePanels] = useState({});

    const toggleOpen = (index) => {
        setActivePanels((prevState) => ({
            ...prevState,
            [index]: {
                ...prevState[index],
                isOpen: !prevState[index]?.isOpen,
            }
        }));
    };

    const toggleActive = (index, propertyName) => {
        if (propertyName.includes('flex')) {
            setActivePanels((prevState) => ({
                ...prevState,
                [index]: {
                    ...prevState[index],
                    isActive: !prevState[index]?.isActive,
                }
            }));
        }
    };

    const panelsData = [
        { text: ['Hey', "Let's", 'Dance'], image: 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500' },
        { text: ['Give', 'Take', 'Receive'], image: 'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500' },
        { text: ['Experience', 'It', 'Today'], image: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d' },
        { text: ['Give', 'All', 'You can'], image: 'https://source.unsplash.com/ITjiVXcwVng/1500x1500' },
        { text: ['Life', 'In', 'Motion'], image: 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500' },
      ];
    
    return (
        <>
          <Page5Styled />
          <Panels>
            {panelsData.map((panel, index) => (
                <Panel
                  key={index}
                  style={{ backgroundImage: `url(${panel.image})`}}
                  isOpen={activePanels[index]?.isOpen}
                  isActive={activePanels[index]?.isActive}
                  onClick={() => toggleOpen(index)}
                  onTransitionEnd={(e) => toggleActive(index, e.propertyName)}
                >
                    {panel.text.map((text, i) => (
                        <PanelText key={i}>{text}</PanelText>
                    ))}
                </Panel>
            ))}
          </Panels>
        </>
    );
};

export default Page5;