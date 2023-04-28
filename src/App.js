import logo from './logo.svg';
import './App.css';
import Cakes from './Components/CakesComponents/Cakes';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className='main'>
      <div className='logo'>

      <h1 >Live. Love. Cake!</h1>
      </div>
    <div className="App">

      <div className='block'>
      <AllCategories/>
      <Cart/>
      </div>
      <div className='block'>
      <Cakes/>
      </div>
    </div>
    </div>
  );
}

export default App;
