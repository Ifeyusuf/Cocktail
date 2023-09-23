import React from 'react'
import { useGlobalContext } from './context'

const SearchTerms = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchRef= React.useRef(null);

  const searchCoctails = ()=>{
    setSearchTerm( searchRef.current.value)
  }
const preventDefaultSearch= (e)=>{
  e.preventDefault();
}
  return (
    <section >
      <article className='text-center py-1 '>
        <div className='box-shadow mx-auto w-35 py-1 width-sm'>
        <p>Search your favorite cocktail</p>
      <form action="" onSubmit={preventDefaultSearch} className="py-1">
      <input type="search" id='name'  className='search' ref={searchRef} onChange={searchCoctails}/>
      </form>
        </div>
      </article>
    </section>
  )
}

export default SearchTerms
