import React from "react";
import "./BrendsItem.css";
interface IBrendsItemProps {
  name: string;
  img: any;
}

const BrendsItem = ({ name, img }: IBrendsItemProps) => {
  return (
    <div
      className='BrendsItem'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* <img src={img} alt={name} /> */}

      <p>{name}</p>
    </div>
  );
};

export default BrendsItem;
