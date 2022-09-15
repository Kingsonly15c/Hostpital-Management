import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logo';
import Button from './Components/Button/Button';

function App() {

  function loginAction(){
    alert('I did it!!!')
  }
  return (
    <div className="App">
        <Logo/>
        <Button title='Login' type='danger' action={loginAction}/>
    </div>
  );
}

export default App;
