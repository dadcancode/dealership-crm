import React, {Component} from 'react';
import Header from './components/Header.js';
import SideNav from './components/SideNav.js';
import Organizer from './components/Organizer.js';
import Prospects from './components/Prospects.js';
import AddProspect from './components/AddProspect.js';

import './App.css';

class App extends Component {

  state = {
    viewMode: 'addProspect',
    users: [],
    activeUser: {},
    activeUserProspects: []
  }

  getUsers = () => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(json => this.setState({
        users: json
      }, () => {
        this.setState({
          activeUser: this.state.users[4]
        }, () => {
          this.getUserProspects(this.state.activeUser)
        })
      }));
  }

  getUserProspects = (user) => {
    console.log('I ran so far away')
    fetch(`http://localhost:3000/users/${user.id}/prospects`)
      .then(resp => resp.json())
      .then(json => this.setState({
        activeUserProspects: json
      }))
  }

  componentDidMount = () => {
    this.getUsers();
  }

  renderView = () => {
    switch(this.state.viewMode) {
      case 'organizer':
        return <Organizer />
      break;
      case 'prospects':
        return <Prospects activeUser={this.state.activeUser} prospects={this.state.activeUserProspects} />
      break;
      case 'addProspect':
        return <AddProspect userId={this.state.activeUser.id}/>
      break;
    }
  }

  render () {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <SideNav />
          <div className="view-window">
            {this.renderView()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
