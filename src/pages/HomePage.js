import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenidos a Plant Store</h1>
      <p>Las mejores plantas de interior y exterior.</p>
      <button>
        <Link to="/productos">Comenzar</Link>
      </button>
    </div>
  );
};

export default HomePage;
