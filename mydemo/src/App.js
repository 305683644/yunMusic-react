import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import Index from './pages/index'
import List from './pages/list'
import Play from './pages/play'

class App extends React.Component{
  render(){
    return(<div>
      <Switch>
          <Route path='/index' component={Index}></Route>
          <Route path='/list' component={List}></Route>
          <Route path='/play' component={Play}></Route>
          <Redirect to="/index"></Redirect>
      </Switch>
    </div>)
  }
}

export default App;
