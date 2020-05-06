import React from "react"
import { motion } from "framer-motion"
import Img from 'gatsby-image'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Hero = ({ heroMajor, heroMinor, heroIntro, heroImage }) => (
  <>
    <div className="absolute top-0 right-0 bottom-0 left-0 -z-20">
      
      <Img
        fluid={heroImage}
        className="w-full h-full"
        imgStyle={{
          objectFit: "cover",
          objectPostion: "center",
        }}
      />
    </div>

    <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full bg-gradient-b-green-green-dark opacity-75"></div>

    <motion.div
      variants={item}
      transition="easeInOut"
      className="container p-8 lg:py-16 text-white text-center pb-16"
    >
      <span className="block text-xl md:text-2xl xl:text-4xl">{heroMinor}</span>
      <span className="block font-bold text-3xl leading-tight text-5xl xl:text-6xl">
        {heroMajor}
      </span>
      <p className="my-4 block text-base font-display md:text-xl max-w-xl mx-auto lg:text-2xl xl:max-w-2xl">
        "{heroIntro}"
      </p>
    </motion.div>
  </>
)

export default Hero
