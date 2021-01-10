import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(1),
      paddingTop: 15,
      // border: "1px solid pink",
      width: 300,
      backgroundColor: "#212121",
    },
    firstBlock: {
      width: 213,
    },
    btn: {
      // margin: theme.spacing(1),
      margin: 3,
      border: "1px solid #fafafa",
      color: "#fafafa",
      backgroundColor: "#424242",
    },
    btnZero: {
      margin: 3,
      width: 135,
      border: "1px solid #fafafa",
      color: "#fafafa",
      backgroundColor: "#424242",
    },
    bottomPart: {
      paddingBottom: "20px",
    },
  })
);

interface IPad {
  calc: (num: number | string) => void;
  setMathOp: (arg: string | null) => void;
  setEquals: (arg: boolean) => void;
  allClear: () => void;
  setPercent: (arg: boolean) => void;
  setFillCell: (arg: string) => void;
}

export const Pad = (props: IPad) => {
  const classes = useStyles();

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numOutput = nums.map((number) => (
    <Grid item key={number}>
      <Button
        onClick={() => props.calc(number)}
        variant="outlined"
        className={classes.btn}
        // style={{ backgroundColor: "black", color: "white" }}
      >
        {number}
      </Button>
    </Grid>
  ));

  return (
    <Grid container className={classes.wrapper}>
      <Grid item>
        <Grid container className={classes.firstBlock}>
          <Grid container /* style={{ border: "1px solid orange" }} */>
            <Grid item>
              <Button
                onClick={props.allClear}
                variant="outlined"
                className={classes.btn}
                style={{ backgroundColor: "#bdbdbd" }}
              >
                AC
              </Button>
              <Button
                onClick={() => props.calc("-")}
                variant="outlined"
                className={classes.btn}
                style={{ backgroundColor: "#bdbdbd" }}
              >
                +/-
              </Button>
              <Button
                onClick={() => props.setPercent(true)}
                variant="outlined"
                className={classes.btn}
                style={{ backgroundColor: "#bdbdbd" }}
              >
                %
              </Button>
            </Grid>
          </Grid>
          <Grid container /* style={{ border: "1px solid orange" }} */>
            <Grid item>
              <Button
                onClick={() => props.setFillCell("mc")}
                variant="outlined"
                className={classes.btn}
              >
                mc
              </Button>
              <Button
                onClick={() => props.setFillCell("mr")}
                variant="outlined"
                className={classes.btn}
              >
                mr
              </Button>
              <Button
                onClick={() => props.setFillCell("m-")}
                variant="outlined"
                className={classes.btn}
              >
                m-
              </Button>
            </Grid>
          </Grid>
          <Grid item /* style={{ border: "1px solid green" }} */>
            <Grid container wrap="wrap-reverse">
              {numOutput}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.bottomPart}
          // style={{ paddingBottom: "15px" }}
        >
          <Button
            // style={{ width: "130px" }}
            onClick={() => props.calc(0)}
            variant="outlined"
            className={classes.btnZero}
          >
            0
          </Button>
          <Button
            onClick={() => props.calc(".")}
            variant="outlined"
            className={classes.btn}
          >
            ,
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Button
            onClick={() => props.setMathOp("divided")}
            variant="outlined"
            className={classes.btn}
            style={{ backgroundColor: "#ffa726" }}
          >
            /
          </Button>
          <Button
            onClick={() => props.setFillCell("m+")}
            variant="outlined"
            className={classes.btn}
            style={{ backgroundColor: "#ffa726" }}
          >
            m+
          </Button>
          <Button
            onClick={() => props.setMathOp("multiply")}
            variant="outlined"
            className={classes.btn}
            style={{ backgroundColor: "#ffa726" }}
          >
            x
          </Button>
          <Button
            onClick={() => props.setMathOp("minus")}
            variant="outlined"
            className={classes.btn}
            style={{ backgroundColor: "#ffa726" }}
          >
            -
          </Button>
          <Button
            onClick={() => props.setMathOp("plus")}
            variant="outlined"
            className={classes.btn}
            style={{ backgroundColor: "#ffa726" }}
          >
            +
          </Button>
          <Button
            onClick={() => props.setEquals(true)}
            variant="outlined"
            className={classes.btn}
            style={{ backgroundColor: "#ffa726" }}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
