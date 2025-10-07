// import React, { useEffect, useRef } from "react";
// import { useState } from "react";
// import Quill from "quill";
// import { JobCategories, JobLocations } from "../assets/assets";

// const AddJob = () => {
//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("Bangalore");
//   const [category, setCategory] = useState("Programming");
//   const [level, setLevel] = useState("Beginner level");
//   const [salary, setSalary] = useState(0);
//   const editorRef = useRef(null);
//   const quillRef = useRef(null);
//   useEffect(() => {
//     // Initiate Quill only once
//     if (!quillRef.current && editorRef.current) {
//       (quillRef.current = new Quill(editorRef.current)),
//         {
//           theme: "snow",
//         };
//     }
//   }, []);

//   return (
//     <div>
//       <form className="container p-4 flex flex-col w-full items-start gap-3 ">
//         <div className="w-full ">
//           <p className="mb-2 "> Job Title</p>
//           <input
//             type="text"
//             placeholder="Type here"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             required
//             className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
//           />
//         </div>
//         <div className="w-full max-w-lg">
//           <p className="my-2"> Job Description</p>

//           <div ref={editorRef}></div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
//           <div>
//             <p className="mb-2"> Job Category</p>
//             <select
//               className="w-full px-3 py-2 border-2 border-gray-300 rounded"
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               {JobCategories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <div>
//           <p className="mb-2 "> Job Location</p>
//           <select
//             className="w-full px-3 py-2 border-2 border-gray-300 rounded"
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             {JobLocations.map((location, index) => (
//               <option key={index} value={location}>
//                 {location}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <p className="mb-2">Job Level</p>
//           <select
//             className="w-full px-3 py-2 border-2 border-gray-300 rounded"
//             onChange={(e) => setLevel(e.target.value)}
//           >
//             <option value="Beginner Level">Beginner Level</option>
//             <option value="Intermediate  Level">Intermediate Level</option>
//             <option value="Senior Level">Senior Level</option>
//           </select>
//         </div>
//         <div>
//           <p className="mb-2">Job Salary</p>
//           <input
//             min={0}
//             className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
//             onChange={(e) => setSalary(e.target.value)}
//             type="Number"
//             placeholder="2500"
//           />
//         </div>
//         <button className="w-28 py-3 mt-4 bg-black text-white rounded">
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddJob;

import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // ✅ Important for styling
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobDescription = quillRef.current.root.innerHTML;
    const jobData = {
      title,
      description: jobDescription,
      category,
      location,
      level,
      salary,
    };

    console.log("Job Data:", jobData);
    // You can send jobData to your backend here using fetch/axios
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col w-full items-start gap-4"
      >
        {/* Job Title */}
        <div className="w-full">
          <p className="mb-2 font-medium">Job Title</p>
          <input
            type="text"
            placeholder="Type here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
          />
        </div>

        {/* Job Description */}
        <div className="w-full max-w-lg">
          <p className="my-2 font-medium">Job Description</p>
          <div
            ref={editorRef}
            className="border border-gray-300 rounded min-h-[150px] p-2"
          ></div>
        </div>

        {/* Category, Location, Level, Salary */}
        <div className="flex flex-col sm:flex-row gap-4 w-full flex-wrap">
          {/* Job Category */}
          <div>
            <p className="mb-2 font-medium">Job Category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            >
              {JobCategories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div>
            <p className="mb-2 font-medium">Job Location</p>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            >
              {JobLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Job Level */}
          <div>
            <p className="mb-2 font-medium">Job Level</p>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded"
            >
              <option value="Beginner Level">Beginner Level</option>
              <option value="Intermediate Level">Intermediate Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
          </div>

          {/* Job Salary */}
          <div>
            <p className="mb-2 font-medium">Job Salary</p>
            <input
              type="number"
              min={0}
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="2500"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-28 py-3 mt-4 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddJob;
