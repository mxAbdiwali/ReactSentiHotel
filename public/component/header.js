const React = require('react');
const ReactDom = require('react-dom');

class Navbar extends React.Component{
     render(){
         return(
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">{console.log(this.state)}</a>
                <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
          </nav>
         )
     }
 }

 module.exports = Navbar;