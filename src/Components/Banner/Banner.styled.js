/** @format */
import styled from "styled-components";

const Wrapper = styled.div`
  .banner {
    position: absolute;
    width: 100%;
    top: 45%;
    transform: translate(0%, -40%);
    z-index: 25;
  }
  .bannerLeftItem {
    z-index: 5475;
  }
  .bannerImg {
    text-align: center;
  }
  .bannerImg img {
    width: 50vh;
    z-index: 89;
  
  }
.img2{
  border: 5px solid black;
      border-radius: 10px;
    margin-right:20px;
}
  .bannerContent {
    text-align: center;
  }
  .bannerContent h3 {
    font-family: "Ubuntu", sans-serif;

    font-size: 18px;
    line-height: 28px;
    letter-spacing: 1px;
    color: white;
    font-weight: 400;
  }
  .tree {
    position: fixed;
    right: 0;
    bottom: -4px;
  }
  .tree img {
    width: 140px;
  }
  .fox {
    position: fixed;
    bottom: -4px;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .fox img {
  }
  @media (max-width: 767.99px) {
    .tree img {
      width: 100px;
    }
    .row {
      align-items: center;
    }
    .bannerContent h3 {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (max-width: 575.99px) {
    .banner {
      transform: translate(0%, -50%);
    }
    .row {
      justify-content: center;
      flex-direction: column-reverse;
    }
    .bannerContent h3 {
      font-size: 12px;
      line-height: 16px;
    }
    .bannerImg img {
      width: 30vh;
      z-index: 89;
      
    }
    .col-md-6 {
      flex: 0 0 68%;
      max-width: 100%;
    }
    .bannerContent {
      text-align: center;
      position: absolute;
      bottom: 0;
      -webkit-transform: translate(0px, 70px);
      -ms-transform: translate(0px, 70px);
      -webkit-transform: translate(0px, 70px);
      -ms-transform: translate(0px, 70px);
      transform: translate(8%, 70px);
      width: 80%;
      left: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .bannerImg img {
      width: 50vh;
    }
  }
`;

export default Wrapper;
