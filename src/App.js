import './App.scss';
import React ,{Component} from 'react';
import Books from './containers/Books';
import CreateBook from './containers/CreateBook';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Nav from './component/Nav';
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      pathName:''
    };


    this.notifyPathName=this.notifyPathName.bind(this);
  }


notifyPathName(pathName){
  this.setState({
    pathName:pathName
  });
};



  render(){

  return (
    <Router>
    <div className="App">


       
  
   
      <Switch>
        <Route  path="/"  component={Books  }  exact>
        <Nav notifyPathName={this.notifyPathName}
            pathName={this.state.pathName}
          />
          <Books />
        </Route>
        <Route path="/create"  component={CreateBook}  exact/>
        <Route path="/edit/:id" exact component={(props)=> <CreateBook  {...props}/>}  />
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
