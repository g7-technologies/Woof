import React from "react";
import Wrapper from "./Banner.styled";
import banner from "../../images/banner.gif";
import bannerLogo from "../../images/bannerlogo.png";
import Tree from "../../images/tree.png";
import Fox from "../../images/fox.png";

function Banner() {
  return (
    <Wrapper>
      <div className="banner">
        <div className="container">
          <div className="row">
            {/* single item start here */}
            <div className="col-md-6">
              <div className="bannerLeftItem">
                <div className="bannerImg ">
                  <img src={banner} className="img-fluid img2" alt="banner" />
                </div>
              </div>
            </div>
            {/* single item end here */}
            {/* single item start here */}
            <div className="col-md-6">
              <div className="bannerLeftItem">
                <div className="bannerImg">
                  <img
                    src={bannerLogo}
                    className="img-fluid bannerImg1"
                    alt="banner"
                  />
                </div>
                <div className="bannerContent">
                  <h3>
                    Digital gang with member-only benefits, we are here to
                    <br /> show how its done. <br /> we don't follow, we LEAD..
                    WOOF!
                  </h3>
                </div>
              </div>
            </div>
            {/* single item end here */}
          </div>
        </div>
      </div>
      <div className="tree">
        <img src={Tree} className="img-fluid" alt="" />
      </div>
      <div className="fox">
        <img src={Fox} className="img-fluid" alt="" />
      </div>
    </Wrapper>
  );
}

export default Banner;
