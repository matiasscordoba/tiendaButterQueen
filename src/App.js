import NavBar from './components/navBar/NavBar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
      <div>
        <NavBar/>
          <div className="container">
            <main>
              <ItemListContainer/>
            </main>
          </div>
      </div>
  );
}

export default App;
