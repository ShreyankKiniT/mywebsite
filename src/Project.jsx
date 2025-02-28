import React from 'react';
import Card from "./Card";
import Sdata from "./Sdata";




const Project = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> My Projects</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} content={val.content} link={val.link}/>;
              })}    
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;