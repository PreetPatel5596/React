import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Para from './Para';
import Greetings from './Greetings';
import Welcome from './Welcome';
import Display1 from './Display1';
import Inc from './Inc';
import Clicked from './Clicked';
import Input from './Input';
import Login from './Login';
import Vote from './Vote';
 
function App() {
  return (
    <div className="App">
 <Display></Display>
 <Para></Para>
 <Greetings></Greetings>
 <Welcome></Welcome>
 <Display1 name={"Preet"} age={21} location={"Ahemdabad"}></Display1>
 <Inc></Inc>
 <Clicked></Clicked>
 <Input></Input>
 <Login></Login>
 <Vote></Vote>
    </div>
  );
}

export default App;
