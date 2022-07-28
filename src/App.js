import './App.css';
import { Chat } from './components/Chat/Chat';
import { Left } from './components/Left/Left';
import { Right } from './components/Right/Right';

function App() {
  return (
    <div className="App">
      <Left></Left>
      <Chat></Chat>
      <Right></Right>
    </div>
  );
}

export default App;
