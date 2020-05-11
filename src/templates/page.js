import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
// import Img from 'gatsby-image'

import SEO from "../components/seo"
import Hero from "../components/hero"
import { HTMLContent } from "../components/content"
import WhyChooseEffico from "../components/why-choose-effico"
import GalleryCarousel from "../components/gallery-carousel"
import ProudToHaveWorkedWith from "../components/proud-to-have-worked-with"
import Accreditations from "../components/accreditations"
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
  const post = data.datoCmsPage

  return (
    <>
      <SEO title={post.seo.title} description={post.seo.description} />

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
            heroMajor={post.heroMajor}
            heroMinor={post.heroMinor}
            heroIntro={post.heroIntro}
            heroImage={post.heroImage.fluid}
          />
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container flex flex-col lg:flex-row"
        >
          <motion.div
            variants={item}
            transition="easeInOut"
            className="w-full p-8 -mt-8 bg-gray-100 shadow-lg lg:w-10/12 content md:p-16 lg:pr-32"
          >
            <HTMLContent content={post.content} />
          </motion.div>

          <motion.div
            variants={item}
            transition="easeInOut"
            className="w-full mt-4 lg:w-8/12 lg:-mt-4 lg:-ml-20"
          >
            <div className="mb-4 bg-gray-200 border-white border-solid shadow-lg border-10">
              <GalleryCarousel images={post.gallery} />
            </div>

            <div className="mb-4 bg-gray-200 shadow-lg">
              <WhyChooseEffico />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container flex flex-col mt-12 lg:flex-row"
        >
          <div className="flex flex-row flex-wrap w-full p-8 border-gray-200 border-solid shadow-lg border-10">
            <div className="flex flex-row flex-wrap justify-center w-full lg:w-1/2 lg:pr-8">
              <h2 className="w-full text-gray-600">
                Proud to have worked with...
              </h2>
              <ProudToHaveWorkedWith className="w-1/2 p-2 my-auto sm:w-1/4 md:flex-1 md:w-full" />
            </div>
            <div className="flex flex-row flex-wrap justify-center w-full mt-8 lg:w-1/2 lg:pl-8 lg:m-0">
              <h2 className="w-full text-gray-600">Accreditations</h2>
              <Accreditations className="w-1/2 p-2 my-auto sm:w-1/4 md:flex-1 md:w-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container flex flex-col mt-12 lg:flex-row"
        >
          <div className="flex flex-col w-full p-8 text-white shadow-lg bg-gradient-b-green-green-dark lg:flex-row lg:flex-wrap lg:px-16">
            <h2 className="w-full text-xl text-white sm:text-2xl lg:text-center">Start your enquiry today...</h2>

            <div className="lg:w-1/2">
              <p className="mb-4">Use the details below to get in touch with us.</p>
              <PhoneNumber className="block text-white hover:text-green-light lg:mb-1 lg:text-xl" />
              <Email className="block text-white hover:text-green-light lg:text-xl" />
            </div>

            <div className="mt-8 lg:w-1/2 lg:m-0">
              <p className="mb-4">Alternatively, fill out our form below and we'll get back to you.</p>
              <QuickContactForm />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default ServicePage

export const query = graphql`
  query($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
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
        fluid(imgixParams: { w: "800", h: "520", fit: "crop", crop: "edges" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
