import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap backImg={props.Image}>
      <Fade bottom>
        <Heading>
          <h1>{props.head}</h1>
          <p>
            {props.content}{" "}
            {props.link && (
              <span
                style={{ borderBottom: "2px solid grey", cursor: "pointer" }}
              >
                {props.link}
              </span>
            )}
          </p>
        </Heading>
      </Fade>
      <Buttons>
        <Fade bottom>
          <Group>
            <LeftButton>
              <p>{props.leftButton}</p>
            </LeftButton>
            {props.rightButton && (
              <RightButton>
                <p>{props.rightButton}</p>
              </RightButton>
            )}
          </Group>
        </Fade>
        {props.id === 0 && (
          <DownArrow>
            <KeyboardArrowDownIcon />
          </DownArrow>
        )}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0px;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url("${props.backImg}")`};
  z-index: 1;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;

  h1 {
    margin: 10px;
    font-size: 40px;
    font-weight: 600;
  }

  a {
    color: black;
  }
`;

const Buttons = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 390px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: #3a3d41;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  margin: 8px;
  cursor: pointer;
`;

const RightButton = styled.div`
  background: #e5e5e3;
  height: 40px;
  width: 256px;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  margin: 8px;
  cursor: pointer;
`;

const DownArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 60px;
  color: #3a3d41;
  animation: animateDown infinite 1.5s;
`;
