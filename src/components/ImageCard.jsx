import React from 'react';

const ImageCard = ({ imageUrl }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt="Card" className="w-[100px] h-[100px]" style={{height:'100px',width:'100px'}}/>
    </div>
  );
};

export default ImageCard;