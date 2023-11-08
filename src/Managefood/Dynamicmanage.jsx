import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Dynamicmanage = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [buttonTexts, setButtonTexts] = useState([]); // State to manage button texts

  const dynamic = useLoaderData();

  useEffect(() => {
    if (!user) return;
    const url = `https://the-food-share-server.vercel.app/requested?donatorname=${user?.displayName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        // Initialize button texts for each item as "Read more"
        setButtonTexts(new Array(data.length).fill("Pending"));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user]);

  const handleButtonClick = (index) => {
    
    const newButtonTexts = [...buttonTexts];
    
    newButtonTexts[index] = newButtonTexts[index] === "Delivered" ? "Delivered" : "Delivered";
    setButtonTexts(newButtonTexts);
  };

  return (
    <div>
      {requests.map((request, index) => (
        <div key={request.id}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={request.donatorimage} alt="" />
            </a>
            <div className="p-5">
              <p>Requested by</p>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{request.id}</h5>
              </a>
              <p className="mb-3  text-2xl font-bold text-gray-700 dark:text-gray-400">{request.email}</p>
              <p>Food Name: {request.foodName} </p>
              <p>Requested on: {request.currenttime}</p>
              <button
                onClick={() => handleButtonClick(index)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
              >
                {buttonTexts[index]}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dynamicmanage;
