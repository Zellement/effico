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

const Hero = ({ heroMajor, heroMinor, heroIntro, heroImage, heroH1 }) => (
  <>
    <div className="absolute top-0 bottom-0 left-0 right-0 -z-20">
      
      <Img
        fluid={heroImage}
        className="w-full h-full"
        imgStyle={{
          objectFit: "cover",
          objectPostion: "center",
        }}
      />
    </div>

    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-75 -z-10 bg-gradient-b-green-green-dark"></div>

    <motion.div
      variants={item}
      transition="easeInOut"
      className="container p-8 pb-16 text-center text-white lg:py-16"
    >
      <span className="block text-lg md:text-2xl lg:text-3xl xl:text-4xl">{heroMinor}</span>
        {heroH1 ? <h1 className="block text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl xl:text-6xl">{heroMajor}</h1> : 
      <span className="block text-3xl font-bold leading-tight sm:text-3xl lg:text-5xl xl:text-6xl">{heroMajor}</span>}
      <p className="block max-w-xl mx-auto my-4 text-base font-display md:text-lg lg:text-xl xl:max-w-2xl">
        "{heroIntro}"
      </p>
    </motion.div>
  </>
)

export default Hero
