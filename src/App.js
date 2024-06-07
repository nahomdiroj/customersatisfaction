
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header';
import Questions from './components/question/Questions';
function App() {
  return (
    <div className="App container-fluid">
      <Header/>
      <Questions/>

    </div>
  );
}

export default App;
