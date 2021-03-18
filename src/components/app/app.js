import React, { Component } from 'react';
import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiContextProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import {LoginPage, PeoplePage, PlanetPage, SecretPage, StarshipPage} from "../pages";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {StarshipDetails} from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  }

  loggedIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    return (
      <div className='container-md'>
        <ErrorBoundary>
          <SwapiContextProvider value={this.swapiService} >
            <Router>
              <Header/>
              <RandomPlanet/>
              <Switch>
                <Route path='/'
                       render={() => <h2>Welcome to StarDB</h2>}
                       exact/>

                <Route path='/people/:id?' component={PeoplePage}/>
                <Route path='/planets' component={PlanetPage}/>
                <Route path='/starships' exact component={StarshipPage}/>
                <Route path='/starships/:id'
                       render={({match}) => {
                         const {id} = match.params;
                         return <StarshipDetails itemId={id}/>
                       }}
                />

                <Route path='/login'
                       render={() => {
                         return <LoginPage isLoggedIn={this.state.isLoggedIn}
                                           loggedIn={this.loggedIn}/>
                       }}/>

                <Route path='/secrets'
                       render={() => {
                         return <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                       }}/>
                <Route render={() => <h2>Page not found</h2>}/>
              </Switch>
            </Router>
          </SwapiContextProvider>
        </ErrorBoundary>
      </div>
    )
  }
  
}

