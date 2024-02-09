import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-start">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                about us
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    our story
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="missionPage.html">
                    our mission
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="visionPage.html">
                    our vision
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <a className="logo mx-auto" href="index.html">
          <img src="" alt="Logo" className="d-inline-block align-top" />
        </a>

        <div className="d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="productPage.html">
                our products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
