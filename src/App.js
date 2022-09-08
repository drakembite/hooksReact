import './App.css';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import Characters from './components/Characters';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Characters />
      </div>
    </ThemeProvider>
  );
}

export default App;
