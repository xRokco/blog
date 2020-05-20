/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
          float: "left"
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{
        marginBottom: "0",
        fontSize: "1.2em"
      }}
      >
        {author.name}
      </p>
      <p style={{
        fontSize: "0.9em"
      }}>
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a> | <a href={`https://github.com/${social.github}`}>
          Github
        </a> | <a href={`https://instagram.com/${social.instagram}`}>
          Instagram
        </a>
      </p>
    </div>
  )
}

export default Bio
