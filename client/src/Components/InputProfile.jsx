import React, { useState, useEffect } from "react";
import Parse from "parse";
import Navi from "./Navi";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Form, Button, Row, Col } from "react-bootstrap";

function InputProfile(props) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    type: "",
    contact: "",
    bio: "",
    location: "",
    w_con: "",
    w_view: "",
  });
  const [redirectState, setredirectState] = useState(false);
  const [image, setImage] = useState({ file: null });
  const [language, setLanguage] = useState("english", "french");
  const [validated, setValidated] = useState(false);
  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }

  // useEffect(() => {
  //   if (redirectState) {
  //     console.log("red", redirectState);
  //     console.log(window);
  //     return <Redirect to="/success-form" />;
  //   } else {
  //     return;
  //   }
  // }, []);
  // useEffect(() => {
  //   if (redirectState) {
  //     console.log("red", redirectState);
  //     return props.history.push("/success-form");
  //   } else {
  //     console.log("fialed");
  //   }
  // }, [redirectState]);

  function handleImageChange(e) {
    setImage({ file: e.target.files[0] });
  }
  const { fname, lname, email, type, contact, bio, location, w_con, w_view } =
    formData;
  const { file } = image;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    const validationPromise = new Promise((resolve, reject) => {
      if ((fname, email, contact, w_con, w_view, location, type, bio, image)) {
        const nom = "photo1.jpg";
        const parseFile = new Parse.File(nom, file);
        const firstName = fname;
        const lastName = lname;
        const emailAddress = email;
        const category = type;
        const phone = contact;
        const about = bio;
        const locate = location;
        const max = w_con;
        const vue = w_view;
        const lang = language;

        // Creates a new Product parse object instance
        let Profile = new Parse.Object("User_Profile");

        Profile.set("first_name", firstName);
        Profile.set("last_name", lastName);
        Profile.set("email", emailAddress);
        Profile.set("type", category);
        Profile.set("phone_number", phone);
        Profile.set("bio", about);
        Profile.set("locality", locate);
        Profile.set("whatsapp_contact", max);
        Profile.set("whatsapp_view", vue);
        Profile.set("picture", parseFile);
        Profile.set("language", lang);

        resolve(Profile);
      }
    })
      .then((Profile) => {
        new Promise((resolve, reject) => {
          let savedProfile = Profile.save();
          resolve(savedProfile);
        }).then((userDataInfo) => {
          localStorage.setItem("USER", JSON.stringify(userDataInfo));
        });
        props.history.push("/success-form");
      })

      .catch((error) => {
        alert(`Error! ${error.message}`);
      });
  };

  return (
    <div className="inputprofile d-flex flex-column justify-content-center align-items-center">
      {/* <div className="row r1 m-0">
        <Navi />
      </div> */}
      <Helmet>
        <title>Be an Advertiser</title>
        <meta
          name="description"
          content="Input your Information to be an Advertiser"
        />
      </Helmet>
      <style type="text/css">
        {`
        
         .btn-flat3 {
            background-color:#FFB800;
            box-shadow: 10px 10px 20px rgba(147, 147, 147, 0.25);
            border-radius:5px;
            font-size:12px;
            color: white;
          }
     
          .btn-xl {
            width:100px;
            height:35px;
            margin:1em;

           }
        
         `}
      </style>
      <div className="info-page row">
        <Form
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="page-form d-flex ">
            <div className="part1 col-lg-4 col-md-4 col-sm-12 ">
              <div className="person row pt-4">
                <h3 className="person-txt1 mb-2"> Set Profile Account </h3>
              </div>
              <div className="round">
                <div className="profile-pic">
                  <label for="img" className="take-photo">
                    <img
                      for="img"
                      src={
                        image.file ? URL.createObjectURL(image.file) : "/1.png"
                      }
                      className="img-fluid rounded border card"
                    />
                    <input
                      type="file"
                      id="img"
                      name="image"
                      accept="image/*"
                      className="d-none"
                      required
                      onChange={(e) => handleImageChange(e)}
                    />
                  </label>
                </div>

                <p className="petit">Click the camera to upload image</p>
              </div>
              <div className="hold-whatsapp px-4">
                <Form.Group as={Col} className="mb-3" controlId="formGridState">
                  <Form.Label>Whatsapp Contacts </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g 345"
                    name="w_con"
                    value={w_con}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Number whatsapp Status View</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g 231"
                    name="w_view"
                    value={w_view}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
            <div className="part2 col-lg-8 col-md-8 col-sm-12">
              <div className="person row pt-4">
                <h3 className="person-txt mb-2">Personal Information </h3>
              </div>
              <div className="person2 row">
                <Row className="mb-3 ">
                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    className="col-sm-12 col-md-6"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="fname"
                      value={fname}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    // as={Col}
                    controlId="formBasicEmail"
                    className=" col-sm-12 col-md-6"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={email}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3 ">
                  <Form.Group
                    // as={Col}
                    controlId="formBasicEmail"
                    className=" col-sm-12 col-md-6"
                  >
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Item name you advertise"
                      name="type"
                      value={type}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formBasicPassword"
                    className=" col-sm-12 col-sm-12 col-md-6"
                  >
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Contact"
                      name="contact"
                      value={contact}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Label>Short Bio</Form.Label>
                  <Form.Control
                    as={Col}
                    className="mb-3"
                    as="textarea"
                    placeholder="Bio should be short"
                    style={{ height: "100px" }}
                    name="bio"
                    value={bio}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Row>

                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-3 mb-sm-0"
                    controlId="formGridState"
                  >
                    <Form.Label>Preffered Language</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => handleLanguageChange(e)}
                      required
                    >
                      <option value="english">English</option>
                      <option value="french">French</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      name="location"
                      value={location}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <div className="hold-btn">
                  {/* <Link
                    // to="/success-form"
                    to={{
                      pathname: "/success-form",
                      state: formData,
                    }}
                  > */}
                  <Button
                    variant="flat3"
                    size="xl"
                    type="submit"
                    // onClick={() => props.history.push("/success-form")}
                  >
                    Submit oh
                  </Button>
                  {/* <button onClick={() => props.history.push("/success-form")}>
                    here
                  </button> */}
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default InputProfile;
