//object representing what you want rendered to the DOM
const title = "My React Element!";
const desc = "I created a React node and rendered it into the DOM.";
const myTitleID = 'main-title';
const name = 'Rod';

const header = (
    <header>
        {/*comment*/}
        <h1 id={myTitleID}>{name}'s React Element!</h1>
        <p className="main-desc">{desc}</p>
    </header>
)

ReactDOM.render(
    header,
    document.getElementById('root')
)