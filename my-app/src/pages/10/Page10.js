import React, { useState } from "react";
import styled from "styled-components";

const Page10 = () => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [lastChecked, setLastChecked] = useState(null);

    const checkboxes = Array.from({ length: 9 }, (_, i) => ({
        id: i,
        label: [
            'This is an inbox layout.',
            'Check one item',
            'Hold down your Shift key',
            'Check a lower item',
            'Everything in between should also be set to checked',
            'Try do it without any libraries',
            'Just regular JavaScript',
            'Good Luck!',
            "Don't forget to record your result!",
        ][i],
    }));

    const handleCheck = (e, id) => {
        if (e.shiftKey && e.target.checked) {
            let inBetween = false;
            const newCheckedItems = checkboxes.map(checkbox => {
                if (checkbox.id === id || checkbox.id === lastChecked) {
                    inBetween = !inBetween;
                }
                
                if (inBetween || checkbox.id === id) {
                    return checkbox.id;
                }

                return null;
            }).filter(item => item !== null);

            setCheckedItems(prev => [...new Set([...prev, ...newCheckedItems])]);
        } else {
            setCheckedItems(prev =>
                e.target.checked ? [...prev, id] : prev.filter(item => item !== id) 
            );
        }

        setLastChecked(id);
    };

    return (
        <ContainerPage10>
            <InboxPage10>
                {checkboxes.map(checkbox => (
                    <ItemPage10 key={checkbox.id} checked={checkedItems.includes(checkbox.id)}>
                        <inputPage10
                          type='checkbox'
                          checked={checkedItems.includes(checkbox.id)}
                          onChange={e => handleCheck(e, checkbox.id)}
                        />
                        <p>{checkbox.label}</p>
                    </ItemPage10>
                ))}
            </InboxPage10>
        </ContainerPage10>
    );
};

const ContainerPage10 = styled.div`
  font-family: sans-serif;
  background: #ffc600;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InboxPage10 = styled.div`
  max-width: 400px;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
`;

const ItemPage10 = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;

  &:last-child {
    border-bottom: 0;
  }

  inputPage10[type='checkbox'] {
    margin: 20px;
  }

  p {
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    flex: 1;
    font-family: 'helvetica neue';
    font-size: 20px;
    font-weight: 200;
    border-left: 1px solid #d1e2ff;

    ${({ checked }) => checked && `
      background: #f9f9f9;
      text-decoration: line-through;
    `}
  }
`;

export default Page10;