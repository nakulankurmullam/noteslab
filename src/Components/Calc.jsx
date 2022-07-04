import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CalcSGPA from "./SubComponents/CalcSGPA";
import CalcCGPA from "./SubComponents/CalcCGPA";

function Calc() {
  const [key, setKey] = useState("SGPA");

  return (
    <>
      <Tabs
        activeKey={key}
        onSelect={(k) => {
          setKey(k);
        }}
      >
        <Tab eventKey="SGPA" title="SGPA">
          <CalcSGPA />
        </Tab>
        <Tab eventKey="CGPA" title="CGPA">
          <CalcCGPA />
        </Tab>
      </Tabs>
    </>
  );
}

export default Calc;
