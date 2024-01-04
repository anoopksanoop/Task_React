import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <Content/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
