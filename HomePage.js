import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('grid');

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <button onClick={() => setView('grid')}>Grid View</button>
      <button onClick={() => setView('list')}>List View</button>
      <div className={view}>
        {products.map(product => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
