import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page">
        <div className="main-page-description">
            <div className="main-page-description-one">
              <p>
                Enhance your <span className="highlight"> memory</span>
              </p>
            </div>  
            <div className="main-page-description-two">
              <p>
                <span className="highlight">Remembrrr</span> is an application based on the spaced repetition learning technique. <br/><br/>Learners review information at gradually increasing intervals for enhanced memory
              </p>
            </div>  
            <button id="main-page-get-started">Get Started</button>
        </div>
        <div className="main-page-image"></div>
        {/* <footer>
          Footer Text
        </footer> */}
      </div>
    );
  }
}

export default MainPage;