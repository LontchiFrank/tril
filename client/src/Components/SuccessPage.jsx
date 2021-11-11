import React from "react";
import coche from "../img/tick.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function SuccessPage() {
  return (
    <div className="success-page d-flex justify-content-center align-items-center">
      <style type="text/css">
        {`
        
         .btn-flat6 {
            background-color:#FFB800;
            box-shadow: 10px 10px 20px rgba(147, 147, 147, 0.25);
            border-radius:5px;
            font-size:12px;
            color: white;
          }
     
          .btn-xlarge {
            width:200px;
            height:45px;
            margin:1em;

           }
        
         `}
      </style>
      <div className="success-main">
        <div className="success-head  d-flex justify-content-center align-items-center pt-3">
          <div className="img-tick">
            <img src={coche} alt="" className="h-100 w-100" />
          </div>
        </div>
        <div className="success-body ">
          <h2 className="success-title pb-2 px-2 m-0">
            Congratulations you are now an Advertiser!
          </h2>
          <div className="success-body-txt d-flex justify-content-center align-items-center ">
            <div className="success-txt pb-2">
              Profile Image file has been uploaded and your information
              currently saved Successfully.Now, view your profile to verify if
              all suite your taste as an advertiser and gain interest from your
              Client.
            </div>
          </div>
          <div className="success-footer d-flex justify-content-center align-items-centers">
            <Link to="/advert-prof">
              <Button variant="outline-warning" size="xlarge" type="submit">
                View Your Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
