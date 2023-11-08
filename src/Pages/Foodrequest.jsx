import React, { useContext, useEffect, useState } from "react";

import SingleRequest from "./SingleRequest";
import { Flex, Spin } from "antd";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Foodrequest = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
      if (!user) return;
  
      const url = `https://the-food-share-server.vercel.app/request?email=${user.email}`;
  
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setRequests(data);
          setLoading(false); // Data has loaded
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // An error occurred
        });
    }, [user]);
  
    const handleDelete = (id) => {
      const proceed =  Swal.fire("Item Deleted");
  
      if (proceed) {
      
        fetch(`https://the-food-share-server.vercel.app/request/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
  
            if (data.deletedCount > 0) {
             
              const remaining = requests.filter((request) => request._id !== id);
              setRequests(remaining);
            }
          })
          .catch((error) => {
            console.error('Error deleting item:', error);
          
          });
        }
      };
      

    return (
        <div className="lg:grid grid-cols-2 gap-4">
            {loading ? (
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <Flex align="center" justify="center">
                   <Spin size="large" />
               </Flex>
           </div>
            ) : requests.map((request) => (
                <SingleRequest key={request._id} request={request} handleDelete={handleDelete} />
            ))}
        </div>
    );
};

export default Foodrequest;
