// App.js
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from '../reducers/cartReducer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { products } from './components/data';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.css';


const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <hr></hr>
        <ProductList products={products} />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
