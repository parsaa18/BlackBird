export const menuSlideAnimation = {
  initial: {
    x: "calc(100% + 250px)",
  },
  enter: {
    x: "0%",
    transition: { ease: [0.76, 0, 0.24, 1], duration: 1.1  },
  },
  exit: {
    x: "calc(100% + 250px)",
    transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8 },
  },
};
// export const slideAnimation = {
//   initial: {
//     x: "80px",
//   },
//   enter: {
//     x: "0",

//     transition: { durtaion: 0.8, ease: [0.76, 0, 0.24, 1] },
//   },
//   exit: { x: "80px" },
// };
