import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Related />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;