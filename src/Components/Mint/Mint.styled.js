/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .mint {
    z-index: 48;
    position: absolute;
    width: 100%;
    top: 45%;
    transform: translate(0%, -40%);
  }
  .mintLogo {
    text-align: center;
  }
  .mintLogo img {
    width: 80%;
  }
  .counter {
    left: -15px;
    display: flex;
    margin: 5px 0px 5px 0px;
    position: relative;
    left: -15px;
    justify-content: center;
  }
  .sale_ended {
    display: block;
    margin: 5px 0px 5px 0px;
    left: -15px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .info_text {
    font-family: "Poppins", sans-serif;
    padding: 10px 19px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .connection_text {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }
  .sale_ended a {
    font-family: Akira;
    padding: 10px 19px;
    font-size: 20px;
    color: white;
    background-color: black;
    border-radius: 0px;
    border: 1px solid black;
    border-radius: 5px;
    -webkit-transition: 0.5s ease-in-out;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    font-weight: 700;
    border-radius: 5px;
  }
  .opensea {
    width: 20%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .buttonGroup {
    display: flex;
  }
  .counter button {
    padding: 4px 15px;
    font-size: 19px;
    display: flex;
    align-items: center;
    background: transparent;
    color: black;
    border: 1px solid #000000;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    height: 45px;
    font-family: Akira;
  }

  .inputField {
    width: 80px;
    text-align: center;
    /* padding: 0px 20px; */
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    border: 1px solid #000000;
    color: black;
    font-size: 20px;
    font-weight: 700;
  }
  .mintButton button {
    margin-left: 30px;
    padding: 10px 19px;
    font-size: 20px;
    color: white;
    background-color: black;
    cursor: pointer;
    border-radius: 0px;
    border: 1px solid black;
    border-radius: 5px;
    -webkit-transition: 0.5s ease-in-out;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    font-weight: 700;
    border-radius: 5px;
  }
  .mintButton button:hover {
    background-color: transparent;
    border: 1px solid black;
    color: white;
  }
  .minusBUtton {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .plusButon {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
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
    left: 0%;
  }
  .fox img {
    width: 80%;
  }
  .mintGif {
    text-align: center;
  }
  .mintGif img {
    width: 80vh;
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
  @media (max-width: 575.98px) {
    .mint {
      top: 50%;
    }
    .counter {
      left: -15px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: block;
      margin: 30px 0px 20px 0px;
      position: relative;
      left: 0;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      /* margin: 0 auto; */
      display: grid;
      justify-content: center;
      align-items: center;
    }
    .mintButton button {
      margin-left: 0;
    }
    .mintButton {
      margin: 20px auto;
    }
    .fox img {
      width: 50%;
    }
    .mintGif {
      display: none;
    }
    .mintGif img {
      width: 70%;
    }
    .mintLogo img {
      width: 100%;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .mintGif img {
      width: 60%;
    }
    .fox img {
      width: 50%;
    }
    .mintGif img {
      width: 52vh;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .mint {
      top: 50%;
    }
    .mintLogo img {
      width: 70%;
    }
    .fox img {
      width: 50%;
    }
    .mintGif img {
      width: 70vh;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .mintGif img {
      width: 67vh;
    }
  }
`;

export default Wrapper;
