import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Flex, Spin, Button } from 'antd';
import SingleAvaiable from './SingleAvaiable';

const AvailableFood = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAvailableFoods, setFilteredAvailableFoods] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order
    const availablefoods = useLoaderData();

    useEffect(() => {
        // Simulate data loading with a delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay time as needed
    }, []);

    // Update the filtered list of available foods when the searchQuery or sort order changes
    useEffect(() => {
        const filteredFoods = availablefoods
            .filter((food) =>
                food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
            );

        let sortedFoods = [...filteredFoods];
        if (sortOrder === 'asc') {
            sortedFoods.sort((a, b) => new Date(a.expiredDateTime) - new Date(b.expiredDateTime));
        } else {
            sortedFoods.sort((a, b) => new Date(b.expiredDateTime) - new Date(a.expiredDateTime));
        }

        setFilteredAvailableFoods(sortedFoods);
    }, [availablefoods, searchQuery, sortOrder]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const toggleSortOrder = () => {
        // Toggle between 'asc' and 'desc' when the user clicks the sort button
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="relative">
            {isLoading ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Flex align="center" justify="center">
                        <Spin size="large" />
                    </Flex>
                </div>
            ) : (
                <div className=''>
                    <div className="">
                        <div className='flex justify-center  '>
                            <input 
                                type="text"
                                placeholder="Search Your Desired Food"
                                value={searchQuery}
                                onChange={handleSearch}
                                className="input input-bordered input-success w-[600px] "
                            />
                             </div>
                        </div>
                        <Button className='bg-black text-white' onClick={toggleSortOrder}>
                            Sort by Expire Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                        </Button>
                   

                    <div className="grid grid-cols-2 gap-5">
                        {filteredAvailableFoods.map((availabefood) => (
                            <SingleAvaiable
                                key={availabefood._id}
                                availabefood={availabefood}
                            ></SingleAvaiable>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AvailableFood;
