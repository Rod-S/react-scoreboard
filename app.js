//object representing what you want rendered to the DOM
// const title = "My React Element!";
// const desc = "I created a React node and rendered it into the DOM.";
// const myTitleID = 'main-title';
// const name = 'Rod';

const players = [
    {
        name: "Guil",
        score: 50,
        id: 0
    },
    {
        name: "Treasure",
        score: 85,
        id: 1
    },
    {
        name: "Ashley",
        score: 95,
        id: 2
    },
    {
        name: "James",
        score: 80,
        id: 3
    }
];

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
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

const App = (props) => (
    <div className="scoreboard">
        <Header
            title="Scoreboard"
            totalPlayers={props.initialPlayers.length} />

        {/*Players List*/}
        {props.initialPlayers.map(player =>
            <Player
                key={player.id.toString()}
                name={player.name}
            />
        )}
    </div>
);

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
)