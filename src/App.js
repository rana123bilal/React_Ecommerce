import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';
import Header from './components/header-component/header-component';
import ShopPage from "./pages/shop/shop.component";



function App() {
  return (
    <div>
      <Header />
      <switch>
    <Route  exact path='/' component = {HomePage} />
    <Route  path='/shop' component = {ShopPage} />
    </switch>
    </div>
  );
}

export default App;
 