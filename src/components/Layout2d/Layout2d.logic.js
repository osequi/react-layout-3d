const getGridAlignments = (props) => {
  const { align } = props;

  let alignItems = "auto";
  let justifyItems = "auto";

  if (!align) return { alignItems, justifyItems };

  const splits = align.split(" ");

  if (splits[0] && splits[1]) {
    justifyItems = splits[0];
    alignItems = splits[1];
  }

  return { alignItems, justifyItems };
};

export { getGridAlignments };
