import { Fragment } from 'react';
import './App.css';
import MessageInput from './MessageInput';
import ListMessages from './ListMessages';

function App() {
  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
      <ListMessages/>
      <MessageInput/>
      </header>
        
    </div>
    </Fragment>
  );
}

export default App;
