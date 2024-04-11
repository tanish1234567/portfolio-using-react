import React from "react";

const ProjCard = (props) => {
  return (
    <div className="border border-black bg-slate-300 rounded-md w-full m-2">
      <h2 className="text-lg font-bold m-2">{props.name}</h2>
      <ul className="flex">
        {props.techstack.map((ele,index) => (
          <li className="m-2" key={index}> {ele} </li>
        ))}
      </ul>
      <div>
        <h4 className="text-xl font-bold m-2 ">Description:</h4>
        {
          props.description.split(".").map((ele,index)=>{
            return (<div key={index} className="m-2" >{ele}</div>)
          })
        }
      </div>
      <button className="border border-black p-2 w-64 m-2 rounded-lg bg-slate-400 hover:bg-slate-200">
        <a href={props.linktogitrepo}>View Git Repository</a>
      </button>
    </div>
  );
};

export default ProjCard;
