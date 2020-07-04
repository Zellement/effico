import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { HTMLContent } from "../components/content"
import ProudToHaveWorkedWith from "../components/proud-to-have-worked-with"
import Accreditations from "../components/accreditations"
import WhyChooseEffico from "../components/why-choose-effico"

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
          className="container w-full -mt-8 md:flex-row md:flex"
        >
          <WhyChooseEffico className="flex-1 md:mr-2" />

          <div className="flex flex-row flex-1 mt-4 bg-gray-200 border-white border-solid shadow-lg md:mt-0 md:ml-2 border-10">
            <div className="flex w-8/12 p-8">
              <div className="flex flex-col">
                <h2 class="m-0 mb-1">Featured Project</h2>
                <h3 className="m-0 text-xl font-normal font-display">
                  {post.featuredProject.title}
                </h3>
                <p className="m-0">{post.featuredProject.completionDate}</p>
                <p className="m-0 my-2 text-sm">
                  {post.featuredProject.heroIntro}
                </p>
                <Link
                  className="self-start inline-block p-3 m-1 mt-auto text-sm text-white transition bg-green rounded-xl hover:bg-green-dark"
                  to={"/recent-projects/" + post.featuredProject.slug}
                >
                  See project
                </Link>
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
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container p-4 mt-8"
        >
          <motion.div
            variants={item}
            transition="easeInOut"
            className="flex flex-col p-8 bg-gray-100 shadow-lg md:p-16 lg:flex-row"
          >
            <motion.div
              variants={item}
              transition="easeInOut"
              className="w-full lg:w-6/12 content lg:pr-8"
            >
              <HTMLContent content={post.mainCopy} />
            </motion.div>

            <motion.div
              variants={item}
              transition="easeInOut"
              className="flex flex-row flex-wrap w-full lg:flex-col lg:w-1/2 lg:pl-4"
            >
              <div className="flex flex-row flex-wrap justify-center w-full mt-8 lg:m-0">
                <h2 className="w-full text-gray-800">Accreditations</h2>
                <Accreditations className="w-1/2 p-2 my-auto sm:w-1/4 md:flex-1 md:w-full" />
              </div>
              <div className="flex flex-row flex-wrap justify-center w-full mt-4 lg:pr-8">
                <h2 className="w-full text-gray-800">
                  Proud to have worked with...
                </h2>
                <ProudToHaveWorkedWith className="w-1/2 p-2 my-auto sm:w-1/4 md:flex-1 md:w-full" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="container flex flex-col mt-4 overflow-hidden lg:flex-row"
        >
          {post.sections.map((section, skey) => (
            <div key={skey} className="w-full ">
              {section.pages.map((page, pkey) => (
                <div key={pkey} className="flex flex-col my-4 ml-2 overflow-hidden text-white border-white border-solid shadow-lg sections md:flex-row bg-gradient-b-green-green-dark border-10 even:bg-gradient-b-blue-blue-dark">
                  <div className="flex flex-grow w-full img-container md:w-1/2">
                    <Img
                      fluid={page.heroImage.fluid}
                      className="block w-full h-40 md:h-full"
                      imgStyle={{
                        objectFit: "cover",
                        objectPostion: "center",
                      }}
                    />
                  </div>
                  <div className="flex w-full p-12 md:w-1/2">
                    <div className="flex flex-col my-auto">
                      <h2 className="m-0 text-xl">
                        {page.title}
                      </h2>
                      <p className="my-4">
                        {page.heroIntro}
                      </p>
                      <Link
                        className="self-start inline-block p-3 m-1 transition border-2 border-white border-solid rounded-xl hover:bg-white hover:text-green"
                        to={page.slug}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
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
      seo {
        description
        title
      }
      featuredProject {
        title
        completionDate(formatString: "DD MMMM YYYY")
        slug
        heroIntro
        heroImage {
          fluid(maxWidth: 300) {
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
            fluid(imgixParams: {w: "1000", h: "575", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
          }
          heroIntro
        }
      }
    }
  }
`
