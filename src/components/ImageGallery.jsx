import React from "react";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";

const ImageGallery = ({ cartImages }) => {
  return (
    <>
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center">
        <Link to="/">Home</Link>
        
        </nav>
      </header>
      <div className="flex" style={{ gap: "10px", flexWrap: "wrap" }}>
        {cartImages.map((imageUrl) => (
          <ImageCard key={imageUrl} imageUrl={imageUrl} />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
