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
            <span className="stats">Players: {props.totalPlayers(5)}</span>
        </header>
    )};

const Player = (props) => (
    <div className="player">
        <span className="player-name">
            {props.name}
        </span>
        <Counter score={props.score}/>
    </div>
);

const Counter = (props) => (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
    </div>
);

const App = () => (
    <div className="scoreboard">
        <Header
            title="Scoreboard"
            totalPlayers={n => n + 10} />
            {/*Players List*/}
        <Player
            name="Rod"
            score={50}
        />
        <Player
            name="James"
            score={20}
        />
        <Player
            name="John"
            score={30}
        />
        <Player
            name="Joe"
            score={10}
        />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
)