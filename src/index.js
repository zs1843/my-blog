import React from 'react';
import ReactDOM from 'react-dom';
import './common.css';

export class App extends React.Component{
    render(){
        return (
           <div className='css'>哈哈</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));