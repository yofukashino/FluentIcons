export default ({ loader, ...buildInfo }) => {
  // return c
  return {
    ...buildInfo,
    loader: {
      ...(loader ?? {}),
      ".png": "dataurl",
      ".svg": "dataurl",
    },
  };
};
