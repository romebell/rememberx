import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page">
        <div className="main-page-description">Remembrrr is an application based on the spaced repetition learning technique. Learners review information at gradually increasing intervals for enhanced memory</div>

        <button id="main-page-get-started">Get Started</button>
            <Link to="/notes/">
              NOTE INDEX
            </Link>
        <footer>
          Footer Text
        </footer>

      </div>
    );
  }
}

export default MainPage;