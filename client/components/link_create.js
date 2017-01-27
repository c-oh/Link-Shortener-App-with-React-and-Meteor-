import React, {Component} from 'react';

class LinkCreate extends Component {
    handleSubmit(event){
event.preventDefault();
console.log(this.refs.link.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label> Please insert the link that needs to be shortened! </label>
                <input ref= "input" className ="form-control"/>
                </div>
                <button className= "btn btn-primary"> Shorten It! </button>
            </form>
        )
    }
}

export default LinkCreate