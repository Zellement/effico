import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
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

const ServicePage = ({ data }) => {

  return (
    <>

      {/* <SEO
        title={post.seo.title}
        description={post.seo.description}
      /> */}

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <motion.div
          variants={item}
          transition="easeInOut"
          className="my-4 lg:my-8"
        >


        </motion.div>

      </motion.section>
    </>
  )
}

export default ServicePage

export const query = graphql`
  query($slug: String!) {
    datoCmsPage(slug: {eq: $slug})  {
      heroMajor
    }
  }
  
`