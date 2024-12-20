import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../assets/style/Header.css'

function Header({button}) {
  return (
    <>
    {/* <div className='header'>
        <div><Link to={"/"} className="link"><div className='logo'>Resume Builder</div></Link></div>
        <div>
          {location.pathname === "/" || location.pathname === "/about" ? <div><Link to={"/resumebuild"} className="link"><div>Start</div></Link></div> : null}
          {location.pathname === "/" ? <div onClick={() => props.handleclick()}>Contact</div> : null}
          <div><Link to={"/about"} className="link"><div>About</div></Link></div>
        </div>
      </div> */}
    <nav class="navbar navbar-expand-lg navbar-light   navbar  navwidth" style={{backgroundColor : '#002737'}}>
      
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> <h2 style={{color : 'white'}} class="resume-logo"> Resume Builder </h2></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div className="d-flex align-items-center">
    <li className="nav-item d-flex align-items-center">
        <Link className="nav-link active" aria-current="page" to='/'>
            <h5 className="mb-0" style={{color : 'white'}}>Home</h5>
        </Link>
        <div className='' style={{
          marginLeft : '600px',
          marginTop : '-16px'
        }}>
        {button}
        </div>
    </li>
</div>

        </ul>
      </div>
    </div>
  </nav>
  </>
  );
}

export default Header;