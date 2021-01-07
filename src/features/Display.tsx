interface IDisplay {
  numA: number[];
  numB: number[];
  total: number;
  mathOp: string | null;
}

export const Display = (props: IDisplay) => {
  return (
    <div style={{ border: "1px solid", height: "40px" }}>
      {props.numA.length === 0
        ? 0
        : props.total
        ? props.total
        : props.numB.length === 0
        ? props.numA
        : props.numB}
    </div>
  );
};
