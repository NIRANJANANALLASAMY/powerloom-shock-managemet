import React, { useState } from 'react';

const StockList = () => {
  const [products, setProducts] = useState([
    { name: 'Puffer', stock: 500 },
    { name: '7/16 rings', stock: 20000 },
    { name: 'Nylon manda', stock: 1000 },
    { name: 'shuttle', stock: 340 },
    { name: '1/2kg medium thread', stock: 500 },
    { name: '1/2kg large thread', stock: 658  },
  ]);

  const sortAscending = () => {
    const sorted = [...products].sort((a, b) => a.stock - b.stock);
    setProducts(sorted);
  };

  const sortDescending = () => {
    const sorted = [...products].sort((a, b) => b.stock - a.stock);
    setProducts(sorted);
  };

  const sortAlphabetical = () => {
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sorted);
  };

  return (
    <div style={{ padding: '20px', background: 'linear-gradient(to right, #ff7e5f, #feb47b)', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#fff' }}>Stock List Page</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Product Name</th>
            <th style={tableHeaderStyle}>Available Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{product.name}</td>
              <td style={tableCellStyle}>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button style={buttonStyle} onClick={sortAscending}>Sort by Stock (Ascending)</button>
        <button style={buttonStyle} onClick={sortDescending}>Sort by Stock (Descending)</button>
        <button style={buttonStyle} onClick={sortAlphabetical}>Sort Alphabetically</button>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '10px',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'left',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default StockList;
