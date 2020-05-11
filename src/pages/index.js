import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
// import Img from 'gatsby-image'

import SEO from "../components/seo"
import Hero from "../components/hero"
import ProudToHaveWorkedWith from "../components/proud-to-have-worked-with"
import Accreditations from "../components/accreditations"
import QuickContactForm from "../components/quick-contact-form"
import WhyChooseEffico from "../components/why-choose-effico"

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

const HomePage = ({ data }) => {
  const post = data.datoCmsHomepage

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
          className="relative w-full"
        >
          <Hero
            heroMajor={post.heroPrimary}
            heroMinor={post.heroSecondary}
            heroIntro={false}
            heroImage={post.heroImage.fluid}
            heroButtons={post.heroButtons}
          />
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="w-full mt-4 lg:w-8/12 lg:-mt-4 lg:-ml-20"
        ></motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container w-full -mt-8 md:flex-row md:flex"
        >
          
          <WhyChooseEffico className="flex-1 md:mr-2" />

          <div className="flex flex-row flex-1 ml-2 bg-gray-200 border-white border-solid shadow-lg border-10">
            <div className="flex w-8/12 p-8">
              <div className="flex flex-col">
                <h2 class="m-0 mb-1">Featured Project</h2>
                <h3 className="m-0 text-xl font-normal font-display">{post.featuredProject.title}</h3>
                <p className="m-0">{post.featuredProject.completionDate}</p>
                <p className="m-0 my-2 text-sm">{post.featuredProject.heroIntro}</p>
                <Link className="self-start inline-block p-3 m-1 mt-auto text-sm text-white transition bg-green rounded-xl hover:bg-green-dark" to={"/recent-projects/" + post.featuredProject.slug}>See project</Link>
              </div>
            </div>
            <Img
              fluid={post.featuredProject.heroImage.fluid}
              className="w-4/12 ml-1 opacity-25 sm:opacity-100"
              imgStyle={{
                objectFit: "cover",
                objectPostion: "center",
              }}
            />
          </div>
          {/* {posts.edges.map((projectData, key) => (
            <Link
              key={key}
              to={"/recent-projects/" + projectData.node.slug}
              className="flex p-1 md:w-1/2 recent-project-listing"
            >
              <span className="flex p-8 mb-4 text-white bg-gray-200 border-r-0 border-white border-solid shadow-lg recent-project-listing__number bg-gradient-b-green-green-dark font-display w-14 border-10">
                <span className="m-auto">{key + 1}</span>
              </span>
              <div className="relative flex-grow block mb-4 overflow-hidden bg-gray-200 border-white border-solid shadow-lg border-10">
                <Img
                  fluid={projectData.node.heroImage.fluid}
                  className="block object-cover w-full"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 z-30 flex flex-col items-start justify-center w-full h-full m-auto">
                  <h2 className="p-2 m-0 text-xl bg-white lg:text-3xl">
                    {projectData.node.title}
                  </h2>
                  <h3 className="p-2 m-0 text-lg font-normal bg-white bg-opacity-75 md:ml-4 lg:text-2xl font-display">
                    {projectData.node.heroMinor}
                  </h3>
                </div>
              </div>
            </Link>
          ))} */}
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
            <h2 className="w-full text-xl text-white sm:text-2xl lg:text-center">
              Start your enquiry today...
            </h2>

            <div className="lg:w-1/2">
              <p className="mb-4">
                Use the details below to get in touch with us.
              </p>
              <PhoneNumber className="block text-white hover:text-green-light lg:mb-1 lg:text-xl" />
              <Email className="block text-white hover:text-green-light lg:text-xl" />
            </div>

            <div className="mt-8 lg:w-1/2 lg:m-0">
              <p className="mb-4">
                Alternatively, fill out our form below and we'll get back to
                you.
              </p>
              <QuickContactForm />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default HomePage

export const query = graphql`
  query IndexQ {
    datoCmsHomepage {
      heroPrimary
      heroSecondary
      heroImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      mainCopy
      title
      heroButtons {
        displayText
        link {
          slug
        }
      }
      featuredProject {
        title
        completionDate(formatString: "DD MMMM YYYY")
        slug
        heroIntro
        heroImage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      sections {
        id
        pages {
          title
          slug
          heroImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          heroIntro
        }
      }
    }
  }
`
