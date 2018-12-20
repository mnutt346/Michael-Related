class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello World',
            items: []
        };
        this.fetchItems = this.fetchItems.bind(this);
    }

    fetchItems() {
        fetch('http://localhost:3004/related').then(data => data.json()).then(json => {
            let newState = {};
            newState.items = json;
            this.setState(newState);
        }).catch(error => {
            console.log('error', error);
        });
    }

    componentDidMount() {
        this.fetchItems();
    }

    render() {
        return React.createElement(
            'div',
            null,
            this.state.items.map(item => {
                return React.createElement(
                    'div',
                    { className: 'item-name' },
                    item.name,
                    React.createElement(
                        'div',
                        null,
                        React.createElement('img', { src: item.fullimg })
                    ),
                    React.createElement(
                        'div',
                        { className: 'blurb' },
                        item.blurb
                    ),
                    React.createElement('hr', null)
                );
            })
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
