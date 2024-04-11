import React from "react";
import image from "../../public/pic.jpg";
const Home = () => {
  return (
    <div className="flex my-32">
      <img
        src={image}
        className=" border border-black rounded-full h-96 m-4 "
      />
      <div className="border border-slate-600 rounded-lg m-4 p-4 text-lg flex flex-col shadow-2xl">
        <div className="font-bold text-3xl m-auto">Tanish Mahajan</div>
        <div className="text-xl">
          I am an engineering graduate from UIET Panjab University, Chandigarh,
          specializing in Electrical and Electronics. I completed my B.Tech in
          2023. With six months of valuable experience as an analyst (intern) at
          KPMG India, I gained insight into the corporate world. However, my
          true passion lies in web development and coding. I am deeply
          enthusiastic about exploring and mastering various programming
          languages and frameworks to create innovative and impactful solutions.
          With a strong foundation in engineering and a keen interest in
          technology, I am driven to continuously learn and grow in the field of
          web development, aiming to contribute positively to the ever-evolving
          digital landscape.
        </div>
        <button className="p-4 bg-slate-400 hover:bg-slate-200 w-96 rounded-lg m-auto">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1usbwfjF8tDlrEEAB_CXw_HsKkkOg2dnX/view?usp=drive_link"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
