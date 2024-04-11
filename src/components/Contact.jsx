import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-slate-700 h-32">
      <h3 className="font-bold text-2xl text-center text-white">
        Contact Details
      </h3>
      <ul className=" flex  my-2 justify-around">
        <li className="text-white">Mobile Number : +91 7087385941 </li>
        <li className="text-white">Email :tanishm458@gmail.com</li>
        <li>
          <a href="" className="text-white">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="" className="text-white">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
