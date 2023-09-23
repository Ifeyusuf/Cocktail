import React, {useEffect, useCallback} from 'react';
import { Link, useParams } from 'react-router-dom';
// import Cocktails from '../components/Cocktails';
import Loading from "../components/Loading";

const url= "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const SingleCocktails = () => {
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  const {id}= useParams();

  const getCocktail = useCallback( async ()=>{
    setLoading(true)
    try{
      const resp = await fetch(`${url}${id}`);
    const data= await resp.json();
    console.log(data);
    const {drinks}= data;
    if(drinks){
        const {
            strDrinkThumb:img,
            strGlass:glass,
            strAlcoholic:alcohol,
            strCategory:category,
            strDrink:name,
            idDrink: id,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
        }= drinks[0]
        const ingridients= [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newDrinks ={
          img,
          glass,
          alcohol,
          category,
          name,
          id,
          ingridients
        }
        setCocktail(newDrinks)
    }
    else{
      setCocktail(null)
    }
    setLoading(false)
    }
    catch(error){
      console.log(error);
      setLoading(false)
    }
  }, [id]);

  useEffect( () =>{
    getCocktail()
  },[id, getCocktail])
  
  if(loading){
    return <Loading/>
    
  }
  if(!cocktail){
    return(
      <h2 className='text-center py-3'>No cocktail found</h2>
    )
  }
const {img,
  glass,
  alcohol,
  category,
  name,
  ingridients}= cocktail
  return (
    <section>
      <div className='container'>
        <article className='py-3 mt-3'>
          <div className="text-center">
          <Link to="/" className='primary-btn pb-1'>Back Home</Link>
          </div>
        <h2 className='text-center py-1 my-1'>{name}</h2>
          <div className="single__content row">
            <div className=" singlecocktail__image">
            <img src={img} alt="" />
            </div>
                <div className="single__text">
                  <p><span className='span'>Name:</span> {name}</p>
                  <p><span className='span'>Glass:</span> {glass}</p>
                  <p ><span className='span'>Alcohol:</span> {alcohol}</p>
                  <p><span className='span'>Category:</span> {category}</p>
                  <p><span className='span'>Ingridients: </span>{
                    ingridients.map( (items, index)=> {
                      return items ? <span key={index} className="ms-1"> {items}</span> : null
                    })
                    }</p>
                </div>
            </div>
          </article>
      </div>
    </section>
  )
}

export default SingleCocktails
