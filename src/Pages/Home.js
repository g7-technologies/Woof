/** @format */
import React, { useEffect, useState, useRef } from "react";
import Layout from "../Components/Layout/Layout";
import Wrapper from "../Components/Banner/Banner.styled";
import Banner from "../Components/Banner/Banner";

function Home() {
  return (
    <Layout>
      <Wrapper> 
        <Banner />
      </Wrapper>
    </Layout>
  );
}

export default Home;