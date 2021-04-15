import React from "react";

const QueenSqaure = ({ black, queenId }) => {
  let fill = black ? "black" : "white";
  return (
    <div className={"square " + fill}>
      <div className="queen">
        ♕<small>{queenId + 1}</small>
      </div>
    </div>
  );
};

export default QueenSqaure;
