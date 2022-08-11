import React from "react";
import styled from "styled-components";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Foot>
      <li>Tesla {year}</li>
      <li>Privacy & Legal</li>
      <li>Vechicle Recalls</li>
      <li>Contact</li>
      <li>Careers</li>
      <li>News</li>
      <li>Engage</li>
      <li>Locations</li>
    </Foot>
  );
}

export default Footer;

const Foot = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  margin-bottom: 100px;

  li {
    font-weight: 500;
    margin: 8px;
  }
`;
