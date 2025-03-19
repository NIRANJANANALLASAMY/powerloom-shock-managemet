import React, { useState } from "react";

const ByBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const brands = ["Mayoor", "Subaka", "BC Leather", "Khurana", "King","RK industries","Golden Key","Aishwarya","Sun","Global Belts","JP Motor"];

  return (
    <div style={pageStyle}>
      <h1>Brands Purchased</h1>
      <label style={labelStyle}>Select a Brand:</label>
      <select
        style={dropdownStyle}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="">-- Select a Brand --</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      {selectedBrand && <h2 style={brandStyle}>Showing details for: {selectedBrand}</h2>}
    </div>
  );
};

const pageStyle = {
  textAlign: "center",
  padding: "50px",
};

const labelStyle = {
  fontSize: "1.2rem",
  marginRight: "10px",
};

const dropdownStyle = {
  padding: "8px",
  fontSize: "1rem",
};

const brandStyle = {
  marginTop: "20px",
  fontSize: "1.5rem",
  fontWeight: "bold",
};

export default ByBrand;
