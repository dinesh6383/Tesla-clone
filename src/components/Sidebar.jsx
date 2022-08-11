import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { extraInfo } from "./Details";

function Sidebar(props) {
  function changeIt(e) {
    props.opposite();
    e.preventDefault();
  }
  return (
    <Extras
      style={{ transform: props.toggle ? "translateX(0)" : "translateX(100%)" }}
    >
      <Close onClick={changeIt}>
        <CloseIcon />
      </Close>
      {extraInfo.map((info) => {
        return (
          <li>
            <a href="/">{info}</a>
          </li>
        );
      })}
    </Extras>
  );
}

export default Sidebar;

const Extras = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: white;
  width: 300px;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  overflow-y: scroll;
  transition: 0.2s ease-in;

  ::-webkit-scrollbar {
    display: none;
  }

  li {
    padding: 15px 0;
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    a {
      font-weight: 600;
      color: black;
      text-decoration: none;
    }
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-left: 235px;
`;
