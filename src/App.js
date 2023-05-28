import {BrowserRouter} from 'react-router-dom'
import './App.css'
import AnimatedRoutes from './AnimatedRoutes';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
