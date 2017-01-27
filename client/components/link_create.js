import React, {Component} from 'react';

class LinkCreate extends Component {
    render(){
        return(
            <form>
            <div className="form-group">
                <label> Please insert the link that needs to be shortened! </label>
                <input className ="form-control"/>
                </div>
                <button className= "btn btn-primary"> Shorten It! </button>
            </form>
        )
    }
}

export default LinkCreate