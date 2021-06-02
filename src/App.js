import NavBar from './NavBar';
import './App.css';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
      <div>
        <NavBar/>
          <div className="container">
            <main>
              <h1>Hola mundo</h1>
              <ItemListContainer/>
            </main>
          </div>
      </div>
  );
}

export default App;
