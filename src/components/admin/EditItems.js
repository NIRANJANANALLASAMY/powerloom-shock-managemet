import React, { useState } from 'react';

const EditStock = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productCount, setProductCount] = useState('');

  const handleAddProduct = () => {
    if (productName.trim() && productCount > 0) {
      const newProduct = {
        name: productName,
        count: parseInt(productCount),
      };
      setProducts([...products, newProduct]);
      setProductName('');
      setProductCount('');
    } else {
      alert('Please enter a valid product name and count!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Edit Stock Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <h3>Add New Product</h3>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Count"
          value={productCount}
          onChange={(e) => setProductCount(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3>Product List</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - Count: {product.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditStock;
