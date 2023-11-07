import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import SingleRequest from "./SingleRequest";
import { Flex, Spin } from "antd";

const Foodrequest = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = `http://localhost:5000/request?email=${user?.email}`;

    useEffect(() => {
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
    }, []);

    return (
        <div className="lg:grid grid-cols-2 gap-4">
            {loading ? (
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <Flex align="center" justify="center">
                   <Spin size="large" />
               </Flex>
           </div>
            ) : requests.map((request) => (
                <SingleRequest key={request._id} request={request} />
            ))}
        </div>
    );
};

export default Foodrequest;
