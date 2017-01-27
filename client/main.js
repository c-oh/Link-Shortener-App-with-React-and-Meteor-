import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <p> Hello World </p>
    );
};

Meteor.startup(()=>{
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});