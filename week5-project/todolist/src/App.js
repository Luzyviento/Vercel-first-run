import logo from './logo.svg';
import './App.css';

function WelcomeMessage(props) {
  return <p>Welcome to Apopka, {props.name}!!!</p>
}

function App() {
  const message = 'Lonely Puppies Welcome'
  return (
    <div className="App">
      <header className="App-header">
        {message}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage name = {"Lonely Puppy"}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
