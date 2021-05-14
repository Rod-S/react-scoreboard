//object representing what you want rendered to the DOM
// const title = "My React Element!";
// const desc = "I created a React node and rendered it into the DOM.";
// const myTitleID = 'main-title';
// const name = 'Rod';


const Header = (props) => {
    console.log(props);
    return (
        <header>
            {/*static placeholder text*/}
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    )};

const Player = (props) => (
    <div className="player">
        <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
            {props.name}
        </span>
        <Counter />
    </div>
);

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            score: 0
        };
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }

    incrementScore() {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            };
        });
    }

    decrementScore() {
        if (this.state.score === 0) return
        this.setState( prevState => {
           return{ 
               score: prevState.score -1
            }
           });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            players: [
                {
                    name: "Guil",
                    id: 0
                },
                {
                    name: "Treasure",
                    id: 1
                },
                {
                    name: "Ashley",
                    id: 2
                },
                {
                    name: "James",
                    id: 3
                }
            ]
        };
        this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    }

    handleRemovePlayer(id) {
        this.setState(prevState => {
            return {
                players: prevState.players.filter( player =>
                    player.id !== id
                )
            }
        })
    }

    render() {
        return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={this.state.players.length}/>

            {/*Players List*/}
            {this.state.players.map(player =>
                <Player
                    id={player.id}
                    key={player.id.toString()}
                    name={player.name}
                    removePlayer={this.handleRemovePlayer}
                />
            )}
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)