import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Remembrrr</h1>
          <div>
            <Link to="/notes/">
              NOTE INDEX
            </Link>
          </div>
        <footer>
          Footer Text
        </footer>
      </div>
    );
  }
}

export default MainPage;