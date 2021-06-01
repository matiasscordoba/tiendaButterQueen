import logo from './logo.svg';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <a href="#" className="navbar-brand">
            <img src={logo} alt="Butter Queen logo" width="30" height="24"
            className="d-inline-block align-top"
            ></img>
            Butter Queen</a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ml-auto text-center">
                <li>
                    <a className="nav-link" href="#">Seccion 1</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Seccion 2</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Seccion 3</a>
                </li>
            </ul>
        </div>
         </nav>
    );
  }
  export default NavBar;

/*
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
*/