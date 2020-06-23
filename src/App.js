import React, { Component } from 'react';
import Main from './components/MainComponent'
import './App.css';

class App extends Component {
  
	render(){

      return (
        <div>
			<React.StrictMode>
				<Main/>
			</React.StrictMode>
      	</div>
      );
    }
}

export default App;
