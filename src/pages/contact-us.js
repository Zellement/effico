import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
// import Img from 'gatsby-image'

import SEO from "../components/seo"
import { HTMLContent } from "../components/content"
import Hero from "../components/hero"
import QuickContactForm from "../components/quick-contact-form"

import PhoneNumber from "../components/atoms/phone-number"
import Email from "../components/atoms/email"

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

const ServicePage = ({ data }) => {
  const post = data.datoCmsContactPage

  return (
    <>
      <SEO title={post.seo.title} description={post.seo.title} />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <motion.div
          variants={item}
          transition="easeInOut"
          className="relative w-full"
        >
          <Hero
            heroMajor={post.heroPrimary}
            heroMinor={post.heroSecondary}
            heroIntro={post.heroIntro}
            heroImage={post.heroImage.fluid}
          />
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container flex flex-col max-w-4xl lg:flex-row"
        >
          <motion.div
            variants={item}
            transition="easeInOut"
            className="w-full p-8 -mt-8 bg-gray-100 shadow-lg content2"
          >
            <HTMLContent className="mb-4" content={post.mainCopy} />
            <PhoneNumber className="block hover:text-green-light lg:mb-1 lg:text-xl" />
            <Email className="block hover:text-green-light lg:text-xl" />

            <div className="mx-auto mt-8">
              <QuickContactForm />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default ServicePage

export const query = graphql`
  query ContactQ {
    datoCmsContactPage {
      heroIntro
      heroPrimary
      heroSecondary
      title
      seo {
        description
        title
      }
      heroImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      mainCopy
    }
  }
`
