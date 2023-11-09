import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Flex, Spin } from 'antd';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Detailsfood = () => {
  const {user}=useContext(AuthContext)
    const handlerequest = e =>{
        e.preventDefault()
        const form = e.target
        const foodName =form.foodName.value
        const foodImage = form.foodImage.value
        const email = form.email.value
        const id = form.id.value 
        const currenttime = form.currenttime.value 
        const expiredDateTime = form.expiredDateTime.value 
        const location=form.location.value 
        const donatorimage = form.donatorimage.value 
        const donatorname=form.donatorname.value
        const aditional =form.aditional.value 
        const donationmoney =form.donationmoney.value

        const request ={foodName,foodImage,email,id,currenttime,expiredDateTime,location,donatorimage,donatorname,aditional,donationmoney}
        console.log(request)
        fetch('https://the-food-share-server.vercel.app/request', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
       
  
          // Display a success toast message with SweetAlert2
          Swal.fire({
            title: "Your Request has been sent",
            showClass: {
              popup: `
                animate__animated
                animate__slideInDown
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__slideOutUp
                animate__faster
              `
            }
          });
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    } 
      
    const showdate = new Date()
    const displaytodaysdate = showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear()
    const [isLoading, setIsLoading] = useState(true);
    const detailfood = useLoaderData();

    useEffect(() => {
        // Simulate data loading with a delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay time as needed
    }, []);

    return (
        <div className="mb-6 min-w-screen min-h-screen bg-[#9dbd8a]  flex items-center p-5 lg:p-10 overflow-hidden relative">
            {isLoading ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Flex align="center" justify="center">
                        <Spin size="large" />
                    </Flex>
                </div>
            ) : (
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img
                                    src={detailfood.foodImage}
                                    className="w-full relative z-10"
                                    alt=""
                                />
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">
                                    {detailfood.foodName}
                                </h1>
                                <p className="text-xl">Location: {detailfood.pickupLocation}</p>
                                <p className="text-xl">Total: {detailfood.foodQuantity}</p>
                                <p className="text-xl">Expire on {detailfood.expiredDateTime}</p>
                                <p className="text-xl">{detailfood.additionalNotes}</p>
                                <p className="text-xl">From: {detailfood.donatorName}</p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom">
                                   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn w-52 bg-[#446c2c] text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Request</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Food Request Form</h3>
    <form onSubmit={handlerequest} className="card-body" >
          <h1 className="text-3xl font-bold mb-6">Add Food</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
          <div className='flex'>
          <div className="w-full px-3 mb-3">
              <label className="label">Food Name</label>
              <input
                type="text"
                name="foodName"
                placeholder="Food Name"
                className="input input-bordered w-full"
                required
                value={detailfood.foodName}
              readOnly
               
                
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
                value={detailfood.foodImage}
                readOnly
                
              
              />
            </div>
          </div>
           <div className='flex'>
           <div className="w-full px-3 mb-3">
              <label className="label"> Email</label>
              <input
                type="email"
                name="email"
                placeholder="Food Quantity"
                className="input input-bordered w-full"
                required
              
                value={user?.email}
                readOnly
               
              />
            </div>
            <div className="w-full px-3 mb-3">
              <label className="label">Name</label>
              <input
                type="text"
                name="id"
                placeholder="Food Id"
                className="input input-bordered w-full"
                required
                value={user?.displayName
                  }
                readOnly
                
               
              />
            </div>
           </div>
           <div className='flex'>
           <div className="w-full px-3 ">
              <label className="label">Request Time</label>
              <input
                type="text"
                name="currenttime"
                value={displaytodaysdate}
                className="input input-bordered w-full"
                readOnly
                required
              
              />
            </div> <div className="w-full px-3 ">
              <label className="label">Expire on</label>
              <input
                type="text"
                name="expiredDateTime"
                value={ detailfood.expiredDateTime}
                className="input input-bordered w-full"
                readOnly
                required
              
              />
            </div>
           </div>
            
          </div>
        <div className='flex'>
        <div className="w-full px-3 mb-3">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={detailfood. pickupLocation}
              className="input input-bordered w-full"
              required
            
              readOnly
            />
          </div>  <div className="w-full px-3 mb-3">
            <label className="label"> Image</label>
            <input
              type="text"
              name="donatorimage"
              placeholder="Donator Image"
              value={user?.photoURL}
              className="input input-bordered w-full"
              
              readOnly
            />
          </div>
        </div>
          <div className="w-full px-3 mb-3">
            <label className="label">Donator Name</label>
            <input
              type="text"
              name="donatorname"
              placeholder="Donator Name"
              className="input input-bordered w-full"
              required
            
              value={detailfood.donatorName}
              readOnly
            />
          </div>
          <div className='flex'>
        
          <div className="w-full px-3 mb-3">
            <label className="label">Aditional Note</label>
            <input
              type="text"
              name="aditional"
              placeholder="Aditional Note"
              className="input input-bordered w-full"
              required
            
              value={detailfood.additionalNotes}
             
            />
          </div>
          </div>
          <div className="w-full px-3 mb-3">
            <label className="label">Donator Money</label>
            <input
              type="text"
              name="donationmoney"
              placeholder="Donator Money"
              className="input input-bordered w-full"
             
            
             
             
            />
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-4">
              <button className="btn btn-primary text-white bg-[#446c2c] w-full" type="submit">
                Request Food
              </button>
            </div>
          </div>
        </form>
    <div className="modal-action">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn" onClick={()=>document.getElementById('my_modal_5').close()}>Close</button>
    </div>
  </div>
</dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detailsfood;
