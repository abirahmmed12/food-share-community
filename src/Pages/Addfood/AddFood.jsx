import  {  useContext, useState,  } from 'react';
 // Update with your actual AuthContext path

import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const [foodData, setFoodData] = useState({
    foodName: '',
    foodImage: '',
    foodQuantity: '',
    pickupLocation: '',
    expiredDateTime: '',
    additionalNotes: '',
    donatorImage: user?.photoURL, // Get user's photo from context
    donatorName: user?.displayName, // Get user's display name from context
    donatorEmail: user?.email, // Get user's email from context
    foodStatus: 'available',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to an API).
    console.log(foodData);
    fetch('https://the-food-share-server.vercel.app/addfood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Correct the typo here
        },
        body: JSON.stringify(foodData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-6">Add Food</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-3">
              <label className="label">Food Name</label>
              <input
                type="text"
                name="foodName"
                placeholder="Food Name"
                className="input input-bordered w-full"
                required
                value={foodData.foodName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-3 mb-3">
              <label className="label">Food Image</label>
              <input
                type="text"
                name="foodImage"
                placeholder="Food Image"
                className="input input-bordered w-full"
                required
                value={foodData.foodImage}
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-3 mb-3">
              <label className="label">Food Quantity</label>
              <input
                type="text"
                name="foodQuantity"
                placeholder="Food Quantity"
                className="input input-bordered w-full"
                required
                value={foodData.foodQuantity}
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-3 mb-3">
              <label className="label">Pickup Location</label>
              <input
                type="text"
                name="pickupLocation"
                placeholder="Pickup Location"
                className="input input-bordered w-full"
                required
                value={foodData.pickupLocation}
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-3 mb-3">
              <label className="label">Expired Date/Time</label>
              <input
                type="datetime-local"
                name="expiredDateTime"
                className="input input-bordered w-full"
                required
                value={foodData.expiredDateTime}
                onChange={handleChange}
              />
            </div>
            <div className="w-full px-3 mb-3">
              <label className="label">Additional Notes</label>
              <textarea
                name="additionalNotes"
                placeholder="Additional Notes"
                className="textarea textarea-bordered w-full"
                value={foodData.additionalNotes}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full px-3 mb-3">
            <label className="label">Donator Name</label>
            <input
              type="text"
              name="donatorName"
              placeholder="Donator Name"
              className="input input-bordered w-full"
              required
              value={foodData.donatorName}
              readOnly
            />
          </div>
          <div className="w-full px-3 mb-3">
            <label className="label">Donator Email</label>
            <input
              type="email"
              name="donatorEmail"
              placeholder="Donator Email"
              className="input input-bordered w-full"
              required
              value={foodData.donatorEmail}
              readOnly
            />
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-4">
              <button className="btn btn-primary w-full" type="submit">
                Add Food
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
