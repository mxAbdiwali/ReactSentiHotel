const React = require('react');
const ReactDom = require('react-dom');
const Navbar = require('./component/header.js');

class App extends React.Component {
    render(){
        return(
            <div className="container-fuild">
               <Navbar />
            </div>
        );
    };
};

ReactDom.render(
    <App brand="SentiHotel" />,
    document.getElementById('root')
);



    
