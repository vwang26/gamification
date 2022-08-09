import React from 'react';

import { Card } from 'react-blueprint-library';
import blueprintLogo from '.././img/blueprint-icon.svg';
import reactBlueprintLogo from '.././img/react-blueprint-icon.svg';
import githubLogo from '.././img/github.svg';


const Main = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mm-text-center">The purpose of this site is to see the Blueprint Design System in action.</h2> 
          <p className="mm-text-center">It's an example of a simple React application using CSS-Blueprint for visual styling and components from the React-Blueprint library for dynamic interaction.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-3 align-self-stretch">
          <Card>
            <Card.Body>
              <a
                className="btn btn-link"
                href="https://blueprint-css.dx-prod.cxawsprd.massmutual.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Card.Title>CSS-Blueprint Styleguide</Card.Title> 
              </a>
              <img src={blueprintLogo} className="blueprint-logo" alt="Blueprint logo" />
            </Card.Body>
          </Card>
        </div>
        
        <div className="col-sm-6 col-md-3 align-self-stretch">
          <Card>
            <Card.Body>
              <a
                className="btn btn-link"
                href="https://react-blueprint-qa.dx.cxawsnprd.massmutual.com/?path=/story/introduction--page"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Card.Title>React-Blueprint Styleguide</Card.Title>
              </a>
              <img src={reactBlueprintLogo} className="blueprint-logo" alt="React Blueprint logo" />
            </Card.Body>
          </Card>
        </div>
        
        <div className="col-sm-6 col-md-3 align-self-stretch">
          <Card>
            <Card.Body>
              <a
                className="btn btn-link"
                href="https://massmutual.atlassian.net/wiki/spaces/SG/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Card.Title>About the Blueprint Squad</Card.Title>
              </a>
              <span className="icon-people-group icon-xl align-self-center" alt="People Group Icon"></span>
            </Card.Body>
          </Card>
        </div>

        
        <div className="col-sm-6 col-md-3 align-self-stretch">
          <Card>
            <Card.Body>
              <a
                className="btn btn-link"
                href="https://github.com/massmutual/hello_blueprint"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Card.Title>hello_blueprint Github Repo</Card.Title>
              </a>
              <img src={githubLogo} className="blueprint-logo" alt="Github logo" />
            </Card.Body>
          </Card>
        </div>
        <a href="calculator">
          Debug link to calculator
        </a>

        
      </div>
    </section>
  );
};

export default Main;
