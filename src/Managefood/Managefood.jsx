import React, { useContext, useEffect, useState } from 'react';

import Singlemanage from './Singlemanage';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Managefood = () => {
  const { user } = useContext(AuthContext);
  const [manage, setManage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a list of food items based on the user's email
    fetch(`https://the-food-share-server.vercel.app/addfood?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setManage(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching food items: ', error);
        setLoading(false);
      });
  }, [user]);
  const handleDelete = (id) => {
    const proceed = Swal.fire("Item Deleted");
    if (proceed) {
      // Use the _id to construct the URL for the specific item to delete
      fetch(`https://the-food-share-server.vercel.app/addfood/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            
            const remaining = manage.filter((mange) => mange._id !== id); // Correct the variable name here
            setManage(remaining);
          }
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
          // Handle errors
        });
    }
  };
  
 

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    {
      manage.map(manage=><Singlemanage key={manage._id} manage={manage} handleDelete={handleDelete} ></Singlemanage>)
    }
    </div>
  );
};

export default Managefood;
