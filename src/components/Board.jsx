var React = require('react');
var Note = require("./Note.jsx");
var Draggable = require('react-draggable');

var Board = React.createClass({
    propTypes: {
        count: function(props, propName){
            if(typeof props[propName] !== "number"){
                return new Error("the count must be a number")
            }
            if(props[propName] > 100) {
                return new Error('Creating ' + props[propName] + " notes is ridiculous")
            }
        }
    },
    getInitialState(){
        return {
            notes: []
        }
    },
    
    componentWillMount() {
      var self = this;
      if(this.props.count){
          var url = `https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`;
          var data = "";
          $.get(url)
            .then(data => data[0])
            .then(text => text.split('. '))
            .then(array => array.forEach(
                sentence => self.add(sentence)
            ))
            .catch(function(err){
                console.log("Didn't connect to the API")
            })
      }  
    
    },    
    update(newText, id){
        var notes = this.state.notes.map(
            note => (note.id !== id) ? note : {
                    ...note,
                    note: newText
                }
        );
        this.setState({notes});
    },
    delete(id){
        var notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    },
    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    add(text){
        var notes = [
            ...this.state.notes,
            {
                id: this.nextId(),
                note: text
            }
        ]

        this.setState({notes})
    },
    eachNote(note){
        return <Note key={note.id}
                     id={note.id}
                     onChange={this.update}
                     onDelete={this.delete}>
                    {note.note}
                </Note>
    },
    render(){
        return(
            <div className="board">
                 {this.state.notes.map(this.eachNote)}
                <button onClick={() => this.add("New note")}>+</button>                 
            </div>
        )
    }
})

module.exports = Board;