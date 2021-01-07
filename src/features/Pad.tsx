import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

interface IPad {
  calc: (num: number | string) => void;
  setMathOp: (arg: string | null) => void;
  setEquals: (arg: boolean) => void;
  allClear: () => void;
  setPercent: (arg: boolean) => void;
}

export const Pad = (props: IPad) => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numOutput = nums.map((number, index) => (
    <Grid item key={index}>
      <Button onClick={() => props.calc(number)} variant="outlined">
        {number}
      </Button>
    </Grid>
  ));

  return (
    <Grid container>
      <Grid item>
        <Grid container style={{ width: "200px" }}>
          <Grid container style={{ border: "1px solid orange" }}>
            <Grid item>
              <Button onClick={props.allClear} variant="outlined">
                AC
              </Button>
              <Button variant="outlined">+/-</Button>
              <Button onClick={() => props.setPercent(true)} variant="outlined">
                %
              </Button>
            </Grid>
          </Grid>
          <Grid item style={{ border: "1px solid green" }}>
            <Grid container wrap="wrap-reverse">
              {numOutput}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            style={{ width: "130px" }}
            onClick={() => props.calc(0)}
            variant="outlined"
          >
            0
          </Button>
          <Button onClick={() => props.calc(".")} variant="outlined">
            .
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Button onClick={() => props.setMathOp("divided")} variant="outlined">
            /
          </Button>
          <Button
            onClick={() => props.setMathOp("multiply")}
            variant="outlined"
          >
            x
          </Button>
          <Button onClick={() => props.setMathOp("minus")} variant="outlined">
            -
          </Button>
          <Button onClick={() => props.setMathOp("plus")} variant="outlined">
            +
          </Button>
          <Button onClick={() => props.setEquals(true)} variant="outlined">
            =
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
