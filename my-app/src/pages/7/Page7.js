import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Page7styled = styled.div`
  body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    text-align: center;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Page7 = () => {
  const [people] = useState([
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015},
  ]);

  const [comments, setComments] = useState([
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen is my fav food ever', id: 123523},
    {text: 'Nice Nice Nice!', id: 542328},
  ]);

  useEffect(() => {
    // Some and Every Checks
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({ isAdult });

    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({ allAdults });
    
    //Find the comment with the ID of 823423
    const comment = comments.find(comment => comment.id === 823423);
    console.log(comment);

    //Find the comment with this ID and delete it
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    if (index !== -1) {
        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index + 1),
        ];
        setComments(newComments);
    }
  }, [people, comments]);
  
  return (
    <Container>
        <Page7styled />
        <h1>Array Cardio</h1>
        <p><em>Psst: have a look at the JavaScript Console</em></p>
        <div>
            <h2>People</h2>
            <ul>
                {people.map(person => (
                    <li key={person.name}>{person.name} ({person.year})</li>
                ))}
            </ul>
        </div>
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    </Container>
  );
};

export default Page7;