import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import Singlemanage from './Singlemanage';
import { Link } from 'react-router-dom';

const Managefood = () => {
  const { user } = useContext(AuthContext);
  const [manage, setManage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a list of food items based on the user's email
    fetch(`http://localhost:5000/addfood?email=${user?.email}`)
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {
        manage?.map((mange, i) => (
          <Link to={`/fooddetails/${mange._id}`} key={i}>
            <Singlemanage mange={mange} />
          </Link>
        ))
      }
    </div>
  );
};

export default Managefood;
