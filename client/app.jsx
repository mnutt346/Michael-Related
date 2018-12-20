class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello World',
            items: [
                {
                    "thumbnail": "https://ksr-ugc.imgix.net/assets/022/991/896/70b562d05dfe5cbd6009fd21b356cce1_original.jpeg?ixlib=rb-1.1.0&crop=faces&w=48&h=27&fit=crop&v=1540265586&auto=format&frame=1&q=92&s=dfc02e51268503273e1d1363b8d348f3",
                    "fullImg": "https://ksr-ugc.imgix.net/assets/022/991/896/70b562d05dfe5cbd6009fd21b356cce1_original.jpeg?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=1540265586&auto=format&frame=1&q=92&s=4ee41378b32db6b35b57e8d20120ba57",
                    "name": "The Brunch Truck",
                    "blurb": "A Brunch Food Truck and Catering. With an exciting experience, and exquisite food!",
                    "goal": 40000,
                    "pledged": 16,
                    "backerCount": 2,
                    "creator": "Michael Hill",
                    "creatorImg": "https://ksr-ugc.imgix.net/assets/023/005/535/0e6c9bcf2e36876517b3a3d3d119d7b4_original.jpeg?ixlib=rb-1.1.0&w=160&h=160&fit=crop&v=1540346449&auto=format&frame=1&q=92&s=c97ccacd1ec2180f11648e890a13667f",
                    "locationName": "Denver, CO",
                    "category": "Food Trucks"
                },
                {
                    "thumbnail": "https://ksr-ugc.imgix.net/assets/023/011/776/60c31bc2cebdfd436454c08a9dd23477_original.jpg?ixlib=rb-1.1.0&crop=faces&w=48&h=27&fit=crop&v=1540391052&auto=format&frame=1&q=92&s=2bdd1d3ef3d5674cbc8b525f37d6bee6",
                    "fullImg": "https://ksr-ugc.imgix.net/assets/023/011/776/60c31bc2cebdfd436454c08a9dd23477_original.jpg?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=1540391052&auto=format&frame=1&q=92&s=2b9d8d8dc4182794f70ee68e239cf8c9",
                    "name": "Mamma's {Food Truck} ..Where Happiness Is Homemade",
                    "blurb": "❤ 5% of Truck Sales will provide a meal to someone in Need ... The Gift That Keeps On Giving",
                    "goal": 25000,
                    "pledged": 1,
                    "backerCount": 1,
                    "creator": "Tanya",
                    "creatorImg": "https://ksr-ugc.imgix.net/assets/023/011/459/7f523724347365a1e0a938ac392386db_original.jpg?ixlib=rb-1.1.0&w=160&h=160&fit=crop&v=1540922656&auto=format&frame=1&q=92&s=7da03ec2cbc640fb68f6b95b2074f6a8",
                    "locationName": "Providence, RI",
                    "category": "Food Trucks"
                },
                {
                    "thumbnail": "https://ksr-ugc.imgix.net/assets/023/206/128/cca7aa74f5908876ecbeddd943de8323_original.png?ixlib=rb-1.1.0&crop=faces&w=48&h=27&fit=crop&v=1541843186&auto=format&frame=1&q=92&s=d410f78f350293ec1fad1203659829c3",
                    "fullImg": "https://ksr-ugc.imgix.net/assets/023/206/128/cca7aa74f5908876ecbeddd943de8323_original.png?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=1541843186&auto=format&frame=1&q=92&s=6260535e6cbb6ba7600daf382630fa03",
                    "name": "FIT FOOD",
                    "blurb": "The project of creating a company for the production of healthy food and its delivery to consumers.",
                    "goal": 300000,
                    "pledged": 1,
                    "backerCount": 1,
                    "creator": "Oleksandr Kramar",
                    "creatorImg": "https://ksr-ugc.imgix.net/assets/023/205/359/44f3cb84237be10f91754faafa6a047e_original.jpg?ixlib=rb-1.1.0&w=160&h=160&fit=crop&v=1541791495&auto=format&frame=1&q=92&s=717ccfc21d0f0d354054a2553a6fe508",
                    "locationName": "Italia, Italy",
                    "category": "Food Trucks"
                },
                {
                    "thumbnail": "https://ksr-ugc.imgix.net/assets/023/547/211/3fd8950bb73e6a3ba529e6a8d329267c_original.jpeg?ixlib=rb-1.1.0&crop=faces&w=48&h=27&fit=crop&v=1544672404&auto=format&frame=1&q=92&s=14550e414f8233d67e7988aa81a42593",
                    "fullImg": "https://ksr-ugc.imgix.net/assets/023/547/211/3fd8950bb73e6a3ba529e6a8d329267c_original.jpeg?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=1544672404&auto=format&frame=1&q=92&s=4b9d404681993f5fd6621daa990df812",
                    "name": "Big Mama's Kitchen & Catering Brick & Mortar Restaurant",
                    "blurb": "We're turning our food truck into a brick and mortar! Come and be a part of our journey as we grow.",
                    "goal": 5000,
                    "pledged": 1,
                    "backerCount": 1,
                    "creator": "Robin Eggleston",
                    "creatorImg": "https://ksr-ugc.imgix.net/assets/013/967/200/1b71f0d54182b4f0c35dde1417ab93ae_original.jpg?ixlib=rb-1.1.0&w=160&h=160&fit=crop&v=1544636226&auto=format&frame=1&q=92&s=2a76d7a323f18d2294d9798308f5bd82",
                    "locationName": "Chicago, IL",
                    "category": "Restaurants"
                },
                {
                    "thumbnail": "https://ksr-ugc.imgix.net/assets/023/483/978/b425950910db87fbf3db68cf6af0ba32_original.jpg?ixlib=rb-1.1.0&crop=faces&w=48&h=27&fit=crop&v=1544050003&auto=format&frame=1&q=92&s=d2ceaa809212265cb81ecc1942d97b2b",
                    "fullImg": "https://ksr-ugc.imgix.net/assets/023/483/978/b425950910db87fbf3db68cf6af0ba32_original.jpg?ixlib=rb-1.1.0&crop=faces&w=560&h=315&fit=crop&v=1544050003&auto=format&frame=1&q=92&s=1460cab50f8a4968d759ec34d1cf91d5",
                    "name": "Help Us Grow our Fleet with a Go Bananas Food Trailer",
                    "blurb": "We are ready to take our business to the next level by adding a Go Bananas Food Trailer to our fleet to operate in MN and AZ.",
                    "goal": 12000,
                    "pledged": 190,
                    "backerCount": 4,
                    "creator": "Lisa Bastien",
                    "creatorImg": "https://ksr-ugc.imgix.net/assets/023/484/870/b425950910db87fbf3db68cf6af0ba32_original.jpg?ixlib=rb-1.1.0&w=160&h=160&fit=crop&v=1544055848&auto=format&frame=1&q=92&s=4c560ceb28103abb9aa977df12c0e43d",
                    "locationName": "St. Paul, MN",
                    "category": "Food Trucks"
                }
            ]
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



    render() {
        return (
            <div>
                <div>
                    <button onClick={this.fetchItems}></button>

                    {/* <h3>{this.state.items[3].name}</h3>
                    <h5>{this.state.items[3].blurb}</h5>
                    <img src={this.state.items[3].fullImg}></img>
                    <p>Goal: {this.state.items[3].goal}</p>
                    <p>Pledged: {this.state.items[3].pledged}</p> */}
                </div>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'))


