import React from "react";
import Wrapper from "../Components/Roadmap/Roadmap.styled";
import RoadBanner from "../images/RoadmapBanner.png";
import RoadLogo from "../images/logoRoadmap.png";
function Roadmap() {
  return (
    <Wrapper>
      <div className="Roadmap">
        <div className="container-fluid">
          <div className="row">
            {/* single item start here */}
            <div className="col-md-6 custom_col2">
              <div className="RoadLogo">
                <img src={RoadLogo} className="img-fluid" alt="logo" />
              </div>
            </div>
            {/* single item end here */}
            {/* single item start here */}
            <div className="col-md-6 custom_col2">
              <div className="RoadBanner">
                <img src={RoadBanner} className="img-fluid" alt="logo" />
              </div>
            </div>
            {/* single item end here */}

            {/* common single item start here */}

            <div className="col-12">
              <div className="phaseTitle">
                <h4>
                  First stage of building purely relevant and extremely
                  connected community that would engage and <br /> collaborate
                  to make the platform full of passion would go down like this:
                </h4>
              </div>
              <div className="row">
                {/* single item start here */}
                <div className="col-md-6 customCol">
                  <div className="common_single_item">
                    <div className="phaseList">
                      <ul>
                        {/* single item */}
                        <li className="mainlist">
                          Twitter and Discord Propagation
                        </li>
                        <ul className="sublist">
                          <li>
                          Giveaways (Free NFTs/Whitelist Spots/Amazing Items).
                          </li>
                          <li>
                            Community building & whitelisting 1000 members for pre-launch minting.
                          </li>
                          <li>
                            Parties & games for the community (WL spots / Free NFTs).
                          </li>
                          
                        </ul>
                        <li className="mainlist" style={{marginBottom:"10px"}}>
                         
                         Shop is already up and running, the more you're active the more you gain points.
 points can be used to redeem amazing items on website shop!
                           </li>
                        {/* single item end */}
                        {/* single item */}
                
                        <li className="mainlist">Whitelist Minting</li>
                        <ul className="sublist">
                          <li>
                            The early whitelisted members will have a 7hrs window before the public mint, every participant will have a limit of 10 wolves to mint for a price of 0.01 ETH
                          </li>
                        </ul>
                        {/* single item end */}
                      </ul>
                    </div>
                  </div>
                  <div className="phaseTextPosition">
                    <h2>PHASE I</h2>
                  </div>
                </div>
                {/* single item end here */}
                {/* single item start here */}
                <div className="col-md-6 customCol">
                  <div className="common_single_item">
                    <div className="phaseList2">
                      <ul>
                        {/* single item */}
                        <li className="mainlist">Public Minting</li>
                        <ul className="sublist">
                          <li>
                          After successful minting of the wolves to whitelist members, the whole collection will be opened for the public with a limit of 7 wolves and at the same price of 0.01 ETH
                          </li>
                          <li>
                            Public mint will start based on first come first
                            serve basis until mint out.
                          </li>
                        </ul>

                        {/* single item end */}
                        {/* single item */}
                        <li className="mainlist">
                          Celebratory Meetup of the Holders (Virtual)
                        </li>
                        <ul className="sublist">
                          <li>
                            An online event will be conducted for all the wolves
                            across the world where we will celebrate minting
                            out, and the community would share their thoughts
                            and expectations from the project!
                          </li>
                        </ul>
                        {/* single item end */}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* single item end here */}
              </div>
            </div>

            {/* common single item end here */}
            {/* common single item start here */}

            <div className="col-12">
              <div className="phaseTitle">
                <h4>
                  After the gang is built, it would be time for them to rise and
                  shine, this is the period where wolves would be <br /> exposed
                  to amazing features of the project.
                </h4>
              </div>
              <div className="row">
                {/* single item start here */}
                <div className="col-md-6 customCol">
                  <div className="common_single_item">
                    <div className="phaseList">
                      <ul>
                        {/* single item */}
                        <li className="Item" style={{paddingRight:"20px"}}>
                          Revealing the Store and the points system, the more
                          active you are the more points you get. 
                          Points are
                          used to purchase items from the Wolves Store!
                        </li>
                        <li className="Item">
                          Virtual Experience based WolfGang™ environment would
                          be finally revealed to the holders
                        </li>
                        <li className="Item">
                          Wolves would be able to interact with other users and
                          start their virtual WolfGang experience.
                        </li>
                        {/* single item end */}
                        {/* single item */}
                        <li className="mainlist">
                          Wolfgang™ (CAVE™) will be integrated in the gang
                          website.
                        </li>
                        <ul className="sublist">
                          <li>
                            A Place where wolves meetup, chill and have a nice
                            time • 
                          </li>
                          <li>
                          Holders only meetings will be held in the
                            (CAVE™).
                          </li>
                        </ul>
                        {/* single item end */}
                      </ul>
                    </div>
                  </div>
                  <div className="phaseTextPosition phaseTextPosition2">
                    <h2>PHASE II</h2>
                  </div>
                </div>
                {/* single item end here */}
                {/* single item start here */}
                <div className="col-md-6 customCol">
                  <div className="common_single_item">
                    <div className="phaseList2">
                      <ul>
                        {/* single item */}
                        <li className="mainlist">Merch Store!</li>
                        <ul className="sublist">
                          <li>
                            Gang will vote for merch, what to add and what not
                            to! (Hoodies/Beanies/Shirts/Wolf Masks..etc)
                          </li>
                        </ul>

                        {/* single item end */}
                        {/* single item */}
                        <li className="mainlist">
                          Devs will begin developing game after minting out.
                        </li>
                        <ul className="sublist">
                          <li>Game based on wolves, caves & hunting!</li>
                          <li>
                            Web based/Mobile (IOS & Android) for holders
                            members.
                          </li>
                        </ul>
                        {/* single item end */}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* single item end here */}
              </div>
              {/* <div className="phaseText">
                <h2>PHASE II</h2>
              </div> */}
            </div>

            {/* common single item end here */}
            {/* common single item start here */}

            <div className="col-12">
              <div className="phaseTitle">
                <h4>
                  The WolfGang™ would have risen and made their mark in the
                  wild, this is where the new chapter begins.
                </h4>
              </div>
              <div className="row">
                {/* single item start here */}
                <div className="col-md-6 customCol">
                  <div className="common_single_item">
                    <div className="phaseList">
                      <ul>
                        {/* single item */}
                        <li className="mainlist">WOLFGANG™ ECOSYSTEM</li>
                        <ul className="sublist">
                          <li>
                            The ecosystem of the platform would consist of
                            conceptual places would be built for virtual
                            experience and interactions along with the objects
                            to make the environment engaging for the Wolfgang™.
                            Important components of this Ecosystem would be:
                          </li>
                        </ul>

                        {/* single item end */}
                        {/* single item */}
                        <li className="mainlist">(CAVE™)</li>
                        <ul className="sublist">
                          <li>
                            The e-hangout place for the gang members, by
                            entering the (CAVE™) you would enter the meetups,
                            parties, giveaways & more inside.
                          </li>
                        </ul>
                        {/* single item end */}
                        {/* single item */}
                        <li className="mainlist">ALPHAS</li>
                        <ul className="sublist">
                          <li>No really, ALPHAS.</li>
                        </ul>
                        {/* single item end */}
                         {/* single item */}
                         <li className="mainlist">STAKING?</li>
                        <ul className="sublist">
                          <li>😏</li>
                        </ul>
                        {/* single item end */}
                      </ul>
                    </div>
                  </div>
                  <div className="phaseTextPosition phaseTextPosition2">
                    <h2>PHASE III</h2>
                  </div>
                </div>
                {/* single item end here */}
                {/* single item start here */}
                <div className="col-md-6 customCol">
                  <div className="common_single_item">
                    <div className="phaseList2">
                      <ul>
                        {/* single item */}
                        <li className="mainlist">PHYSICAL REWARDS</li>
                        <ul className="sublist">
                          <li>
                            The holder and members will receive physical
                            accessories and merchandise sponsored by the
                            WolfGang™ with the help of treasury obtained through
                            NFT sales, don’t miss the chance to enjoy IRL gifts
                            through our unique activity based points system.
                          </li>
                        </ul>

                        {/* single item end */}
                        {/* single item */}
                        <li className="mainlist">WOLFGANG™ MERCH</li>
                        <ul className="sublist">
                          <li>
                            shine and be proud of your gang where ever you go,
                            hoodies/beanies/hats..etc all will be voted from our
                            gang
                          </li>
                        </ul>
                        {/* single item end */}
                        {/* single item */}
                        <li className="mainlist">$WOOF?</li>
                        <ul className="sublist">
                          <li>Hmm...</li>
                        </ul>
                        {/* single item end */}
                        {/* single item */}
                        <li className="mainlist">BREEDING/MUTATION/HUMANS?!</li>
                        <ul className="sublist">
                          <li>Good things comes to those who wait..</li>
                        </ul>
                        {/* single item end */}
                        
                      </ul>
                    </div>
                  </div>
                </div>
                {/* single item end here */}
              </div>
              {/* <div className="phaseText phaseText2">
                <h2>PHASE III</h2>
              </div> */}
            </div>

            {/* common single item end here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
