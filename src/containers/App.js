import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SeacrhBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './app.css';

class App extends React.Component {

    constructor(){
      super();
      this.state = {
        robots: [],
        searchField: ''
      }
    }
    onSearchChange = (event) => {

      this.setState( { searchField: event.target.value } );
  
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => this.setState({robots: users}) )
    }

    render () {
      
      const { robots, searchField } = this.state;

      const filteredRobots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return (
        <div className='content tc'>
          <a href='/'>
          <h1 className='tc'>Robofriends</h1>
          </a>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
              <ErrorBoundary>
                 <CardList  robots={filteredRobots} />
              </ErrorBoundary>
          </Scroll>
        </div>
      );
    }

}

export default App;
