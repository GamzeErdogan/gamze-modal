import logo from './lib/components/logo.png'
import './App.css';
import Modal from './lib/components/Modal';



function App() {
  return (
    <div className="App">
     <Modal title={'Success!!'} text={'New employee has been created!!!'} image={logo} show={true}/>
    </div>
  );
}

export default App;
