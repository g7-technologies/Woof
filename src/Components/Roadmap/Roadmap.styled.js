/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .Roadmap {
    padding-top: 80px;
  }
  .RoadLogo {
    text-align: center;
  }
  .RoadLogo img {
    width: 80%;
  }
  .col-md-6 {
    position: relative;
  }
  .RoadBanner {
    text-align: center;
    position: absolute;
    bottom: -5px;
  }

  .RoadBanner img {
    width: 100%;
  }
  .row {
    column-gap: 20px;
  }
  .common_single_item {
  }
  .phaseTitle {
    text-align: center;
    padding: 30px 0px;
  }
  .phaseTitle h4 {
    font-size: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
  .phaseList {
    margin-left: 110px;
  }
  .phaseList ul {
  }
  .phaseList ul li {
    list-style-position: inside;
  }
  .sublist {
    margin-left: 50px;
    padding: 20px 10px;
  }
  .sublist li {
    font-size: 18px;
    line-height: 27px;
    font-family: "Ubuntu", sans-serif;
  }
  .mainlist {
    font-size: 16px;
    font-family: Akira;
    font-weight: 400;
    letter-spacing: 1px;
  }
  .col-12 {
    background-color: #4e4b4b;

    border-radius: 8px;
    margin-bottom: 50px;
  }
  .phaseTextPosition {
  }
  .phaseTextPosition h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    position: absolute;
    top: 50%;
    left: 0;

    transform: rotate(270deg) translate(50%, -20%);
    background: white;
    color: black;
    padding: 9px 30px;
    border-radius: 5px;
    color: #4e4b4b;
  }

  .Item {
    font-family: "Ubuntu", sans-serif;
    margin-bottom: 20px;
  }
  .customCol {
    position: relative;
  }
  @media (max-width: 575.98px) {
    .Roadmap {
      padding-top: 30px;
    }
    .customCol {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .phaseTitle h4 {
      font-size: 13px;
    }
    .mainlist {
      font-size: 12px;
    }
    .sublist li {
      font-size: 14px;
    }
    .phaseList {
      margin-left: 20px;
      margin-top: 80px;
    }
    .sublist {
      margin-left: 0;
    }
    .phaseList2 {
      margin-left: 45px;
    }
    .col-12 {
      padding: 0px 18px;
    }
    .custom_col2 {
      flex: 0 0 46%;
      max-width: 50%;
    }
    .phaseTextPosition h2 {
      top: 0;
      left: 0;

      transform: rotate(0) translate(10%, -10%);
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-12 {
      padding: 20px 10px;
    }
    .sublist {
      margin-left: 0px;
      padding: 20px 10px;
    }

    .phaseList2 {
      margin-left: 110px;
    }
    .customCol {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .phaseTitle h4 {
      font-size: 16px;
    }
    .mainlist {
      font-size: 13px;

      line-height: 21px;
    }
    .phaseTextPosition h2 {
      transform: rotate(270deg) translate(-50%, -50%);
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .phaseTitle h4 {
      font-size: 15px;
    }
    .mainlist {
      font-size: 13px;
    }
    .sublist li {
      font-size: 14px;
      line-height: 22px;
    }

    .sublist {
      margin-left: 0px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .phaseTitle h4 {
      font-size: 18px;
    }
    .mainlist {
      font-size: 11px;
    }
    .sublist {
      margin-left: 20px;
    }
  }
`;
export default Wrapper;
