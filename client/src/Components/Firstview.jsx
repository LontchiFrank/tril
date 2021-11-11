import React from "react";
import { Button } from "react-bootstrap";
import phone from "../img/2.png";
import Navvbar from "./Navvbar";
import { Link } from "react-router-dom";
const TEXTS = [
  " Do you have something to sell ?😄",
  "Whatsapp Status Seller is here For you🤪",
  "Everything is been taking care of 😎 ",
];
function Firstview() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div id="home" className="row main-row m-0">
      <style type="text/css">
        {`
         .btn-flat {
            background-color: transparent;
            border:2px solid #00FFE0;
            border-radius:5px;
           color: white;
           overflow:hidden;
         }
         .btn-flat1 {
            background-color: transparent;
            border:2px solid #FFB800;
            border-radius:5px;
            color: white;
            overflow:hidden;
          }
     
    
         .btn-xxl {
          width:180px;
          height:60px;
          padding-bottom:10px;
          margin:1em;
         }
         `}
      </style>
      <div className="col-sm-12 firstview">
        <div className="row r1 m-0">
          <Navvbar />
        </div>
        <div className="row r2 ">
          <div className="col-md-6">
            <div className="container w-100 h-100">
              <div className="row smr1 d-flex justify-content-center align-items-center m-0">
                <h1 className="hero d-flex justify-content-center align-items-center">
                  WhatsappStatus Seller😄
                </h1>
              </div>
              <div className="row smr2 d-flex align-items-center flex-column">
                <div className="row line1 d-flex align-items-center">
                  <h6>Get workers to advertise your product</h6>
                </div>
                <div className="row line2 d-flex  justify-conte-center">
                  <h6>Who are you ?</h6>
                </div>
                <div className="bton d-flex  align-items-center p-0">
                  <Link to="/advertisers">
                    <Button id="btn " variant="flat" size="xxl">
                      Find an advertiser
                    </Button>
                  </Link>
                  <Link to="/profile-form">
                    <Button id="btn " variant="flat1" size="xxl">
                      Be an advertiser
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 ">
            <div className="pic d-flex justify-content-center align-items-center">
              <div className="fit-to-box">
                <img src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstview;
