import React, { useContext, useEffect, useState, useCallback} from 'react';

const AppContext=React.createContext();

const url= " https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const AppProvider = ({children}) => {
    const [loading, setLoading]= useState(false);
    const [searchTerm, setSearchTerm] = useState("a");
    const [cocktail, setCocktail] = useState([]);
    

   const fetchDrinks= useCallback( async () => {
    setLoading(true)
    try{
      const resp = await fetch(` ${url}${searchTerm} `)  ;
      const data= await resp.json(); 
      console.log(data);
      const {drinks}= data;
      if(drinks){
        const newDrinks= drinks.map ( (item)=>{
          const {
            strDrinkThumb,
            strGlass,
            strAlcoholic,
            strCategory,
            strDrink,
            idDrink
          }= item
          return(
           {
            image: strDrinkThumb,
            alchol: strAlcoholic,
            id: idDrink,
            category: strCategory,
            names: strDrink,
            glass:strGlass,
            }
          );
        })
        setCocktail(newDrinks)
      }
      else{
        setCocktail([])
      }
      setLoading(false)
     }
    catch (error){
      console.log(error);
      setLoading(false)
    }
   }, [searchTerm]);

   useEffect ( ()=>{
    fetchDrinks()
   },[searchTerm, fetchDrinks] )

  return (
    <AppContext.Provider value={{
        loading,
        cocktail,
        setSearchTerm
    }}>

        {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext= ()=>{
       return useContext(AppContext)
}

export {AppContext, AppProvider}
