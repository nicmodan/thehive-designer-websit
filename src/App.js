import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

// IMPORTING REDUX STORE TO CONNECT REDUCERS AND ACTION FUNCTIONS

import { useSelector, useDispatch } from 'react-redux';
import { inistalizeNote } from './reducer/thehivecatlogreducer';

function App() {

  const dispatch = useDispatch()

  // ACCESSING ALL RESOURCES FROM THE BACKEND USING REDUX TO DISPLAY
  const resouces = useSelector(state=>state.resources)
  
  // PREVIEW AVAILBLE RESOUCES IN INSPECT ELEMENT TERMINAL
  console.log(resouces)


  // RETRIVING ALL RESOUCES FROM BACKEND USING REDUX
  useEffect(()=>{
    dispatch(inistalizeNote())
  }, [dispatch]) 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

// export default App;
