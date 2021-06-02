import React,{Component} from 'react';

import {Link} from 'react-router-dom';

class Nav extends Component{
    
    constructor(props){
        super(props);
    }
    
    
    
  componentWillMount(){
      this.props.notifyPathName(window.location.pathname)
  };


  render(){
      return(
        <div className="nav-section">
        <p id='p'>Create your List of books</p>

        {
            this.props.pathName==='/' ?  
            <Link to="/create" className="nav-link col-sm-1 ">Add  New </Link> :''
        }
        
        </div>
      );
  }
}

export default Nav;