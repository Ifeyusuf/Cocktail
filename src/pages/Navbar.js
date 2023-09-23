import React, {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className=" nav container">
        <article className='row py-1 flex-div justify-between'>
          <Link ><h1>COCK<span className='text-green'>TAILS</span> DB</h1></Link>

          <div className="links-container">
            <ul className='  links'>
            <li>
            <Link to="/" className='text-green fw-bold hover'>Home</Link>
            </li>
            <li>
            <Link to="/About" className='text-green fw-bold hover'>About</Link>
            </li>
            </ul>
        </div>
        <button className='btn pc-only'>Sign in</button>
        </article>
      </div>
    </nav>
  )
}

export default Navbar
