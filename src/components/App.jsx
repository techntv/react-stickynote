

var React = require('react');
var ReactDOM = require('react-dom');
var Note = require("./Note.jsx");
var Board = require("./Board.jsx");

var App = React.createClass({
    render(){
        return (
            <div>
                 <h1>
                     <i className="fa fa-superpowers" aria-hidden="true"></i>
                   ReactJS - Sticky Notes Board
                     <i className="fa fa-superpowers" aria-hidden="true"></i>
                 </h1>
                 {/* <Note>Hello World</Note> */}
                 <Board count={10}/>
            </div>
        )
    }
})

module.exports = App;