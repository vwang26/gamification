// Temporary component until the CSS-Blueprint component is migrated to React-Blueprint
import logo from '../img/hello-blueprint.svg';

const Jumbotron = () => {
  return (
    <section className="jumbotron" aria-label="Blueprint Hero Banner">
      <div className="background-image"></div>
      <div className="container jumbotron-body">
        <div className="row reverse">
          <div className="col-md-6">
            <h1>Hello Blueprint!</h1>
            <p>The mission of the Blueprint Design System Squad is to build and maintain the Global UI Component Library used across MassMutual's web experience to support and promote MassMutual's vision for our customers to help secure their future and protect the ones they love.</p>
            <a className="btn btn-primary" href="https://blueprint-css.dx-prod.cxawsprd.massmutual.com/docs/getting_started.html">Let's Get Started!</a>
          </div>
          <div className="col-md-6 justify-content-center align-self-center">
            <img src={logo} className="bp-logo" alt="Blueprint logo large" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
