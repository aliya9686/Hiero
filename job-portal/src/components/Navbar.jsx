// import React from "react";
// import { assets } from "../assets/assets";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

// const Navbar = () => {
//   const { openSignIn } = useClerk();
//   const { user } = useUser();
//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         <img src={assets.logo} alt="" />
//         {user ?
//           <div>
//             <Link to={'/applications'}>Applied Jobs</Link>
//             <p></p>
//             <p>Hi, {user.firstName+" "+user.lastName}</p>
//             <UserButton/>
//           </div>
//          :
//           <div className="flex gap-4 max-sm:text-xs">
//             <button className="text-gray-600">Recruiter Login</button>
//             <button
//               onClick={(e) => openSignIn()}
//               className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full "
//             >
//               Login
//             </button>
//           </div>
//         }
//         <div className="flex gap-4 max-sm:text-xs">
//           <button className="text-gray-600">Recruiter Login</button>
//           <button
//             onClick={(e) => openSignIn()}
//             className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full "
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { assets } from "../assets/assets";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const { openSignIn } = useClerk();
//   const { user } = useUser();
//   const navigate = useNavigate();

//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <img
//           onClick={() => navigate("/")}
//           className="cursor-pointer"
//           src={assets.logo}
//           alt="logo"
//         />

//         {/* Right Side */}
//         {user ? (
//           <div className="flex items-center gap-6">
//             <Link to="/applications" className="text-gray-700">
//               Applied Jobs
//             </Link>
//             <p className="max-sm:hidden text-gray-600">
//               Hi, {user.firstName + " " + user.lastName}
//             </p>
//             <UserButton />
//           </div>
//         ) : (
//           <div className="flex gap-4 max-sm:text-xs">
//             <button className="text-gray-600">Recruiter Login</button>
//             <button
//               onClick={() =>
//                 openSignIn({
//                   appearance: { layout: "modal" }, // opens modal instead of redirect
//                 })
//               }
//               className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Navbar = () => {
//   const { openSignIn } = useClerk();
//   const { user } = useUser();
//   const navigate = useNavigate();
//   const { setShowRecruiterLogin } = useContext(AppContext);

//   return (
//     <div className="shadow py-4">
//       <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <img
//           onClick={() => navigate("/")}
//           className="cursor-pointer"
//           src={assets.logo}
//           alt="logo"
//         />

//         {/* Right Side */}
//         {user ? (
//           <div className="flex items-center gap-6">
//             <Link to="/applications" className="text-gray-700">
//               Applied Jobs
//             </Link>
//             <p className="max-sm:hidden text-gray-600">
//               Hi, {user?.firstName || ""} {user?.lastName || ""}
//             </p>
//             <UserButton />
//           </div>
//         ) : (
//           <div className="flex gap-4 max-sm:text-xs">
//             <button
//               onClick={(e) => setShowRecruiterLogin(true)}
//               className="text-gray-600"
//             >
//               Recruiter Login
//             </button>
//             <button
//               onClick={() =>
//                 openSignIn({
//                   appearance: { layout: "modal" },
//                 })
//               }
//               className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext) || {};

  return (
    <div className="shadow py-4 bg-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-32 sm:w-40"
          src={assets.logo}
          alt="Company logo"
        />

        {/* Right Side */}
        {user ? (
          <div className="flex items-center gap-6">
            {/* Applied Jobs Link */}
            <Link
              to="/applications"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Applied Jobs
            </Link>

            {/* User Name */}
            <p className="max-sm:hidden text-gray-600">
              Hi, {user.firstName || ""} {user.lastName || ""}
            </p>

            {/* Clerk User Button */}
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex items-center gap-4 max-sm:text-xs">
            {/* Recruiter Login */}
            <button
              type="button"
              onClick={() => setShowRecruiterLogin?.(true)}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Recruiter Login
            </button>

            {/* Candidate Login */}
            <button
              type="button"
              onClick={() =>
                openSignIn({
                  appearance: { layout: "modal" },
                })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-9 py-2 rounded-full transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
