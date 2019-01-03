import React, { Component } from 'react';
//import Pledge from '../../../Mike-JumpStart-Pledge/client/components/pledge.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Pledge />
                <Related />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;