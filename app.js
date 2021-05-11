//object representing what you want rendered to the DOM
// const title = "My React Element!";
// const desc = "I created a React node and rendered it into the DOM.";
// const myTitleID = 'main-title';
// const name = 'Rod';

const Header = () => (
        <header>
            {/*static placeholder text*/}
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );

const Player = () => (
    <div className="player">
        <span className="player-name">
            Rod
        </span>
        <Counter />
    </div>
);

const Counter = () => (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">0</span>
        <button className="counter-action increment"> + </button>
    </div>
);

const App = () => (
    <div className="scoreboard">
        <Header />
        {/*Players list*/}
        <Player />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
)