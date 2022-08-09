import { NavbarSimple, FooterLegal, FooterNavigation } from 'react-blueprint-library';
import Jumbotron from './Components/Jumbotron';
import HomepageFeatures from './Components/HomepageFeatures';
import './App.scss';




function App(props) {
  return (
    <article>
      <header>
        <NavbarSimple {...props} authHref="#" />
      </header>

      <main>
        <Jumbotron />
        <HomepageFeatures />
      </main>
      <footer>
        <FooterLegal />
      </footer>
    </article>
  );
}

export default App;
