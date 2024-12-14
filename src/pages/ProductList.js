import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice'; // Suponiendo que ya tienes el slice de Redux
import './ProductList.css'; // Importa los estilos


// Datos de ejemplo de las plantas
const products = [
  { id: 1, name: 'Planta A', price: 20, image: 'image-a.jpg', category: 'Interior' },
  { id: 2, name: 'Planta B', price: 30, image: 'image-b.jpg', category: 'Exterior' },
  { id: 3, name: 'Planta C', price: 25, image: 'image-c.jpg', category: 'Interior' },
  { id: 4, name: 'Planta D', price: 15, image: 'image-d.jpg', category: 'Exterior' },
  { id: 5, name: 'Planta E', price: 10, image: 'image-e.jpg', category: 'Interior' },
  { id: 6, name: 'Planta F', price: 40, image: 'image-f.jpg', category: 'Interior' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);

  // Funcion para agregar al carrito
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Usando Redux para agregar al carrito
  };

  return (
    <div>
      <h1>Listado de Productos</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Añadir a la cesta</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
