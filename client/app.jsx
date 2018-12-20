class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello World',
            items: []
        }
        this.fetchItems = this.fetchItems.bind(this);
    }

    fetchItems() {
        fetch('http://localhost:3004/related')
            .then(data => data.json())
            .then(json => {
                let newState = {};
                newState.items = json;
                this.setState(newState)
            })
            .catch(error => {
                console.log('error', error)
            })

    }

    componentDidMount() {
        this.fetchItems();
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => {
                    return (
                        <div className='item-name'>
                            {item.name}
                            <div><img src={item.fullimg} /></div>
                            <div className='blurb'>
                                {item.blurb}
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'))


