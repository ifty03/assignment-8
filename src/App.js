
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Question from './Components/Question/Question';
import {Shop} from './Components/Shop/Shop';

function App() {
  return (
    <div style={{margin:"0px 30px"}}>
     <Shop></Shop>
     <Question></Question>
    </div>
  );
}

export default App;
