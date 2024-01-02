import React from "react";
import { useParams } from "react-router-dom";

export default function Viewmore({ route }) {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <div>
        <h2>Product Details</h2>
        <p>Product ID: {id}</p>
        {/* Display other product details based on the fetched data */}
      </div>
    </div>
  );
}
