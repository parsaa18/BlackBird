import { motion } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";

// const calculateRandomBlockDelay = (rowIndex, totalRows) => {
//   const blockDelay = Math.random() * 0.5;
//   const rowDelay = (totalRows - rowIndex - 1) * 0.05;
//   return blockDelay + rowDelay;
// };

const PageTransition = ({ children, name }) => {
  // console.log(loc , "pageTransition")

  const params = useParams();
  console.log(params.name, "params");

  // const [dimensions, setDimensions] = useState({
  //   width: null,
  //   height: null,
  // });

  // const anim = (variants) => {
  //   return {
  //     variants,
  //     initial: "initial",
  //     animate: "enter",
  //     exit: "exit",
  //   };
  // };

  // const text = {
  //   initial: {
  //     opacity: 1,
  //   },
  //   enter: {
  //     opacity: 0,
  //     top: -100,
  //     transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  //     transitionEnd: { top: "47.5%" },
  //   },
  //   exit: {
  //     opacity: 1,
  //     top: "40%",
  //     transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  //   },
  // };

  // const curve = (initialPath, targetPath) => {
  //   return {
  //     initial: {
  //       d: initialPath,
  //     },
  //     enter: {
  //       d: targetPath,
  //       transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  //     },
  //     exit: {
  //       d: initialPath,
  //       transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  //     },
  //   };
  // };

  // const translate = {
  //   initial: {
  //     top: "-300px",
  //   },
  //   enter: {
  //     top: "-100vh",
  //     transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  //     transitionEnd: {
  //       top: "100vh",
  //     },
  //   },
  //   exit: {
  //     top: "-300px",
  //     transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  //   },
  // };

  // const SVG = ({ height, width }) => {
  //   const initialPath = `
  //     M0 300
  //     Q${width / 2} 0 ${width} 300
  //     L${width} ${height + 300}
  //     Q${width / 2} ${height + 600} 0 ${height + 300}
  //     L0 0
  // `;

  //   const targetPath = `
  //     M0 300
  //     Q${width / 2} 0 ${width} 300
  //     L${width} ${height}
  //     Q${width / 2} ${height} 0 ${height}
  //     L0 0
  // `;

  //   return (
  //     <motion.svg className={style.svg} {...anim(translate)}>
  //       <motion.path {...anim(curve(initialPath, targetPath))} />
  //     </motion.svg>
  //   );
  // };
  // function resize() {
  //   setDimensions({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  // }

  // useEffect(() => {
  //   resize();
  //   return () => {
  //     resize();
  //   };
  // }, []);

  return (
    <>
      {children}
      <motion.div
        initial={{
          y: "100vh",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
        }}
        animate={{
          y: "100vh",
          borderTopLeftRadius: "40%",
          borderTopRightRadius: "40%",
        }}
        exit={{
          y: "-100vh",
          borderTopLeftRadius: "60%",
          borderTopRightRadius: "60%",
        }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="slideIn bg-[#171717] fixed top-0 left-0 w-full z-[1000000] h-[200vh] "
      >
      </motion.div>
      <motion.div
        initial={{
          y: "-13vh",
          borderBottomLeftRadius: "10%",
          borderBottomRightRadius: "10%",
        }}
        animate={{
          y: "-125vh",
          borderBottomLeftRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
        exit={{
          y: "-130vh",
          borderBottomLeftRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
        transition={{ duration: 0.85, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="SlideOut bg-[#171717] text-white flex items-center justify-center text-4xl  fixed top-0 left-0 w-full z-[1000] h-[125lvh] "
      >
        <motion.p
          initial={{ opacity: 0, top: 20 }}
          animate={{ opacity: 1, top: 0 }}
          exit={{ opacity: 0.1, top: -5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-white"
        >
          {/* {routes.[params[0]]} */}
          {name ? name : params.name}
        </motion.p>
      </motion.div>
      {/* <div className={`${style.page}${style.curve}`}>
				<div
					style={{ opacity: dimensions.width == null ? 1 : 0 }}
					className={style.background}
				/>
				<motion.p className={style.route} {...anim(text)}>
					{name}
				</motion.p>
				{dimensions.width != null && <SVG {...dimensions} />}
			</div> */}
    </>
  );
};
export default PageTransition;
