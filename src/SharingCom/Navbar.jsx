import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignout = () => {
    logOut()
      .then()
      .catch();
  };
  const Navlinks = (
    <>
       <li className="text-white font-bold"><NavLink to={'/'}>Home</NavLink></li>
       {user && (
      <li className="text-white font-bold" ><NavLink to={'/addfood'}>Add Food</NavLink></li>
       )}
       {user && (
      <li className="text-white font-bold"><NavLink to={'/availablefoods'}>Available Foods</NavLink></li>
       )}
       {user && (
      <li className="text-white font-bold"><NavLink to={'/request'}>My Food Request</NavLink></li>
       )}
      <li className="text-white font-bold"><NavLink to={'/login'}>Login</NavLink></li>
    

    </>
  );
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const openNav = () => {
    setSideNavOpen(true);
  };

  const closeNav = () => {
    setSideNavOpen(false);
  };

  return (
    <div className="relative">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div
            className={`sidenav fixed h-full z-10 top-0 left-0 bg-[#446c2c] transition-transform transform ${isSideNavOpen ? "translate-x-0" : "-translate-x-full"
              } w-60 p-16`}
          >
            <p
              href="javascript:void(0)"
              className="closebtn absolute top-0 right-4 text-white text-3xl cursor-pointer"
              onClick={closeNav}
            >
              &times;
            </p>
            <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
          </div>
          <span className="text-4xl cursor-pointer ml-8" onClick={openNav}>
            &#9776;
          </span>
        </div>
        <div className="navbar-center">
          <img
            className="w-40"
            src="https://i.ibb.co/KbPCmmP/CAFN-Full-PMS-transparent-web.png"
            alt=""
          />
        </div>
        <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center gap-2 mr-4">
              {user.photoURL
 ? (
                <img
                  src={user.photoURL
                  }
                  referrerPolicy="no-referrer"
                  alt="User Icon"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <img
                  src="https://i.ibb.co/QmgzZ1N/Sample-User-Icon.png"
                  alt="Default User Icon"
                  className="w-8 h-8 rounded-full"
                />
                
              )}
              <span className="text-sm mr-2 lg:text-lg text-gray-800">
                {user.displayName || user.email}
              </span>
            </div>
            <button
              onClick={handleSignout}
              className="btn bg-black  text-white hover:bg-blue-100"
            >
              Log out
            </button>
          </>
        ) : (
          <Link to={'/login'}>
            <button className="btn bg-black text-white hover:bg-blue-100">
              Login
            </button>
          </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
