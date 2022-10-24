import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import  Routes from './Routes';
// import {  } from './redux/slices/userSlice';




function App(props) {
  const count = useSelector(state => state.users)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
