import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      {/* Fixed Navbar */}
      <nav style={navStyle}>
        <div style={navLeftStyle}>
          {/* Fixed Logo */}
          <img
            src="logo.jpg"
            alt="Logo"
            style={{ height: "50px" }}
          />
          <Link to="/admin/categorypage" style={linkStyle}>
            Category Page
          </Link>
          <Link to="/admin/edit-items" style={linkStyle}>
            Edit Items
          </Link>
          <Link to="/admin/stock-list" style={linkStyle}>
            Stock List
          </Link>
          <Link to="/admin/ByBrand" style={linkStyle}>
  By Brand
</Link>

        </div>

        {/* My Dashboard Navbar */}
        <div style={navRightStyle}>
          <Link to="/admin/AdminDashboard" style={linkStyle}>
            Admin Dashboard   .
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <h1 style={headingStyle}>SRI MARIAMMAN TRADERS</h1>
        <h1 style={headingStyle}>Welcome to the Admin Dashboard</h1>
        <p style={descriptionStyle}>
          This is a Spare Parts Stock Management Website. Here you can manage stock details, products, and orders effectively.
        </p>
        <div style={quoteContainerStyle}>
          <p style={quoteStyle}>"Weaving is the soul of fabric."</p>
          <p style={quoteStyle}>"Threads of tradition, woven with care."</p>
          <p style={quoteStyle}>"A loom doesn’t create fabric, it creates history."</p>
        </div>
      </div>

      {/* Full-width images */}
      <div>
        <img src="admin-loom.jpg" alt="Admin Image 1" style={imageStyle} />
      </div>
    </div>
  );
};

// Navbar styles
const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  padding: "1rem",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const navLeftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px"  // Adjust spacing between logo and links
};

const navRightStyle = {
  marginRight: "20px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

// Other styles
const mainContentStyle = {
  padding: "100px 20px",
  textAlign: "center"
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "20px"
};

const descriptionStyle = {
  fontSize: "1.2rem",
  marginBottom: "30px"
};

const quoteContainerStyle = {
  backgroundColor: "#f9f9f9",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(73, 214, 22, 0.1)",
  display: "inline-block"
};

const quoteStyle = {
  fontStyle: "italic",
  fontSize: "1rem",
  margin: "10px 0"
};

const imageStyle = {
  width: "100%",
  marginBottom: "20px"
};

export default AdminHome;
