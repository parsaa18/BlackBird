import {motion} from 'framer-motion'

const Layers = () => {
  return (
    <>
              <motion.h1               
              className="text-[9vw]"
              >ما</motion.h1>
              <motion.h1               
              className="text-[9vw] mr-[-35px]"
              > متریک</motion.h1>
              <motion.h1               
              className="text-[9vw] mr-[-35px]"
              >هستیم</motion.h1>
              <motion.div              
              className="bg-metricBlack rounded-full p-4" 
              ></motion.div>    
    </>
  )
}

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.25'  className="w-full py-10  bg-metricPurple z-20 rounded-t-3xl ">
        <motion.div className="text border-t-2 border-b-2 border-metricBlack border-zinc-300 overflow-hidden  whtiespace-nowrap font-bold text-metricBlack"
        >
          <motion.div
              className='w-full flex items-center gap-14'
              initial={{x:0}}
              animate={{x:"+900%"}}
              transition={{ease:"linear" , repeat: Infinity , duration: 60}}          
          >
              <Layers />
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       
              <Layers />       

          </motion.div>
        </motion.div>
    </div>
  )
}

export {Marquee}