import React from 'react';
import Loading from "../components/Loading";
import Cocktails from "../components/Cocktails"
import { useGlobalContext } from './context';

const CocktailList = () => {
  const {loading, cocktail} = useGlobalContext();

  
    if(loading){
      return(
        <Loading/>
      )
    };
    if(cocktail.length < 1){
      return(
        <h2 className='text-center py-3'>No Cocktail matched the search criteria</h2>
      )
    }
   
  return (
    <section className='container'>
      <h1 className='text-center py-1'>Cocktail List</h1>
      <article className='grid'>
        {
          cocktail.map( (item)=>{
            return <Cocktails key={item.id} {...item}/>
          })
        }
      </article>
    </section>
  )
}

export default CocktailList
