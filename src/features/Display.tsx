import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: 299,
    },
    topDisplay: {
      width: "100%",
      height: 30,
      backgroundColor: "#212121",
    },
    botDisplay: {
      width: "100%",
      height: 50,
      textAlign: "right",
      backgroundColor: "#212121",
    },
    tpg: {
      color: "#fafafa",
      marginRight: 20,
    },
    tpgTop: {
      color: "#fafafa",
      marginLeft: 20,
      marginTop: 10,
    },
  })
);

interface IDisplay {
  numA: Array<number | string>;
  numB: Array<number | string>;
  mathOp: string | null;
  memCell: Array<number | string>;
}

export const Display = (props: IDisplay) => {
  const classes = useStyles();

  console.log(Number(props.numA.join("")) % 1 === 0);

  return (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.topDisplay}>
        {props.memCell.length > 0 ? (
          <Typography className={classes.tpgTop}>M </Typography>
        ) : null}
      </Grid>
      <Grid item className={classes.botDisplay}>
        {props.numA.length === 0 ? (
          <Typography variant="h3" className={classes.tpg}>
            0
          </Typography>
        ) : props.numB.length === 0 ? (
          <Typography variant="h3" className={classes.tpg}>
            {Number(props.numA.join("")) % 1 === 0 ||
            props.numA.join("") === "-"
              ? props.numA
              : Number(props.numA).toFixed(2)}
          </Typography>
        ) : (
          <Typography variant="h3" className={classes.tpg}>
            {props.numB}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
