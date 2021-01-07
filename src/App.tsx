import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Display } from "./features/Display";
import { Pad } from "./features/Pad";

export default function App() {
  const [numA, setNumA] = useState<Array<number>>([]);
  const [numB, setNumB] = useState<Array<number>>([]);
  const [mathOp, setMathOp] = useState<null | string>(null);
  const [equals, setEquals] = useState(false);
  const [total, setTotal] = useState(0);

  const calc = (num: number) => {
    if (mathOp === null) {
      setNumA([...numA, num]);
    } else {
      setNumB([...numB, num]);
    }
  };

  useEffect(() => {
    if (mathOp === "plus" && numB.length > 0 && equals) {
      setTotal(Number(numA.join("")) + Number(numB.join("")));
      setEquals(false);
      setNumA([Number(numA.join("")) + Number(numB.join(""))]);
      setMathOp(null);
      setNumB([]);
      setTotal(0);
    }
    if (mathOp === "minus" && numB.length > 0 && equals) {
      setTotal(Number(numA.join("")) - Number(numB.join("")));
      setEquals(false);
      setNumA([Number(numA.join("")) - Number(numB.join(""))]);
      setMathOp(null);
      setNumB([]);
      setTotal(0);
    }
    if (mathOp === "multiply" && numB.length > 0 && equals) {
      setTotal(Number(numA.join("")) * Number(numB.join("")));
      setEquals(false);
      setNumA([Number(numA.join("")) * Number(numB.join(""))]);
      setMathOp(null);
      setNumB([]);
      setTotal(0);
    }
    if (mathOp === "divided" && numB.length > 0 && equals) {
      setTotal(Number(numA.join("")) / Number(numB.join("")));
      setEquals(false);
      setNumA([Number(numA.join("")) / Number(numB.join(""))]);
      setMathOp(null);
      setNumB([]);
      setTotal(0);
    }
  }, [numA, numB, mathOp, equals]);

  const allClear = () => {
    setNumA([]);
    setNumB([]);
    setMathOp(null);
    setEquals(false);
    setTotal(0);
  };

  // console.log(` numA - ${numA}`);
  // console.log(` numB - ${numB}`);

  return (
    <Container
      maxWidth={false}
      style={{ border: "1px solid red", width: "400px" }}
    >
      <h2>Calculator</h2>
      <Display numA={numA} numB={numB} total={total} mathOp={mathOp} />
      <Pad
        calc={calc}
        setMathOp={setMathOp}
        setEquals={setEquals}
        allClear={allClear}
      />
    </Container>
  );
}
