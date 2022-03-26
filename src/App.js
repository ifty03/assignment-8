
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import {Shop} from './Components/Shop/Shop';

function App() {
  return (
  <div>
    <Header></Header>
      <div style={{margin:"0px 30px"}}>
     <Shop></Shop>
     <Question></Question>
    </div>
  </div>
  );
}

export default App;
