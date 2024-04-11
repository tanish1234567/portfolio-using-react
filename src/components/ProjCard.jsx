import React from "react";

const ProjCard = (props) => {
  return (
    <div className="border border-black bg-slate-300 rounded-md w-2/6 m-2 flex flex-col items-center">
      <h2 className="text-lg font-bold m-2">{props.name}</h2>
      <img src={props.img} alt="" className="h-96 w-full p-2" />
      <ul className="flex">
        {props.techstack.map((ele) => (
          <li className="m-2"> {ele} </li>
        ))}
      </ul>
      <button className="border border-black p-2 w-64 m-2 rounded-lg bg-slate-400 hover:bg-slate-200">
        <a href={props.linktogitrepo}>View Git Repository</a>
      </button>
    </div>
  );
};

export default ProjCard;
