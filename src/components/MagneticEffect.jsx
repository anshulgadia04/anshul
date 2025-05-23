import React, { useRef, useState } from 'react'
import { motion, scale } from 'framer-motion'

const MagneticEffect = ({children}) => {

    const ref = useRef(null)
    const [position ,setPosition] = useState({x : 0 , y : 0});


    const mouseMove = (e) => {
        const {clientX , clientY} = e;
        const {width , height , top , left} = ref.current.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        setPosition({x,y});
    }

    const mouseLeave = (e) => {
        setPosition({x : 0 , y : 0});
    }



  return (
    <motion.div
  ref={ref}
  onMouseMove={mouseMove}
  onMouseLeave={mouseLeave}
  animate={{ x: position.x, y: position.y }}
  transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
  whileHover={{
    scale: 1.1,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
  }}
  className="cursor-pointer p-2"
>
  {children}
</motion.div>

  )
}

export default MagneticEffect