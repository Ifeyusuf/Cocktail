import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchTerms from '../components/SearchTerms';

const Home = () => {
  return (
    <main>
      <SearchTerms/>
      <CocktailList/>
    </main>
  )
}

export default Home
