import Grid from "@material-ui/core/Grid";

interface IDisplay {
  numA: Array<number | string>;
  numB: Array<number | string>;
  total: number;
  mathOp: string | null;
  memCell: Array<number | string>;
}

export const Display = (props: IDisplay) => {
  return (
    <Grid container>
      <Grid
        item
        style={{ width: "100%", height: "20px", border: "1px solid brown" }}
      >
        {props.memCell.length > 0 ? `m: ${props.memCell}` : null}
      </Grid>
      <Grid
        item
        style={{ width: "100%", height: "20px", border: "1px solid blue" }}
      >
        {props.numA.length === 0
          ? 0
          : props.total
          ? props.total
          : props.numB.length === 0
          ? props.numA
          : props.numB}
      </Grid>
    </Grid>
  );
};
