import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Flex, Spin, Button } from 'antd';
import SingleAvaiable from './SingleAvaiable';

const AvailableFood = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAvailableFoods, setFilteredAvailableFoods] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order
    const [searchClicked, setSearchClicked] = useState(false); // Track if the search button is clicked
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
    }, [availablefoods, searchQuery, sortOrder, searchClicked]);

    const handleSearch = () => {
        setSearchClicked(true); // Set the search button clicked
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
                <div>
                    <div className="flex justify-center">
                        <div>
                            <input
                                type="text"
                                placeholder="Search Your Desired Food"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input input-bordered input-success w-96 max-w-xs"
                            />
                        </div>
                       
                        <Button className='btn  w-40  bg-[#446c2c] text-white ' onClick={handleSearch}>Search</Button>
                    </div>
                   <div> <Button className='bg-black text-white' onClick={toggleSortOrder}>
                            Sort by Expire Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                        </Button></div>

                    <div className="grid grid-cols-2 gap-5">
                        {searchClicked
                            ? filteredAvailableFoods.map((availabefood) => (
                                <SingleAvaiable
                                    key={availabefood._id}
                                    availabefood={availabefood}
                                ></SingleAvaiable>
                            ))
                            : availablefoods.map((availabefood) => (
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
