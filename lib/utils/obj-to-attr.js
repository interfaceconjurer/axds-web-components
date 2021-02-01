export default (args) =>
  Object.entries(args)
    .map(([k, v]) => (v === true ? k : k + "=" + v))
    .join(" ");
