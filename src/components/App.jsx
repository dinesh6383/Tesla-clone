import React from "react";
import Section from "./Section";
import { Details } from "./Details";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      {Details.map((info, index) => {
        return (
          <Section
            key={index}
            id={index}
            head={info.name}
            content={info.comment}
            link={info.link}
            leftButton={info.leftBtn}
            rightButton={info.rightBtn}
            Image={info.bgImage}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
