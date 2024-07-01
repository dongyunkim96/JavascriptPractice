import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import background15 from "./oh-la-la.jpeg";

const Page15 = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    const text = e.target.elements.item.value;
    if (text) {
      const newItem = { text, done:false };
      setItems([...items, newItem]);
      console.log("Item added:", newItem);
    }
    e.target.reset();
  };

  const toggleDone = (index) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setItems(newItems);
  };

  return (
    <Container15>
      <FishIcon15
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <path d="M495.9,425.3H16.1c-5.2,0-10.1,2.9-12.5,7.6c-2.4,4.7-2.1,10.3,0.9,14.6l39,56.4c2.6,3.8,7,6.1,11.6,6.1h401.7   c4.6,0,9-2.3,11.6-6.1l39-56.4c3-4.3,3.3-9.9,0.9-14.6C506,428.2,501.1,425.3,495.9,425.3z M449.4,481.8H62.6L43,453.6H469   L449.4,481.8z"/>
          <path d="M158.3,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v64.5   C144.2,115.7,150.5,122,158.3,122z"/>
          <path d="M245.1,94.7c7.8,0,14.1-6.3,14.1-14.1V16.1c0-7.8-6.3-14.1-14.1-14.1C237.3,2,231,8.3,231,16.1v64.5   C231,88.4,237.3,94.7,245.1,94.7z"/>
          <path d="M331.9,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1s-14.1,6.3-14.1,14.1v64.5   C317.8,115.7,324.1,122,331.9,122z"/>
          <path d="M9.6,385.2c5.3,2.8,11.8,1.9,16.2-2.2l50.6-47.7c56.7,46.5,126.6,71.9,198.3,71.9c0,0,0,0,0,0   c87.5,0,169.7-36.6,231.4-103.2c5-5.4,5-13.8,0-19.2c-61.8-66.5-144-103.2-231.4-103.2c-72,0-142.2,25.6-199,72.5l-50-47.1   c-4.4-4.1-10.9-5-16.2-2.2c-5.3,2.8-8.3,8.7-7.4,14.6l11.6,75L2.2,370.6C1.3,376.5,4.2,382.4,9.6,385.2z M380.9,230.8   c34.9,14.3,67.2,35.7,95.3,63.6c-10.1,10-20.8,19.2-31.9,27.5c-22.4-3.3-29.6-8.8-30.7-9.7c-4-5.7-11.8-7.7-18.1-4.4   c-6.9,3.6-9.5,12.2-5.9,19.1c1.9,3.5,7.3,10.3,22.4,16c-10.1,5.7-20.5,10.7-31.1,15.1C352.4,320.2,352.4,268.6,380.9,230.8z    M36.3,255.6l29.4,27.7c5.3,5,13.6,5.1,19.1,0.3c53.2-47.6,120.7-73.7,190-73.7c26.9,0,53.2,3.9,78.5,11.3   c-29.3,44.6-29.3,102,0,146.6c-25.3,7.4-51.6,11.3-78.5,11.3c-69,0-136.3-26-189.4-73.2c-2.7-2.4-13.4-6.3-19.1,0.3l-30.1,28.3   l5.7-40C42.2,293,36.3,255.6,36.3,255.6z"/>
          <circle cx="398.8" cy="273.8" r="14.1"/>
        </g>
      </FishIcon15>
      <Wrapper15>
        <Title15>LOCAL TAPAS</Title15>
        <Plates15>
          {items.length ? (
            items.map((item, i) => (
              <PlateItem15 key={i}>
                <input
                  type="checkbox"
                  data-index={i}
                  id={`item${i}`}
                  checked={item.done}
                  onChange={() => toggleDone(i)}
                />
                <label htmlFor={`item${i}`}>{item.text}</label>
              </PlateItem15>
            ))
          ) : (
            <PlateItem15>Loading Tapas...</PlateItem15>
          )}
        </Plates15>
        <AddItemsForm15 onSubmit={addItem}>
          <input type="text" name="item" placeholder="Item Name" required />
          <input type="submit" value="+ Add Item" />
        </AddItemsForm15>
      </Wrapper15>
    </Container15>
  );
};

export default Page15;

const Container15 = styled.div`
  box-sizing: border-box;
  background: url(${background15}) center no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`;

const FishIcon15 = styled.svg`
  fill: white;
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 50%;
  width: 200px;
  margin-bottom: 50px;
`;

const Wrapper15 = styled.div`
  padding: 20px;
  max-width: 350px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title15 = styled.h2`
  text-align: center;
  margin: 0;
  font-weight: 200;
`;

const Plates15 = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
`;

const PlateItem15 = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  font-weight: 100;
  display: flex;
  color: black;

  label {
    flex: 1;
    cursor: pointer;
  }

  input {
    display: none;
  }

  input + label:before {
    content: "⬜️";
    margin-right: 10px;
  }

  input:checked + label:before {
    content: "🌮";
  }
`;

const AddItemsForm15 = styled.form`
  margin-top: 20px;

  input {
    padding: 10px;
    outline: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;