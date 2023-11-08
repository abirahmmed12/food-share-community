import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Dynamicmanage = () => {
  // Use useParams to access route parameters

  const dynamic = useLoaderData()

  // You can fetch the data based on the 'id' and display it here
  // Example: Fetch data using 'id' and display it
  // const foodData = fetchDataById(id);
console.log(dynamic)
  return (
    <div>
   
      {/* Display the data here */}
      {/* Example: <p>Name: {foodData.name}</p> */}
    </div>
  );
};

export default Dynamicmanage;
