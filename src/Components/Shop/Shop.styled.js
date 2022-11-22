/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .row {
    column-gap: 20px;
    justify-content: center;
  }
  .shop {
    padding: 80px 0px;
  }
  .shopBanner {
    text-align: center;
  }
  .shopBanner img {
    width: 60%;
  }
  .common_singleItem {
    cursor: pointer;
    text-align: center;
    margin-bottom: 30px;
  }
  .shopImg {
    text-align: center;
    background: black;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 8px;
    padding: 15px;
  }
  .shopImg img {
    width: 100%;
    height: 270px;
    object-fit: contain;
  }
  .shopTitle {
    text-align: center;
    margin: 20px 0px;
  }
  .shopTitle h5 {
    color: black;
    font-size: 18px;
    font-family: Prepotra;
    line-height: 28px;
  }
  .shopButton {
  }
  .shopButton a {
    -webkit-text-decoration: none;
    text-decoration: none;
    color: white;
    font-size: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #282525;
    width: 60%;
    margin: 0 auto;
    padding: 8px;
    border-radius: 5px;
  }
  .shopButton a span img {
    margin-right: 10px;
    width: 30px;
  }
  @media (max-width: 575.98px) {
    .col-md-3 {
      flex: 0 0 48%;
      max-width: 100%;
    }
    .common_singleItem {
    }
    .shopImg {
      padding: 10px;
    }
    .shopImg img {
      width: 100%;
      height: 20vh;
    }
    .shop {
      padding: 30px 0px;
    }
    .row {
      column-gap: 10px;
    }
    .shopButton a {
      font-size: 14px;
      width: 100%;
    }
    .shopTitle h5 {
      font-size: 14px;

      line-height: 23px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .shop {
      padding: 30px 0px;
    }
    .col-md-3 {
      flex: 0 0 48%;
      max-width: 50%;
    }
    .shopImg img {
      height: 210px;
    }
    .shopButton a {
      width: 70%;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .shopButton a {
      width: 100%;
    }
    .shopImg img {
      height: 130px;
    }
    .col-md-3 {
      flex: 0 0 22.9%;
      max-width: 25%;
    }
    .shopTitle h5 {
      font-size: 15px;

      line-height: 24px;
    }
    .shopButton a span img {
      margin-right: 10px;
      width: 25px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .common_singleItem {
    }
    .shopButton a {
      width: 76%;
    }
    .shopImg img {
      height: 190px;
    }
  }

  .shopImg1 {
    background-color: #ce61d0;
  }
  .shopImg2 {
    background-color: #ed8d27;
  }
  .shopImg3 {
    background-color: #4a4a4a;
  }
  .shopImg4 {
    background-color: #3c3e47;
  }
  .shopImg5 {
    background-color: #3c3e47;
  }
  .shopImg6 {
    background-color: #353a45;
  }
  .shopImg7 {
    background-color: #2c2c2c;
  }
  .shopImg8 {
    background-color: #021468;
  }
  .shopImg9 {
    background-color: #3e4572;
  }
  .shopImg10 {
    background-color: #d9bfa9;
  }
  .shopImg11 {
    background-color: #b389ec;
  }
  .shopImg12 {
    background-color: #402c7a;
  }
  .shopImg13 {
    background-color: #566be8;
  }
  .shopImg14 {
    background-color: #1c5e82;
  }
`;
export default Wrapper;
