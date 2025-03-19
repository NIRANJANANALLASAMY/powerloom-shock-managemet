import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

const categories = [
  { id: 1, title: "MS (Bolt and Nuts)" },
  { id: 2, title: "Nylon Leather" },
  { id: 3, title: "Leapick Picker" },
  { id: 4, title: "Nylon Material" },
  { id: 5, title: "Castin" },
  { id: 6, title: "Pix Wheel" },
  { id: 7, title: "Venus tool" },
  { id: 8, title: "Reed" },
  { id: 9, title: "Shuttle" },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={category.id} className="card" onClick={() => handleCardClick(category.id)}>
          <div className="card-title">{category.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
