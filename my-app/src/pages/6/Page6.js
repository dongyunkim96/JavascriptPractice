import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Page6Styled = styled.div`
  html {
    box-sizing: border-box;
    background: #ffc600;
    font-family: 'helvetica neue';
    font-size: 20px;
    font-weight: 200;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const SearchForm = styled.form`
  max-width: 400px;
  margin: 50px auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 20px;
  margin: 0;
  text-align: center;
  outline: 0;
  border: 10px solid #f7f7f7;
  width: 120%;
  left: -10px;
  position: relative;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 60px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
`;

const Suggestions = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
`;

const SuggestionItem = styled.li`
  background: white;
  list-style: none;
  border-bottom: 1px solid #D8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;

  &:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
  }

  &:nth-child(odd) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
  }

  span.population {
    font-family: 15px;
  }

  .h1 {
    background: #ffc600;
  }
`;

const Page6 = () => {
    const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        fetch(endpoint)
          .then(response => response.json())
          .then(data => setCities(data));
    }, []);

    const findMatches = (wordToMatch, cities) => {
        return  cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex);
        });
    };

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const displayMatches = () => {
        const matchArray = findMatches(searchTerm, cities);
        return matchArray.map((place, index) => {
            const regex = new RegExp(searchTerm, 'gi');
            const cityName = place.city.replace(regex, `<span class="h1">${searchTerm}</span>`);
            const stateName = place.state.replace(regex, `<span class="h1">${searchTerm}</span>`);
            return (
                <SuggestionItem key={index}>
                    <span className='name' dangerouslySetInnerHTML={{ __html: `${cityName}, ${stateName}`}} />
                    <span className='population'>{numberWithCommas(place.population)}</span>
                </SuggestionItem>
            );
        });
    };

    return (
        <>
          <Page6Styled />
          <SearchForm>
            <SearchInput
              type="text"
              className='search'
              placeholder='City or State'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Suggestions>
                {searchTerm ? displayMatches() : (
                    <>
                      <SuggestionItem>Filter for a city</SuggestionItem>
                      <SuggestionItem>or a state</SuggestionItem>
                    </>
                )}
            </Suggestions>
          </SearchForm>
        </>
    );
};

export default Page6;