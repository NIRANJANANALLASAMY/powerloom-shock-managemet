import React from "react";
import { useParams } from "react-router-dom";

const categoryDetails = {
  1: {
    title: "MS Bolt and Nuts",
    description: "MS (Mild Steel) Bolt and Nuts are essential fasteners used in various construction and industrial applications.",
    images: ["/images/ms1.jpg", "/images/ms2.jpg", "/images/ms3.jpg"]
  },
  2: {
    title: "Colored Nylon Leather",
    description: "With the valuable assistance of a skilled team of professionals, we are engaged in offering an extensive range of high-quality Colored Nylon leather.",
    images: ["/images/2.1.jpg", "/images/2.2.jpg", "/images/2.3.jpg"]
  },
  3: {
    title: "High-Quality Picker Material",
    description: "These are made from high-quality material picker, helping to withstand the pressure of the shuttle.",
    images: ["/images/3.1.jpg", "/images/3.2.jpg", "/images/picker3.jpg"]
  },
  4: {
    title: "Tying Materials",
    description: "These are widely used to tie the set of working parts together to keep them in place.",
    images: ["/images/4.1.jpg", "/images/4.2.jpg", "/images/4.3.jpg"]
  },
  5: {
    title: "Casting Materials",
    description: "Casting materials are selected based on their strength, durability, machinability, and resistance to wear and corrosion.",
    images: ["/images/5.1.jpg", "/images/5.2.jpg", "/images/5.3.jpg"]
  },
  6: {
    title: "Picking Wheel (Pic Wheel)",
    description: "A picking wheel is a circular component with a toothed circumference used in weaving and textile machinery.",
    images: ["/images/6.1.jpg", "/images/6.2.jpg", "/images/6.3.jpg"]
  },
  7: {
    title: "Spanner set and tools",
    description: "Our varied product includes Spanners, Wrenches, Pliers, Cold Forged Sockets, Wheel Spanners, OEM Tool Kits, and Measuring Tapes.",
    images: ["/images/7.1.jpg", "/images/7.2.jpg", "/images/7.3.jpg"]
  },
  8: {
    title: "Weaving Reed",
    description: "A weaving reed is a crucial tool used in looms to maintain even spacing and tension of warp threads during the weaving process.",
    images: ["/images/8.1.jpg", "/images/8.2.webp", "/images/8.3.webp"]
  },
  9: {
    title: "Weaving Shuttle",
    description: "Offering a range of Looms Weaving Shuttles, including Silk Shuttle, Textiles Shuttle, and High-Quality Hylam Shuttle.",
    images: ["/images/9.1.jpg", "/images/9.2.png", "/images/9.3.png"]
  }
};

const CategoryDetail = () => {
  const { id } = useParams();
  const category = categoryDetails[id];

  return (
    <div style={{ padding: "20px" }}>
      {category ? (
        <>
          <h1 style={titleStyle}>{category.title}</h1>
          <p style={descriptionStyle}>{category.description}</p>
          <div style={imageContainerStyle}>
            {category.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Category ${id} - Image ${index + 1}`}
                style={imageStyle}
              />
            ))}
          </div>
        </>
      ) : (
        <p>No details available for this category.</p>
      )}
    </div>
  );
};

const titleStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "10px",
  textAlign: "center"
};

const descriptionStyle = {
  fontSize: "1.2rem",
  marginBottom: "20px",
  textAlign: "center"
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
  marginBottom: "20px"
};

const imageStyle = {
  width: "400px",
  height: "500px",
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
};

export default CategoryDetail;
