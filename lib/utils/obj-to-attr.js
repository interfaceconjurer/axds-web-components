export default (args) =>
  Object.entries(args)
    .map(([k, v]) => {
      // console.log(k, v);
      // TOTAL EDGE BLEEEDING CODE/////
      return v === true ? k : k + "=" + v;
    })
    .join(" ");
