import React from "react"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import Img from 'gatsby-image'

import SEO from "../components/seo"

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

  const post = data.datoCmsPage

  return (
    <>

      <SEO
        title={post.seo.title}
        description={post.seo.description}
      />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full relative"
      >

        <div className="absolute top-0 right-0 bottom-0 left-0 -z-20">
          <Img
            fluid={post.heroImage.fluid}
            className='w-full h-full'
            imgStyle={{
              objectFit: "cover",
              objectPostion: 'center'
            }}
          />
        </div>

        <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full bg-gradient-b-green-green-dark opacity-75"></div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container p-8 text-white text-center"
        >

          <span className="block text-xl">{post.heroMinor}</span>
          <span className="block text-2xl">{post.heroMajor}</span>
          <p className="block text-base font-display">{post.heroIntro}</p>


        </motion.div>

      </motion.section>

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
      seo {
        title
        description
        twitterCard
      }
      heroMajor
      heroMinor
      heroIntro
      heroImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      content
      gallery {
        url
        fixed {
          ...GatsbyDatoCmsFixed
        }
      }
    }
  }
  
`