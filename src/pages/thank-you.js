import React from "react"
import { motion } from "framer-motion"
import SEO from "../components/seo"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const ThanksPage = () => {

  return (
    <>
      <SEO title="Thank you" description="Thanks for getting in touch!" />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <motion.div
          variants={item}
          transition="easeInOut"
          className="container relative w-full p-8"
        >
       
          <h1>Thanks!</h1>
          <p>Thanks for getting in touch. We'll get back to you ASAP!</p>
          
        </motion.div>
      </motion.section>
    </>
  )
}

export default ThanksPage