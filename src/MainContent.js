import React from 'react';
import { Link } from 'react-router-dom';

function MainContent({ currentPage, navigateToAbout, navigateToContact }) {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Example Text</h1>
            <p className="lead text-muted">
              Donec nibh lorem, volutpat fermentum turpis dapibus, efficitur malesuada lectus. Nam ornare felis a tellus dignissim ultrices. Quisque posuere tellus vitae purus porttitor accumsan. Quisque condimentum pulvinar blandit. Maecenas eget magna quam.

              Ut ut dolor mattis lacus varius consequat. Suspendisse libero lorem, finibus et elit non, elementum sagittis elit. Curabitur iaculis sed sapien vel congue. Cras aliquet a turpis sit amet laoreet. Fusce mollis, metus vel hendrerit ornare, purus dolor aliquam nisi, eu interdum ante nisi ut nunc. Nulla congue neque quis urna pharetra congue. Nam feugiat hendrerit est ac laoreet. Curabitur eu rutrum erat, ut pellentesque ipsum.
            </p>
            <p>
              <Link to="/about" className={`btn btn-primary my-2 ${currentPage === 'about' ? 'active' : ''}`}>
                About
              </Link>
              <Link to="/contact" className={`btn btn-secondary my-2 ${currentPage === 'contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
