import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btntitle, pathLink }) => {
  return (
    <div className="d-flex justify-content-between  my-4">
      <h3 className="fw-bold fs-5">{title}</h3>
      {btntitle ? (
        <Link to={`${pathLink}`}>
          <button className="btntitle rounded p-2 fw-bold">{btntitle}</button>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
