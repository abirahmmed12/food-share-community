import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import SingleRequest from "./SingleRequest";
import { Flex, Spin } from "antd";

const Foodrequest = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
        if(!user) return;
        const url = `http://localhost:5000/request?email=${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setRequests(data);
                setLoading(false); // Data has loaded
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // An error occurred
            });
    }, [user]);
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
          // Use the _id to construct the URL for the specific item to delete
          fetch(`http://localhost:5000/request/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                alert('Deleted');
                const remaining = requests.filter((request) => request._id !== id); // Correct the variable name here
               setRequests(remaining);
              }
            })
            .catch((error) => {
              console.error('Error deleting item:', error);
              // Handle errors
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
