import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Display } from "./features/Display";
import { Pad } from "./features/Pad";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "400px",
      marginTop: "20vh",
    },
  })
);

export default function App() {
  const classes = useStyles();

  const [numA, setNumA] = useState<Array<number | string>>([]);
  const [numB, setNumB] = useState<Array<number | string>>([]);
  const [mathOp, setMathOp] = useState<null | string>(null);
  const [equals, setEquals] = useState(false);
  const [percent, setPercent] = useState(false);
  const [fillCell, setFillCell] = useState<null | string>(null);
  const [memCell, setMemCell] = useState<Array<number | string>>([]);

  let toNumber;
  useEffect(() => {
    if (fillCell === "m+" && memCell.length === 0) {
      toNumber = Number(numA.join(""));
      setMemCell([toNumber]);
      setFillCell(null);
    } else if (fillCell === "m+" && memCell.length > 0) {
      setMemCell([Number(memCell.join("")) + Number(numA.join(""))]);
      setFillCell(null);
    } else if (fillCell === "m-" && memCell.length === 0) {
      numA[0] !== "-" ? numA.unshift("-") : null;
      toNumber = Number(numA.join(""));
      setMemCell([toNumber]);
    } else if (fillCell === "m-" && memCell.length > 0) {
      setMemCell([Number(memCell.join("")) - Number(numA.join(""))]);
      setFillCell(null);
    } else if (fillCell === "mr") {
      setNumA(memCell);
    } else if (fillCell === "mc") {
      setMemCell([]);
    }
  }, [fillCell]);

  const calc = (num: number | string) => {
    if (mathOp === null && numA.length < 12) {
      setNumA([...numA, num]);
    } else if (mathOp !== null && numB.length < 12) {
      setNumB([...numB, num]);
    }
  };

  useEffect(() => {
    if (mathOp === "plus" && numB.length > 0 && equals) {
      setNumA([Number(numA.join("")) + Number(numB.join(""))]);
      setEquals(false);
      setMathOp(null);
      setNumB([]);
    } else if (mathOp === "plus" && numB.length > 0 && percent) {
      setPercent(false);
      setNumA([
        (Number(numA.join("")) / 100) * Number(numB.join("")) +
          Number(numA.join("")),
      ]);
      setMathOp(null);
      setNumB([]);
    }

    if (mathOp === "minus" && numB.length > 0 && equals) {
      setNumA([Number(numA.join("")) - Number(numB.join(""))]);
      setMathOp(null);
      setEquals(false);
      setNumB([]);
    } else if (mathOp === "minus" && numB.length > 0 && percent) {
      setPercent(false);
      setNumA([
        Number(numA.join("")) -
          (Number(numA.join("")) / 100) * Number(numB.join("")),
      ]);
      setMathOp(null);
      setNumB([]);
    }

    if (mathOp === "multiply" && numB.length > 0 && equals) {
      setNumA([Number(numA.join("")) * Number(numB.join(""))]);
      setEquals(false);
      setMathOp(null);
      setNumB([]);
    } else if (mathOp === "multiply" && numB.length > 0 && percent) {
      setPercent(false);
      setNumA([(Number(numA.join("")) / 100) * Number(numB.join(""))]);
      setMathOp(null);
      setNumB([]);
    }

    if (mathOp === "divided" && numB.length > 0 && equals) {
      setNumA([Number(numA.join("")) / Number(numB.join(""))]);
      setEquals(false);
      setMathOp(null);
      setNumB([]);
    } else if (mathOp === "divided" && numB.length > 0 && percent) {
      setPercent(false);
      setNumA([(Number(numA.join("")) / 100 / Number(numB.join(""))) * 10000]);
      setMathOp(null);
      setNumB([]);
    }
  }, [numA, numB, mathOp, equals, percent]);

  const allClear = () => {
    setNumA([]);
    setNumB([]);
    setMathOp(null);
    setEquals(false);
    setPercent(false);
    setFillCell(null);
  };

  /* При управлении с клавиатуры появились странные баги, причину я найти к сожалению не смог.

  function keyPad(event: KeyboardEvent) {
    if (event.key === "Enter") {
      setEquals(true);
    } else if (event.key === "/") {
      setMathOp("divided");
    } else if (event.key === "*") {
      setMathOp("multiply");
    } else if (event.key === "-") {
      numA.length === 0 ||
      (mathOp === "multiply" && numB.length === 0) ||
      (mathOp === "divided" && numB.length === 0)
        ? calc("-")
        : setMathOp("minus");
    } else if (event.key === "+") {
      setMathOp("plus");
    } else if (event.key === "Escape") {
      allClear();
    } else if (event.key === "%") {
      setPercent(true);
    } else if (event.key === ".") {
      calc(".");
    }

    if (event.key === "0") {
      calc(0);
    } else if (event.key === "1") {
      calc(1);
    } else if (event.key === "2") {
      calc(2);
    } else if (event.key === "3") {
      calc(3);
    } else if (event.key === "4") {
      calc(4);
    } else if (event.key === "5") {
      calc(5);
    } else if (event.key === "6") {
      calc(6);
    } else if (event.key === "7") {
      calc(7);
    } else if (event.key === "8") {
      calc(8);
    } else if (event.key === "9") {
      calc(9);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyPad);
    return () => {
      window.removeEventListener("keydown", keyPad);
    };
  }, [keyPad]);
  */
  return (
    <Container maxWidth={false} className={classes.wrapper}>
      <Display numA={numA} numB={numB} mathOp={mathOp} memCell={memCell} />
      <Pad
        calc={calc}
        setMathOp={setMathOp}
        setEquals={setEquals}
        allClear={allClear}
        setPercent={setPercent}
        setFillCell={setFillCell}
        numA={numA}
      />
    </Container>
  );
}
