import React, {Component} from 'react';
import Header from './components/Header.js';
import SideNav from './components/SideNav.js';
import Organizer from './components/Organizer.js';
import Prospects from './components/Prospects.js';
import AddProspect from './components/AddProspect.js';
import ViewProspect from './components/ViewProspect.js';
import ViewTask from './components/ViewTask.js';

import './App.css';


class App extends Component {

  state = {
    viewMode: 'prospects',
    users: [],
    activeUser: {},
    activeUserProspects: [],
    openProspect: {},
    openTaskInd: -Infinity
  }

  getUsers = () => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(json => this.setState({
        users: json
      }, () => {
        this.setState({
          activeUser: this.state.users[3]
        }, () => {
          this.getUserProspects(this.state.activeUser)
        })
      }));
  }

  getUserProspects = (user) => {
    fetch(`http://localhost:3000/users/${user.id}/prospects`)
      .then(resp => resp.json())
      .then(json => this.setState({
        activeUserProspects: json
      }))
  }

  updateActiveUserProspects = (prospects) => {
    this.setState({
      activeUserProspects: prospects
    })
  }

  openTask = (event) => {
    console.log('clicked')
    this.setState({
      openTaskInd: event.target.id,
      viewMode: 'viewTask'
    })
  }

  completeTask = () => {
    
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
        return <Prospects activeUser={this.state.activeUser} prospects={this.state.activeUserProspects} getProspect={this.getProspect}/>
      break;
      case 'addProspect':
        return <AddProspect userId={this.state.activeUser.id} user={this.state.activeUser} changeView={this.changeView} updateProspects={this.getUserProspects}/>
      break;
      case 'viewProspect':
        return <ViewProspect prospect={this.state.openProspect} openTask={this.openTask}/>
      break;
      case 'viewTask':
        return <ViewTask ind={this.state.openTaskInd} prospect={this.state.openProspect}/>
      break;
    }
  }

  changeView = (view) => {
    this.setState({viewMode: view})
  }

  getProspect = (event) => {
    fetch(`http://localhost:3000/prospects/${event.target.id}`)
      .then(resp => resp.json())
      .then(json => this.setState({
        openProspect: json,
        viewMode: 'viewProspect'
      }))
  }

  render () {
    return (
      <div className="App">
        <Header changeView={this.changeView}/>
        <div className="main">
          <SideNav changeView={this.changeView}/>
          <div className="view-window">
            {this.renderView()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
