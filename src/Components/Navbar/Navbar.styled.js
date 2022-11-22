/** @format */

import styled from "styled-components";

const Wrapper = styled.nav`
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  @media (max-width: 992px) {
    position: relative;
    justify-content: space-between;
    padding: 0 50px;
    
  }
  @media (max-width: 600px) {
    padding: 0 10px;
  }
  .nav-logo {
    display: flex;
    justify-content: center;
    transition: 0.5s ease-in-out;
    position: absolute;
    left: 0px;
    top: 0;
    img{
      @media (max-width:992px) {
     
        
      }
      @media (max-width:575.99px) {
        width: 50%;
        
      }
    }
    @media (max-width:992px) {
      position: absolute;
    left: 0;
    top: 0;
    display: block;
      
    }

 
    p {
      font-size: 32px;
      font-weight: 300;
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      
      @media (max-width: 1199.98px) { 
        font-size: 24px;
      
       }
    }
  }
  .nav-link-container {
    display: flex;
    @media (max-width: 992px) {
      position: absolute;
      left: 0%;
      top: 0;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #a2a2a2;
      transition: 0.5s ease-out;
      z-index: 55;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 992px) {
        flex-direction: column;
        margin-left: 50px;
        margin-right: 50px;
        width: 100%;
        padding-bottom: 20px;
      }
      li {
        margin: 0 15px;
        @media (max-width: 1199.98px) { 
          margin: 0 8px;
       }
    }
        @media (max-width: 992px) {
          width: 100%;
        }
        a {
          text-decoration: none;
          color: black;
          display: block;
          font-family: Akira;
          letter-spacing: 2px;
          font-weight: 300;
          transition: 0.5s ease-in-out;
          :hover{
            transform: translateY(-5px);
            color: #F4F0AB;
          }
          @media (max-width: 992px) {
            text-align: center;
          }
          img{
            width: 40px;
          }
        }
      }
      .nav-link-last-item {
        margin-right: 80px;
        @media (max-width: 992px) {
          margin: 0;
        }
      }
      .social-media-icon {
        display: flex;
        margin-top: 12px;
        position: absolute;
        right: 20px;
        @media (max-width: 992px) {
          justify-content: center;
          position: relative;
          padding-left:40px;
        }
        a {
          margin: 0 10px;
          font-size: 30px;
        
        }
      }
      .nav-button {
        @media (max-width: 992px) {
          text-align: center;
        }
        a {
          background: #d8f802;
          color: black;
          padding: 9px 25px;
          border-radius: 8px;
          border: 1px solid #d8f802 ;
          box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.25);
          transition: 0.5s ease-in-out;
          :hover{
            background-color: transparent;
            border: 1px solid #d8f802 ;
            
          
            
          }

        }
      }
    }
  }
  .mobile-menu {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      button {
        border: none;
        color: #ffffff;
        font-size: 30px;
        background: transparent;
        z-index: 542;
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
  }
`;
export default Wrapper;
