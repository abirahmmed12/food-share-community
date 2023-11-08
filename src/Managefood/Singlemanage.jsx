import React from 'react';
import { Link } from 'react-router-dom';

const Singlemanage = ({ manage ,handleDelete}) => {
  const {
    _id, // Make sure you have the _id available in your 'manage' object
    donatorName,
    foodName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    donatorImage,
  } = manage;

  

  return (
    <div className="max-w-xl mx-auto sm:soverflow-x-auto">
      <table className="w-full border-collapse border border-[#446c2c] sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <thead>
          <tr className="bg-[#446c2c] text-white">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Food Name</th>
            <th className="py-2 px-4 text-left">Food Quantity</th>
            <th className="py-2 px-4 text-left">Pickup Location</th>
            <th className="py-2 px-4 text-left">Expired DateTime</th>
            <th className="py-2 px-4 text-left">Donator Image</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-blue-500">
            <td className="py-2 px-4" data-label="Name">{donatorName}</td>
            <td className="py-2 px-4" data-label="Food Name">{foodName}</td>
            <td className="py-2 px-4" data-label="Food Quantity">{foodQuantity}</td>
            <td className="py-2 px-4" data-label="Pickup Location">{pickupLocation}</td>
            <td className="py-2 px-4" data-label="Expired DateTime">{expiredDateTime}</td>
            <td className="py-2 px-4" data-label="Donator Image">
              <img src={donatorImage} alt="Donator" />
            </td>
            <td className="py-2 px-4" data-label="Action">
              <div className="space-x-2">
              <Link to={'/addfood'}>
              <button 
                
                className="bg-black text-white px-2 py-1 mb-3 rounded"
              >
               Edit
              </button>
              </Link>
                <button onClick={()=>handleDelete(_id)}
                 
                  className="bg-red-500 text-white px-2 py-1 mb-3 rounded"
                >
                  Delete
                </button>
               
                <Link to={`/manage/${_id}`}> <button
                  
                  className="bg-black btn-sm text-white px-2 py-1 mb-3 rounded"
                >
                  Manage 
                </button></Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Singlemanage;
