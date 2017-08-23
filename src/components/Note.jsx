

var React = require('react');


var Note = React.createClass({
    getInitialState(){
        return {
            editing: false
        }
    },
    edit(){
       this.setState({
           editing: true
       })
    },
    save(){
        this.props.onChange(this.refs.newText.value, this.props.id);
        this.setState({editing:false})
    },
    delete(){
       this.props.onDelete(this.props.id)      
    },
    randomBetween(x,y,z){
        return (x + Math.ceil(Math.random() * (y-x))) + z;
    },
    componentWillMount() {
      this.style = {
          right: this.randomBetween(0, window.innerWidth - 150, 'px'),
          top: this.randomBetween(0, window.innerHeight - 150, 'px')
      }  
    },
    componentDidUpdate(){
        if(this.state.editing){
            this.refs.newText.focus();
            this.refs.newText.select();
        }
    },
    renderForm(){
        return (
            <div className="note" style={this.style} >
               <textarea className="edit-area" ref="newText" defaultValue={this.props.children}></textarea>
                <span className="action-btn">
                    <button className="save-btn" onClick={this.save}>SAVE</button>
                </span>                
            </div>
        )
    },
    renderDisplay(){
        return (
            <div className="note" style={this.style}>
                <p>{this.props.children}</p>
                <span className="action-btn">
                    <button className="edit-btn" onClick={this.edit}>EDIT</button>
                    <button className="delete-btn" onClick={this.delete}>X</button>
                </span>
            </div>
        )
    },
    render(){
        return  (this.state.editing) ? this.renderForm() : this.renderDisplay()          
        
    }
})


module.exports = Note;