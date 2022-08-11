import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function Header() {
  const [toggler, setoggler] = useState(false);

  function change() {
    setoggler((prevValue) => {
      return prevValue ? false : true;
    });
  }

  return (
    <Navigator>
      <Head>
        <img src="Images/logo.svg"></img>
      </Head>
      <Models>
        <a>Model 3</a>
        <a>Model X</a>
        <a>Model Y</a>
        <a>Solar Roof</a>
        <a>Solar Panels</a>
      </Models>
      <Guide>
        <a className="hide">Shop</a>
        <a className="hide">Account</a>
        <a onClick={change}>Menu</a>
      </Guide>
      <Sidebar toggle={toggler} opposite={change} />
    </Navigator>
  );
}

export default Header;

const Navigator = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 60px;
  justify-content: space-between;
  padding: 0px 20px;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
`;

const Head = styled.div``;

const Models = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 100px;

  a {
    margin: 0px 13px;
    font-weight: 600;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Guide = styled.div`
  margin-right: 2px;

  a {
    margin: 0px 13px;
    font-weight: 600;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    .hide {
      display: none;
    }
    a {
      background: #c2d7e7;
      padding: 3px 6px;
      border-radius: 10px;
      opacity: 0.8;
    }
  }
`;
