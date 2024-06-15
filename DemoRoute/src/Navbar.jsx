import {Link} from 'react-router-dom';
function Navbar() {   
   return ( 
      <>
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">Logo</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                  <li className="nav-item">
                     {/* <a className="nav-link" href="/">Home</a> */}
                     <Link className='nav-link' to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                     {/* <a className="nav-link" href="/about">About</a> */}
                     <Link className='nav-link' to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Contact</a>
                  </li>
                  </ul>
               </div>
            </div>
            </nav>
      </>
    );
}

export default Navbar;