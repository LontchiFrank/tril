import React from "react";

function Cardseller({ item }) {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 p-3 p-sm-3 p-md-3 p-lg-3 p-xl-4">
      <div className="card-seller" style={{ border: item.border }}>
        <div className="card-header d-flex justify-content-center align-items-center">
          <div
            className="rounded-user d-flex justify-content-center align-items-center "
            style={{ border: item.round }}
          >
            <i
              class={item.icon}
              style={{ color: item.color, fontSize: "20px" }}
            ></i>
          </div>
        </div>
        <div className="card-body d-flex justify-content-left">
          <h6>{item.msg}.</h6>
        </div>
      </div>
    </div>
  );
}

export default Cardseller;
