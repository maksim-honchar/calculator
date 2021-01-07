import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Display } from "./features/Display";
import { Pad } from "./features/Pad";

export default function App() {
  const [numA, setNumA] = useState<Array<number | string>>([]);
  const [numB, setNumB] = useState<Array<number | string>>([]);
  const [mathOp, setMathOp] = useState<null | string>(null);
  const [equals, setEquals] = useState(false);
  const [percent, setPercent] = useState(false);
  const [total, setTotal] = useState(0);

  const calc = (num: number | string) => {
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
    } else if (mathOp === "plus" && numB.length > 0 && percent) {
      setTotal(
        (Number(numA.join("")) / 100) * Number(numB.join("")) +
          Number(numA.join(""))
      );
      setPercent(false);
      setNumA([
        (Number(numA.join("")) / 100) * Number(numB.join("")) +
          Number(numA.join("")),
      ]);
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
    } else if (mathOp === "minus" && numB.length > 0 && percent) {
      setTotal(
        Number(numA.join("")) -
          (Number(numA.join("")) / 100) * Number(numB.join(""))
      );
      setPercent(false);
      setNumA([
        Number(numA.join("")) -
          (Number(numA.join("")) / 100) * Number(numB.join("")),
      ]);
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
    } else if (mathOp === "multiply" && numB.length > 0 && percent) {
      setTotal((Number(numA.join("")) / 100) * Number(numB.join("")));
      setPercent(false);
      setNumA([(Number(numA.join("")) / 100) * Number(numB.join(""))]);
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
    } else if (mathOp === "divided" && numB.length > 0 && percent) {
      setTotal((Number(numA.join("")) / 100 / Number(numB.join(""))) * 10000);
      setPercent(false);
      setNumA([(Number(numA.join("")) / 100 / Number(numB.join(""))) * 10000]);
      setMathOp(null);
      setNumB([]);
      setTotal(0);
    }
  }, [numA, numB, mathOp, equals, percent]);

  const allClear = () => {
    setNumA([]);
    setNumB([]);
    setMathOp(null);
    setEquals(false);
    setPercent(false);
    setTotal(0);
  };

  // console.log(` numA - ${numA}`);
  // console.log(` numB - ${numB}`);
  // console.log(percent);

  const keyPad = (event: KeyboardEvent) => {
    switch (event.key) {
      case "0":
        calc(0);
        break;
      case "1":
        calc(1);
        break;
      case "2":
        calc(2);
        break;
      case "3":
        calc(3);
        break;
      case "4":
        calc(4);
        break;
      case "5":
        calc(5);
        break;
      case "6":
        calc(6);
        break;
      case "7":
        calc(7);
        break;
      case "8":
        calc(8);
        break;
      case "9":
        calc(9);
        break;
      case "Escape":
        allClear();
        break;
      case "/":
        setMathOp("divided");
        break;
      case "*":
        setMathOp("multiply");
        break;
      case "-":
        numA.length === 0 || (numA.length > 0 && numB.length === 0)
          ? calc("-")
          : setMathOp("minus");
        break;
      case "+":
        setMathOp("plus");
        break;
      case "Enter":
        setEquals(true);
        break;
      case "%":
        setPercent(true);
        break;
      case ".":
        calc(".");
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPad);
    return () => {
      window.removeEventListener("keydown", keyPad);
    };
  }, [keyPad]);

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
        setPercent={setPercent}
      />
    </Container>
  );
}
