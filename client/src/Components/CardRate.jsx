import React from "react";
import bet from "../img/6.png";
import ReactWhatsapp from "react-whatsapp";

function CardRate({ item }) {
  return (
    <div className="position-relative  col-12 col-sm-6 col-md-6 col-lg-3 p-3 p-sm-3 p-md-4 p-lg-3 p-xl-3">
      <div className="card-rate m-0 shadow">
        <div className="cardrate-header d-flex justify-content-center align-items-center  py-3">
          <div
            className="rounded-rater d-flex justify-content-center align-items-center "
            style={{
              border: item.round,
              filter: "drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.15))",
            }}
          >
            <img src={item.pic} alt="" width="90%" height="90%" />
          </div>
          <div className="best">
            <img src={item.ima} className="best" />
          </div>
          {/* <i class="fas fa-bookmark" style={{ fontSize: "20px" }}></i> */}
        </div>

        <div className="cardrate-body d-flex flex-column text-secondary ">
          <div className="detail d-flex  flex-column justify-content-center align-items-center px-4 pt-4">
            <div className="user d-flex  w-100 h-100 pt-2">
              <i class={item.icon} style={{ fontSize: "20px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  overflow: "hidden",
                }}
              >
                {item.getName}.
              </h6>
            </div>
            <div className="locate  d-flex w-100 h-100 pt-2">
              <i class={item.iconlocate} style={{ fontSize: "20px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  overflow: "hidden",
                }}
              >
                {item.getLocate}.
              </h6>
            </div>
            <div className="contact d-flex w-100 h-100 pt-2">
              <i class={item.icontact} style={{ fontSize: "20px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  overflow: "hidden",
                }}
              >
                {item.getContact}.
              </h6>
            </div>
            <div className="views d-flex w-100 h-100 pt-2">
              <i class={item.iconeye} style={{ fontSize: "20px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  overflow: "hidden",
                }}
              >
                {item.getView}.
              </h6>
              <h6
                className=""
                style={{ fontWeight: "400", overflow: "hidden", margin: "0" }}
              >
                Whatsapp Status Views
              </h6>
            </div>
          </div>
          <div className="cardrate-footer  d-flex justify-content-center align-items-center">
            <div
              className="whatsapp-btn"
              style={{
                // marginRight: "2em",
                width: "40%",
                height: "45px",
                borderRadius: "5px",
                boxShadow: "10px 10px 20px rgba(147, 147, 147, 0.25)",
              }}
            >
              <ReactWhatsapp
                className="clickBtn"
                style={{
                  color: "white",
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                message="Hello, hope you are good? I'm a seller and wish to get your service as an advertiser for my product "
                number={`237 ${item.number}`}
              >
                Contact <i class="fab fa-whatsapp"></i>
              </ReactWhatsapp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRate;
