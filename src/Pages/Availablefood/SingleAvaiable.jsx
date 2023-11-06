import { Link } from "react-router-dom";


const SingleAvaiable = ({availabefood}) => {
    const {
        _id,
        donatorName,
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        expiredDateTime,
        donatorImage,
      } = availabefood;
    return (
        <div className="m-5 w-[600px]">
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        <a
          href="#"
          className="col-span-2 text-left text-gray-600 hover:text-gray-700 relative"
        >
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src={foodImage}
              className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-105"
              alt={foodName}
            />
            <span className="absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600">
              New
            </span>
            <img
              src="/images/AnbWyIjnwNbW9Wz6c_cja.svg"
              className="absolute inset-1/2 w-10 max-w-full -translate-x-1/2 -translate-y-1/2 transition group-hover:scale-125"
              alt=""
            />
          </div>
        </a>
        <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
          <p className="text-2xl font-bold">{foodName}</p>
          <p className="text-lg font-semibold">Quantity:{foodQuantity}</p>
          <p className="text-gray-500 font-semibold">Location: {pickupLocation}</p>
          <p className="text-gray-500 font-semibold">Expired On: { expiredDateTime}</p>
          <p className='pt-10-10'>Donatd By</p>
         <div className='flex items-center gap-2'>
         <div className="avatar">
         
  <div className="w-10 mask mask-squircle">
    <img src={donatorImage} />
  </div>
</div>
          <p>{donatorName}</p>
    
         </div>

          <div className="flex items-center justify-between text-gray-700 sm:flex-row ">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <div className="rounded-full bg-green-100 px-2 py-0.5 text-green-700">
                Available
              </div>
           
            </div>
           <Link to={`/fooddetails/${_id}`}> <button className="btn text-white bg-[#446c2c]">details</button></Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SingleAvaiable;