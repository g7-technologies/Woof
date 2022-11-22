import React from "react";
import Wrapper from "./Loader.styled";

// import images
import img from "../../images/loader.png";

function Loader() {

  return (
    <Wrapper>
      <div className="loading">
        <img src={img} alt="loader" className="img-fluid" />
      </div>
    </Wrapper>
  );
}

export default Loader;