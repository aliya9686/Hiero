// import React, { useState, createContext } from "react";

// export const AppContext = createContext();
// const [searchFilter, setSearchFilter] = useState({
//   title: "",
//   location: "",
// });

// const [isSearched, setIsSearched] = useState(false);

// export const AppContextProvider = (props) => {
//   const value = {
//     setSearchFilter,
//     searchFilter,
//     isSearched,
//     setIsSearched,
//   };
//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };

import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  //function to fetch job data
  const fetchJobs = async () => {
    setJobs(jobsData);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLogin,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
