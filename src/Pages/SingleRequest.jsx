import React from 'react';

const SingleRequest = ({ request,handleDelete }) => {
    const {
        _id,
        foodName,

        donatorname,

        location,
        expiredDateTime,
        currenttime,
        donationmoney
    } = request;

    return (
        <div className="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-xl md:flex-row md:items-start md:text-left">

            <div className="">
                <p className="text-4xl font-medium text-center text-gray-700">{foodName}</p>
                <p className="mb-4 text-xl font-medium text-center text-gray-500">Location: {location}</p>
                <div className="flex space-x-2">
                    <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 lg:w-64 py-2">
                        <p className="text-sm font-medium text-gray-500">Expired Date</p>
                        <p className="text-xl font-medium text-gray-600">{expiredDateTime}</p>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                        <p className="text-sm font-medium text-gray-500">Request Date</p>
                        <p className="text-xl font-medium text-gray-600">{currenttime}</p>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                        <p className="text-sm font-medium text-gray-500">Donation Money</p>
                        <p className="text-xl font-medium text-gray-600">{donationmoney}</p>
                    </div>
                </div>
                <div className="flex mt-5 flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                        <p className="text-sm font-medium text-gray-500">Donated By:</p>
                        <p className="text-xl font-medium text-gray-600">{donatorname}</p>
                    </div>
                <div className="mb-3"></div>
                <div className="flex space-x-2">
                    <button className="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">Available</button>
                    <button onClick={()=>handleDelete(_id)} className="w-full rounded-lg border-2 border-transparent bg-red-600 px-4 py-2 font-medium text-white">Cencel Request</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRequest;
