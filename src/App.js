import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
// import { useEffect } from 'react';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Route exact path="/" component={Home} /> */}
      </div>
    </div>
  );
}

export default App;
