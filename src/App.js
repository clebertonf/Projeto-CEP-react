import './App.css';
import Cep from './components/Cep';
import { Provider } from 'react-redux';
import store from './redux/store/index';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <Cep />
      </Provider>
    </div>
  );
}

export default App;
