import React from "react";

function Testcard({ test }) {
  return (
    <div className=" col-12 col-sm-6 col-md-6 col-lg-3 p-3 p-sm-3 p-md-4 p-lg-3 p-xl-3">
      <div className="test-card d-flex flex-column">
        <div className="test-cardheader d-flex  justify-content-center align-items-center ">
          <div className="collect d-flex  justify-content-center align-items-center">
            <img src={test.photo} className="test-pic" />
          </div>
        </div>
        <div className="test-cardbody d-flex flex-column justify-content-center ">
          <div className="txt-con px-4 ">
            <h5 style={{ fontSize: "19px", overflow: "hidden" }}>
              {test.fname}{" "}
            </h5>
            <p
              className="m-0"
              style={{
                fontSize: "17px",
                textAlign: "center",
                color: " #666666",
              }}
            >
              {test.txt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testcard;
