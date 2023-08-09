// import swiggyImg from '../png-transparent-swiggy-hd-logo.png';

import { Link } from "react-router-dom";

const Navbar = () => {
    /* Chat GPT created Navbar - Using it for reference */

    /*
    return (
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="text-white text-xl font-bold">My Navbar</div>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );

    */

    /* Not Responsive 

    return (
        <div className="w-full h-20 bg-white drop-shadow p-6">
            <div className = "container mx-auto">
                <div className="flex justify-between items-center"> 
                    <div className="text-xl font-bold ml-40 flex"> <h1 className = "text-orange-500 text-2xl"> Swiggy </h1> </div>
                    <ul className="flex space-x-16 mr-40">
                        <li className = "font-semibold"> Offers </li>
                        <li className = "font-semibold"> Help </li>
                        <li className = "font-semibold"> User </li>
                        <li className = "font-semibold"> Cart </li>
                    </ul>
                </div>
            </div>
        </div>
    );

    */

    /* Responsive Given By Chat GPT */

    return (
        <div className="w-full bg-white drop-shadow p-6">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold flex md:ml-40">
                <h1 className="text-orange-500 text-2xl">Swiggy</h1>
              </div>
              <ul className="hidden md:flex space-x-16 md:mr-40">
                <li className="font-semibold">Offers</li>
                <Link to = "/help"><li className="font-semibold">Help</li></Link>
                <li className="font-semibold">User</li>
                <li className="font-semibold">Cart</li>
              </ul>
              <button className="md:hidden font-semibold">Menu</button>
            </div>
          </div>
        </div>
      );

};

export default Navbar;