import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import React, { useEffect, useState, useRef } from "react";
import Wrapper from "../Components/Mint/Mint.styled";
import MintLogo from "../images/mintlogo.png";
import Tree from "../images/tree.png";
import Fox from "../images/fox2.png";
import MintGif from "../images/mint.gif";
import { Icon } from "@iconify/react";

function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint Now to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0xfc295718b2e1D5a2D24968463918b487B371fF9e",
    SCAN_LINK: "https://etherscan.io/address/0xfc295718b2e1D5a2D24968463918b487B371fF9e",
    NETWORK: {
      NAME: "Ethereum",
      SYMBOL: "Eth",
      ID: 1,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 10000,
    WEI_COST: 20000000000000000,
    DISPLAY_COST: 0.02,
    GAS_LIMIT: 205000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
    setCounter(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
    setCounter(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  // counter function
  const [ counter, setCounter ] = useState(1)
  function decrementCounter () {
      if(counter <= 1) {
          setCounter(1);
      }else {
          setCounter(counter - 1);
      }
  }

  return (
    <Wrapper>
      <div className="mint">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="mintLogo">
                <img src={MintLogo} className="img-fluid" alt="" />
              </div>
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <div className="sale_ended">
                  <p className="info_text">Sale has ended but you can still get NFTS by clicking the button below</p>
                  <a href="https://woof.ws/mint" target="blank" className="opensea">Opensea</a>
                </div>
              ) : (
                <>
                  {blockchain.account === "" || blockchain.smartContract === null ? (
                    <div className="sale_ended">
                      {(window.matchMedia("only screen and (max-width: 760px)").matches)?
                        <div className="counter">
                          <div className="mintButton">
                            <button onClick={(e) => {
                              e.preventDefault();
                              dispatch(connect());
                              getData();
                            }}>
                              Connect
                            </button>
                          </div>
                        </div>
                        :
                        <a href={CONFIG.DEEP_LINK} className="opensea">
                          CONNECT
                        </a>
                      }
                      <p className="connection_text">
                        Connect to the {CONFIG.NETWORK.NAME} network
                      </p>
                      {blockchain.errorMsg !== "" ? (
                        <p className="connection_text">
                          {blockchain.errorMsg}
                        </p>
                        ) : null}
                    </div>
                  ) : (
                    <div className="sale_ended">
                      <p className="connection_text">
                        1  {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                        {CONFIG.NETWORK.SYMBOL}. Excluding gas fees.
                      </p>
                      <p className="connection_text">
                        NFTs Minted :  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                      </p>
                      <div className="counter">
                        <div className="buttonGroup">
                          <button
                            onClick={decrementMintAmount}
                            className="fButton minusBUtton"
                          >
                            <Icon icon="eva:arrow-down-fill" />
                          </button>
                          <div className="inputField">
                            {mintAmount}
                          </div>
                          <button
                            className="plusButon"
                            onClick={incrementMintAmount}
                          >
                            <Icon icon="eva:arrow-up-fill" />
                          </button>
                        </div>
                        <div className="mintButton">
                          <button onClick={(e) => {
                                e.preventDefault();
                                claimNFTs();
                                getData();
                              }}>{claimingNft ? "Minting In Process" : "Mint Now"}
                            </button>
                        </div>
                      </div>
                      <p className="connection_text">
                        {feedback}
                      </p>
                    </div>
                  )}
                </>
              )}
              <div className="mintGif">
                <img src={MintGif} className="img-fluid" alt="mint" />
              </div>
            </div>
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

export default Mint;
