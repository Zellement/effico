import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
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

const ServicePage = () => {

  return (
    <>
      <SEO title="Recent Projects" description="See our recent projects" />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <motion.div
          variants={item}
          transition="easeInOut"
          className="container w-full"
        >
          <h1>Sorry!</h1>

          <p>This page doesn't exist. Please go to the <Link className="underline" to="/">home page</Link>.</p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default ServicePage
