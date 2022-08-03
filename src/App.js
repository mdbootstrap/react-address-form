import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">
          Basic
        </MDBBtn>
      </Link>
      <Link to="/delivery">
        <MDBBtn className="m-3">
          Delivery address form card
        </MDBBtn>
      </Link>
      <Link to="/advanced">
        <MDBBtn className="m-3">
          Advanced address form
        </MDBBtn>
      </Link>
      <Link to="/image">
        <MDBBtn className="m-3">
          Address form with image
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}